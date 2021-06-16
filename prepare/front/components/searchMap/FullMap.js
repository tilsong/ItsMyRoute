import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import * as config from '../../config';
import '@reach/combobox/styles.css';
import { SET_CURRENT_NUMBER, SET_PANTO } from '../../reducers/map';

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

  // 지도 center 위치 정의
  const [center, setCenter] = useState(null);
  const [clickLocation, setClickLocation] = useState(null);
  const mapRef = useRef();
  const dispatch = useDispatch();

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
        const current = { lat: position.coords.latitude, lng: position.coords.longitude};
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
    changeNumberToName(event.latLng.lat(), event.latLng.lng());
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  // 클릭했을 때 geocode 받고, 주소로 변환하기

  return (
    <div>
      <h1 style={style1}> It&#39;s My Route🔥</h1>
      <div style={style2}>{clickLocation}</div>

      <button style={locate} onClick={clickMap} panTo={panTo}>
        <img src="../currentLocation.svg" alt="compass - locate me" style={locateImage} />
      </button>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        options={options}
        onLoad={onMapLoad}
        onClick={onMapClick}
      />
    </div>
  );
};

export default FullMap;
