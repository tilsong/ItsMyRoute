import React, { useCallback, useEffect } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import dotenv from 'dotenv';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as config from '../config';

dotenv.config();

const FullMap = (props) => {
  const { currentLocation } = useSelector((state) => state.map);
  useEffect(() => {
    console.log(props);
  }, []);
  const onEventCheck = (props) => {
    console.log(props);
  };

  return (
    <div>
      { currentLocation
      && (
      <div>
        <Map
          google={props.google}
          onClick={onEventCheck}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className="map"
          center={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          initialCenter={{
            lat: currentLocation.lat,
            lng: currentLocation.lng,
          }}
          zoom={14}
        />
        <Marker
          title="The marker`s title will appear as a tooltip."
          name="SOMA"
          icon="https://cdn0.iconfinder.com/data/icons/e-commerce-mini-icons/32/Commerce_Mini_Icons-12-512.png"
          position={{ lat: 37.499699199999995, lng: 127.025152 }}
        />
        <Marker
          position={{ lat: currentLocation.lat, lng: currentLocation.lng }}
          name="Current location"
          
        />
        <Marker position={{ lat: currentLocation.lat, lng: currentLocation.lng }} />

      </div>
      )}
    </div>
  );
};

GoogleApiWrapper.propTypes = {
  props: PropTypes.shape({
    google: PropTypes.object,
    zoom: PropTypes.number,
    center: PropTypes.object,
    initialCenter: PropTypes.object,
  }).isRequired,
};

export default GoogleApiWrapper({
  apiKey: config.GOOGLEMAP_APIKEY,
})(FullMap);
