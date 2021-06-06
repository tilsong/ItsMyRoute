import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';

import * as config from '../config';
import '@reach/combobox/styles.css';
import SearchLocation from './SearchLocation';
import Geocode from 'react-geocode';

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

const center = {
  lat: 43.653225,
  lng: -79.383186,
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
  margin: '90px 0 0 20px',
  padding: 0,
  fontWeight: 'bold',
};

const Test = () => {
  // 구글 apikey, 사용할 라이브러리 정의
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLEMAP_APIKEY,
    libraries,
  });

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [clickLocation, setClickLocation] = useState(null);

  // 맵의 특정 부분 클릭하면, 클릭된 부분에 마크 생기도록 하는 메소드
  const onMapClick = useCallback((event) => {
    // setMarkers((current) => [
    //   ...current,
    //   { // 위도, 경도, 현재 시간이 기록됨.
    //     lat: event.latLng.lat(),
    //     lng: event.latLng.lng(),
    //     time: new Date(),
    //   },
    // ]);
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
    Geocode.fromLatLng(event.latLng.lat(), event.latLng.lng()).then( // 경도와 위도를 매개변수로 넣음.
      (response) => {
        const address = response.results[0].formatted_address; // 전체 주소
        console.log(address);
        // const premise = response.results[0].address_components[0].long_name; //지번
        const array = address.split(' ');
        const goo = array[2]; // 구
        const dong = array[3]; // 동
        console.log(`${goo} ${dong}`);
        setClickLocation(`${goo} ${dong}`);

      },
      (error) => {
        console.error(error);
      },
    );
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // panTo, 위도와 경도를 받아 지도의 현재 위치와 줌14를 담은 객체를 반환함.
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  // 클릭했을 때 geocode 받고, 주소로 변환하기

  return (
    <div>
      <h1 style={style1}> It&#39;s My Route🔥</h1>

      <SearchLocation panTo={panTo} />
      <CurrentButton panTo={panTo} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={8}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: 'marker1.svg',
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
              <h2>Bear Spotted!</h2>
              <p>Spotted {formatRelative(selected.time, new Date())}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Test;
