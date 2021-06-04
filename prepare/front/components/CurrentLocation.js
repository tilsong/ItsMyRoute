import React, { useState, useCallback, useEffect } from 'react';
import Geocode from 'react-geocode';
import { BiCurrentLocation } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { SET_CURRENTLOCATION_REQUEST } from '../reducers/map';
import * as config from '../config';

const key = config.GOOGLEMAP_APIKEY;

Geocode.setApiKey(key);
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.enableDebug();

const CurrentLocation = ({ currentLocation }) => {
  const dispatch = useDispatch();
  const [center, setCenter] = useState('');

  useEffect(() => {
    console.log(currentLocation);
    if (currentLocation !== null) {
      Geocode.fromLatLng(currentLocation.lat, currentLocation.lng).then( // 경도와 위도를 매개변수로 넣음.
        (response) => {
          const address = response.results[0].formatted_address; // 전체 주소
          console.log(address);
          // const premise = response.results[0].address_components[0].long_name; //지번
          const array = address.split(' ');
          const goo = array[2]; // 구
          const dong = array[3]; // 동
          console.log(`${goo}${dong}`);
          setCenter(`${goo} ${dong}`);
        },
        (error) => {
          console.error(error);
        },
      );
    }
  }, [currentLocation]);

  const moveHere = useCallback(() => { // 클릭 시 현재 위치로 지도 중심 이동. 리렌더링 되므로 현재 위치명도 바뀜
    console.log('here');
    dispatch({
      type: SET_CURRENTLOCATION_REQUEST,
    });
  }, []);

  return (
    <div>
      현재 위치 : {center}
      <BiCurrentLocation
        style={{ fontSize: '20px', cursor: 'pointer' }}
        onClick={moveHere}
      />
    </div>
  );
};

CurrentLocation.propTypes = {
  currentLocation: PropTypes.shape({
    lat: PropTypes.string,
    lng: PropTypes.string,
  }).isRequired,
};

export default CurrentLocation;

// 첫 로드될 때 한 번 지도의 중심을 현재 위치로 이동시킴. 새로 고침 안하면 한번만!
