import React, { useCallback, useEffect } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import dotenv from 'dotenv';
import { useSelector } from 'react-redux';

dotenv.config();

const FullMap = (props) => {
  const { currentLoction } = useSelector((state) => state.map);

  const onEventChecker = useCallback((e, aug, geo) => {
    console.log(e);
    // console.log(aug);
    // console.log(geo);
  }, []);


  return (
    <div>
      <Map
        google={props.google}
        zoom={18}
        style={{ width: '100%', height: '100%' }}
        center={{
          lat: currentLoction.lat,
          lng: currentLoction.lng,
        }}
        initialCenter={{
          lat: currentLoction.lat,
          lng: currentLoction.lng,
        }}
        onClick={onEventChecker}
      >
        <Marker position={{ lat: currentLoction.lat, lng: currentLoction.lng }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLEMAP_APIKEY,
})(FullMap);
