import React, { useCallback, useEffect } from 'react';

import Geocode from 'react-geocode';
import { BiCurrentLocation } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CURRENTLOCATION } from '../reducers/map';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
Geocode.setLanguage('ko');
Geocode.setRegion('ko');
Geocode.enableDebug();

const CurrentLocation = () => {
  const dispatch = useDispatch();
  const { currentLoction } = useSelector((state) => state.map);
  const { lat, lng } = currentLoction;

  useEffect(() => { // 첫 로드될 때 한 번
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      dispatch({
        type: SET_CURRENTLOCATION,
        data: { lat: position.coords.latitude, lng: position.coords.longitude },
      });
    });
  }, []);

  const moveHere = useCallback(() => { // 클릭 시 현재 위치로 지도 중심 이동
    console.log('here');
    dispatch({
      type: SET_CURRENTLOCATION,
      data: { lat, lng },
    });
  });

  return (
    <div>현재 위치 : 경도{lat} 위도{lng} <BiCurrentLocation style={{ fontSize: '20px', cursor: 'pointer' }} onClick={moveHere} /></div>
  );
};

export default CurrentLocation;
