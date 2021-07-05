import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker, Polyline, InfoWindow } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import * as config from '../../config';
import '@reach/combobox/styles.css';
import { SET_CURRENT_NUMBER, SET_PANTO } from '../../reducers/map';
import { LOAD_HERE_MYROUTES_REQUEST, LOAD_MYROUTES_REQUEST } from '../../reducers/myRoute';

const key = config.GOOGLEMAP_APIKEY;

Geocode.setApiKey(key);
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.enableDebug();

const libraries = ['places'];

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

const options = {
  disableDefaultUI: true,
};

const style1 = {
  position: 'absolute',
  top: '1rem',
  left: '1rem',
  color: '#281414',
  zIndex: 10,
  margin: '20px 0 0 20px',
  padding: 0,
  fontWeight: 'bold',
};

const style2 = {
  position: 'absolute',
  top: '30px',
  left: '50%',
  color: '#281414',
  zIndex: 10,
  margin: '20px 0 0 20px',
  padding: 0,
  fontWeight: 'bold',
  fontSize: '20px',
};
const locate = {
  position: 'absolute',
  top: '40px',
  right: '20px',
  background: 'none',
  border: 'none',
  zIndex: 10,
};

const locateImage = {
  cursor: 'pointer',
  width: '30px',
};

const FullMap = () => {
  // 구글 apikey, 사용할 라이브러리 정의
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLEMAP_APIKEY,
    libraries,
  });

  const colors = ['#FF668F', '#7FE5F0', '#FFA8BF', '#0055FF', '#FFE4E1', '#1B1A1C', '#A7A897', '#5E4474', '#1F7150', 'white' ];

  const dispatch = useDispatch();
  const { hereMyRoutes, myRoutes } = useSelector((state) => state.myRoute);
  const [markerArray, setMarkerArray] = useState('');
  const [pathArray, setPathArray] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const lastId = 10;
    dispatch({
      type: LOAD_MYROUTES_REQUEST,
      lastId,
    });
  }, []);


  useEffect(() => {
    let tempArray = [];
    const tempMarkerList = [];
    const tempPathList = [];
    for (let i = 0; i < myRoutes.length; i++) {
      for (let j = 0; j < myRoutes[i].MyRouteDetails.length; j++) {
        tempArray.push({
          lat: parseFloat( myRoutes[i].MyRouteDetails[j].lat),
          lng: parseFloat( myRoutes[i].MyRouteDetails[j].lng),
          order: parseInt(myRoutes[i].MyRouteDetails[j].routeOrder),
          locationName: myRoutes[i].MyRouteDetails[j].locationName,
          locationAdrress: myRoutes[i].MyRouteDetails[j].locationAddress,
        });
      }
      tempMarkerList.push(tempArray);
      tempArray = [];
    }
    for (let i = 0; i < tempMarkerList.length; i++) {
      for (let j = 0; j < tempMarkerList[i].length; j++) {
        tempArray.push({
          lat: tempMarkerList[i][j].lat,
          lng: tempMarkerList[i][j].lng,
        });
      }
      tempPathList.push(tempArray);
      tempArray = [];
    }

    setMarkerArray(tempMarkerList);
    setPathArray(tempPathList);
  }, [myRoutes]);

  useEffect(() => {
    if(!hereMyRoutes) {
      return;
    }
    let tempArray = [];
    const tempMarkerList = [];
    const tempPathList = [];
    for (let i = 0; i < hereMyRoutes.length; i++) {
      for (let j = 0; j < hereMyRoutes[i].MyRouteDetails.length; j++) {
        tempArray.push({
          lat: parseFloat( hereMyRoutes[i].MyRouteDetails[j].lat),
          lng: parseFloat( hereMyRoutes[i].MyRouteDetails[j].lng),
          order: parseInt(hereMyRoutes[i].MyRouteDetails[j].routeOrder),
          locationName: hereMyRoutes[i].MyRouteDetails[j].locationName,
          locationAdrress: hereMyRoutes[i].MyRouteDetails[j].locationAddress,
        });
      }
      tempMarkerList.push(tempArray);
      tempArray = [];
    }
    for (let i = 0; i < tempMarkerList.length; i++) {
      for (let j = 0; j < tempMarkerList[i].length; j++) {
        tempArray.push({
          lat: tempMarkerList[i][j].lat,
          lng: tempMarkerList[i][j].lng,
        });
      }
      tempPathList.push(tempArray);
      tempArray = [];
    }

    setMarkerArray(tempMarkerList);
    setPathArray(tempPathList);
  }, [hereMyRoutes]);

  // 지도 center 위치 정의
  const [center, setCenter] = useState(null);
  const [clickLocation, setClickLocation] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    if (clickLocation) {
      console.log(clickLocation);
      console.log(mapRef.current.zoom);
      const locationSplit = clickLocation.split(' ');
      // if (parseInt(mapRef.current.zoom) >= 13 && parseInt(mapRef.current.zoom) <16) {
        dispatch({
          type: LOAD_HERE_MYROUTES_REQUEST,
          data: { locationGu: locationSplit[0] },
        });
      // } else if (parseInt(mapRef.current.zoom) >= 16) {
      //   dispatch({
      //     type: LOAD_HERE_MYROUTES_REQUEST,
      //     data: { locationDong: clickLocation },
      //   });
      // }
    }
  }, [clickLocation]);

  // panTo, 위도와 경도를 받아 지도의 현재 위치와 줌16를 담은 객체를 반환함.
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  // 위치의 위도와 경도를 문자로 반환해서 지도 상단에 출력
  const changeNumberToName = useCallback((lat, lng) => {
    Geocode.fromLatLng(lat, lng).then( // 경도와 위도를 매개변수로 넣음.
      (response) => {
        const address = response.results[0].formatted_address; // 전체 주소
        const array = address.split(' ');
        const goo = array[2]; // 구
        const dong = array[3]; // 동 => undefined 처리하기.
        setClickLocation(`${goo} ${dong}`); // 상단 글씨 출력
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  // 현재 위치 지도 인스턴스들에 넣기
  const clickMap = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const current = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCenter(current);
        panTo(current);
        // 상단에 현재 위치 출력 함수 실행
        changeNumberToName(position.coords.latitude, position.coords.longitude);
        dispatch({
          type: SET_CURRENT_NUMBER,
          data: current,
        });
      },
      () => null,
    );
  }, []);

  // 지도 로드 시 지도 상단 지역명 함수 실행
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
    clickMap(); // 현재 위치 적용
    dispatch({ // , 사이드바의 검색바에 필요한 내용 dispatch
      type: SET_PANTO,
      data: panTo,
    });
  }, []);

  // 지도 클릭 시 해당 위치의 정보
  const onMapClick = useCallback((event) => {
    const current = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    changeNumberToName(current.lat, current.lng);
    setCenter(current);
  }, [center]);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  // 클릭했을 때 geocode 받고, 주소로 변환하기

  return (
    <div>
      <h1 style={style1}> It&#39;s My Route🔥</h1>
      <div style={style2}>{clickLocation}</div>

      <button type="button" style={locate} onClick={clickMap} panTo={panTo}>
        <img src="../currentLocation.svg" alt="compass - locate me" style={locateImage} />
      </button>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={16}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClick}
      >
        {markerArray && markerArray.map((markerOne) => (
          markerOne.map((place) => (
            <Marker
              key={place.order}
              position={{ lat: place.lat, lng: place.lng }}
              icon={{
                url: `https://itsmyroute.s3.ap-northeast-2.amazonaws.com/original/marker${place.order}.png`,
                scaledSize: new window.google.maps.Size(30, 30),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
              }}
              onClick={() => {
                setSelected(place);
              }}
            />
          ))
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h2>{selected.order}번째 장소</h2>
              <p>{selected.locationName ? selected.locationName: selected.locationAdrress } </p>
            </div>
          </InfoWindow>
        ) : null}
        {pathArray
        && pathArray.map((path, i) => (
          <Polyline
            path={path}
            options={{
              strokeColor: colors[i], strokeOpacity: 0.8,
              strokeWeight: 6, fillColor: '#3DA8FF', fillOpacity: 0.35,
              clickable: false, draggable: false, editable: false,
              visible: true, radius: 30000, zIndex: 1,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default FullMap;
