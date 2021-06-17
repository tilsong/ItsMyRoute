import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import styled from 'styled-components';
import * as config from '../../config';
import '@reach/combobox/styles.css';
import SearchLocation from '../searchMap/SearchLocation';
import NamingLocationModal from './NamingLocationModal';
import HowMuchModal from './HowMuchModal';
import { current } from 'immer';

const key = config.GOOGLEMAP_APIKEY;

// Geocode 세팅
Geocode.setApiKey(key);
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.enableDebug();

const libraries = ['places'];

const mapContainerStyle = {
  width: '50vw',
  height: '80vh',
  position: 'relative',
};

const options = {
  disableDefaultUI: true,
};

const locate = {
  position: 'absolute',
  top: '30px',
  right: '5%',
  background: 'none',
  border: 'none',
  zIndex: 10,
};

const locateImage = {
  cursor: 'pointer',
  width: '35px',
};

const ModalDiv = styled.div`
  z-index: 10;
  position: absolute;
  bottom: 10px;
`;

const AddLocation = () => {
  // 구글 apikey, 사용할 라이브러리 정의
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLEMAP_APIKEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [path, setPath] = useState('');

  // 지도 center 위치 정의
  const [center, setCenter] = useState(null); // 지도 중심의 위도 경도
  const [clickLocationNumber, setClickLocationNumber] = useState([{}]); // 클릭한 장소의 위도 경도
  const [clickLocationName, setClickLocationName] = useState({}); // 클릭한 장소의 이름
  const mapRef = useRef();

  // 모달로 작성이 완료된 위치 배열
  const [locationInfoArray, setLocationInfoArray] = useState([]);

  // Naming Modal
  const [namingModal, setNamingModal] = useState(false);
  const namingModalToggle = useCallback(() => {
    setNamingModal(!namingModal);
  }, [namingModal]);

  // HowMuch Modal
  const [howMuchModal, setHowMuchModal] = useState(false);
  const howMuchModalToggle = useCallback(() => {
    setHowMuchModal(!howMuchModal);
  }, [howMuchModal]);

  const chilRef = useRef();
  const [tempLocation, setTempLocation] = useState('');

  const getLocation = (location) => {
    setTempLocation(location);
  };

  const nextModal = useCallback(() => {
    chilRef.current.send();
    namingModalToggle();
    howMuchModalToggle();
  }, [tempLocation, namingModal, howMuchModal]);

  const getTimeAndMoney = (time, money) => {
    setLocationInfoArray((currentstate) => [
      ...currentstate,
      {
        locationName: tempLocation,
        requireTime: time,
        requiredMoney: money,
        latLng: clickLocationNumber,
      },
    ]);
    if (markers.length < 1) {
      setMarkers(() => [
        {
          order: 1,
          lat: clickLocationNumber.lat,
          lng: clickLocationNumber.lng,
          time: new Date(),
          locaName: tempLocation,
        },
      ]);
    } else {
      setMarkers((currentMarkers) => [
        ...currentMarkers,
        {
          order: currentMarkers[currentMarkers.length - 1].order + 1,  //markers.length + 1,
          lat: clickLocationNumber.lat,
          lng: clickLocationNumber.lng,
          time: new Date(),
          locaName: tempLocation,
        },
      ]);
    }
    if (path.length < 1) {
      setPath(() => [
        {
          lat: clickLocationNumber.lat,
          lng: clickLocationNumber.lng,
        },
      ]);
    } else {
      setPath((currentPath) => [
        ...currentPath,
        {
          lat: clickLocationNumber.lat,
          lng: clickLocationNumber.lng,
        },
      ]);
    }
  };

  const finishModal = useCallback(() => {
    chilRef.current.add();
    howMuchModalToggle();
  }, [tempLocation, howMuchModal, locationInfoArray]);

  const deleteLocation = useCallback( () => {
    // locationInfoArray 삭제, markers 삭제, polyline 연결
    setMarkers((current) => 
      current.filter((v) => (v.order) !== selected.order)
    );
    setPath((current) => 
      [ ...current.slice(0, selected.order - 1).concat(...current.slice(selected.order, current.length+1))]
    );
    setLocationInfoArray((current) => 
      [ ...current.slice(0, selected.order - 1).concat(...current.slice(selected.order, current.length+1))]
    );
    setSelected(null);
    
    // markers.order 재구성 
    // 어떻게 하면.. 모든 배열의 요소를 돌면서 order를 다시 정해줄 수 있을까?
    // map 


  }, [selected, markers, locationInfoArray, path]);


  useEffect(() => {
    console.log('locationInfoArray', locationInfoArray);
    console.log('markers', markers);
    console.log('path', path);
  }, [markers, locationInfoArray, path]);

  // 위치의 위도와 경도를 문자로 반환해서 상태 저장
  const changeNumberToName = useCallback((lat, lng) => {
    Geocode.fromLatLng(lat, lng).then( // 경도와 위도를 매개변수로 넣음.
      (response) => {
        const fullAddress = response.results[0].formatted_address; // 전체 주소
        const splitFullAddress = fullAddress.split(' ');
        let address = ''; // 국가 이름 제외한 주소
        for (let i = 1; i < splitFullAddress.length; i++) {
          address += (` ${splitFullAddress[i]}`);
        }
        setClickLocationName(address); // 문자 주소도 저장
        namingModalToggle(); // 클릭한 위치 명칭 보여주는 모달 창 실행
      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  // 지도 클릭 시 해당 위치의 위도 경도 저장하고, 문자주소 저장 함수 실행
  const centerToClickLocation = useCallback((event) => {
    console.log('array 개수', locationInfoArray.length);
    if (locationInfoArray.length > 8) { 
      return alert("경로는 9개까지 추가 가능합니다.");
    }
    // 위도 경도 상태 저장
    setClickLocationNumber({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    // 문자 주소 저장 함수 실행
    console.log(event.latLng.lat(), event.latLng.lng());
    changeNumberToName(event.latLng.lat(), event.latLng.lng());
  }, [locationInfoArray]);

  // 위도와 경도를 받아 지도 객체에 저장
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  // 현재 위치 가져오기
  const centerToCurrent = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCenter(currentLocation); // 지도 중심을 현재 위치로 이동
        panTo(currentLocation); // 위도와 경도를 받아 지도 객체에 저장
      },
      () => null,
    );
  }, []);

  // PolyLine Load
  const onLoad = (polyline) => {
    console.log('polyline: ', polyline);
  };

  const option = {
    strokeColor: '#3DA8FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#3DA8FF',
    fillOpacity: 0.35,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: path,
    zIndex: 1,
  };

  // 지도 로드 시 지도 상단 지역명 함수 실행
  const onMapLoad = useCallback((map) => {
    mapRef.current = map; // 지도 객체 참조 생성
    centerToCurrent(); // 현재 위치를 지도 중심으로 적용.
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <button type="button" style={locate} onClick={centerToCurrent} panTo={panTo}>
        <img src="../../currentLocation.svg" alt="compass - locate me" style={locateImage} />
      </button>
      <SearchLocation panTo={panTo} currentNumber={center} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        options={options}
        onLoad={onMapLoad}
        onClick={centerToClickLocation}
      >
        <ModalDiv>
          {namingModal
          && (
          <NamingLocationModal
            clickLocationName={clickLocationName}
            namingModalToggle={namingModalToggle}
            cref={chilRef}
            getLocation={getLocation}
            nextModal={nextModal}
          />
          )}
          {howMuchModal
          && (
          <HowMuchModal
            cref={chilRef}
            howMuchModalToggle={howMuchModalToggle}
            finishModal={finishModal}
            getTimeAndMoney={getTimeAndMoney}
          />
          )}
        </ModalDiv>
        {markers && markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `marker${marker.order}.png`,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(marker);
            }}
          />
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
              <p>이곳의 이름은  {selected.locaName} </p>
              <button onClick={deleteLocation}>삭제</button>
            </div>
          </InfoWindow>
        ) : null}
        {path
        && (
        <Polyline
          onLoad={onLoad}
          path={path}
          options={option}
        />
        )}

      </GoogleMap>
    </div>
  );
};

export default AddLocation;
