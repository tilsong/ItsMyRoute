import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Polyline } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import * as config from '../config';

import '@reach/combobox/styles.css';

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

const AddLocation = () => {
  // 구글 apikey, 사용할 라이브러리 정의
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLEMAP_APIKEY,
    libraries,
  });

  // 지도 center 위치 정의
  const [center, setCenter] = useState(null); // 지도 중심의 위도 경도
  const mapRef = useRef();

  // 위도와 경도를 받아 지도 객체에 저장
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);

  // 현재 위치 가져오기
  const centerToCurrent = useCallback(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const current = { lat: position.coords.latitude, lng: position.coords.longitude };
        setCenter(current); // 지도 중심을 현재 위치로 이동
        panTo(current); // 위도와 경도를 받아 지도 객체에 저장
      },
      () => null,
    );
  }, []);

  // 지도 로드 시 지도 상단 지역명 함수 실행
  const onMapLoad = useCallback((map) => {
    mapRef.current = map; // 지도 객체 참조 생성
    centerToCurrent(); // 현재 위치를 지도 중심으로 적용.
  }, []);
  const onLoad = (polyline) => {
    console.log('polyline: ', polyline);
  };

  const path = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];

  const option = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: [
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ],
    zIndex: 1,
  };
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <button type="button" style={locate} onClick={centerToCurrent} panTo={panTo}>
        <img src="../../currentLocation.svg" alt="compass - locate me" style={locateImage} />
      </button>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{
          lat: 0,
          lng: -180,
        }}
        zoom={8}
        options={options}
        onLoad={onMapLoad}
      >
        <Polyline
          onLoad={onLoad}
          path={path}
          options={option}
        />
      </GoogleMap>
    </div>
  );
};

export default AddLocation;
