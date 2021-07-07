import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, Polyline } from '@react-google-maps/api';
import PropTypes from 'prop-types';
import * as config from '../../config';

const libraries = ['places'];

const mapContainerStyle = {
  width: '53vw',
  height: '55vh',
  position: 'relative',
};
const options = {
  disableDefaultUI: true,
};

const MapForRoute = ({ myRouteOne }) => {
  // 구글 apikey, 사용할 라이브러리 정의
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.GOOGLEMAP_APIKEY,
    libraries,
  });

  const [center, setCenter] = useState('');
  const [markers, setMarkers] = useState('');
  const [selected, setSelected] = useState(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    setCenter({ lat: parseFloat(myRouteOne.MyRouteDetails[0].lat), lng: parseFloat(myRouteOne.MyRouteDetails[0].lng) });
    const tempMarkers = [];
    const tempPath = [];

    for (let i = 0; i < myRouteOne.MyRouteDetails.length; i++) {
      tempMarkers.push({
        lat: parseFloat(myRouteOne.MyRouteDetails[i].lat),
        lng: parseFloat(myRouteOne.MyRouteDetails[i].lng),
        order: parseInt(myRouteOne.MyRouteDetails[i].routeOrder),
        locationName: myRouteOne.MyRouteDetails[i].locationName,
        locationAddress: myRouteOne.MyRouteDetails[i].locationAddress,
      });
    }
    setMarkers(tempMarkers);
    for (let i = 1; i < tempMarkers.length + 1; i++) {
      for (let j = 0; j < tempMarkers.length; j++) {
        if (tempMarkers[j].order === i) {
          tempPath.push({ lat: tempMarkers[j].lat, lng: tempMarkers[j].lng });
        }
      }
    }
    setPath(tempPath);
  }, []);

  const option = {
    strokeColor: '#3DA8FF',
    strokeOpacity: 0.8,
    strokeWeight: 4,
    fillColor: '#3DA8FF',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 30000,
    paths: path,
    zIndex: 1,
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div style={{ position: 'absolute', width: '70%', margin: '20px' }}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={{ lat: center.lat, lng: center.lng }}
        zoom={15}
        options={options}
      >
        {markers && markers.map((marker) => (
          <Marker
            key={marker.order}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: `https://itsmyroute.s3.ap-northeast-2.amazonaws.com/original/marker${marker.order}.png`,
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
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>{selected.order}번째 장소</div>
              <p> {selected.locationName ? selected.locationName : selected.locationAddress} </p>
            </div>
          </InfoWindow>
        ) : null}
        {path
        && (
        <Polyline
          path={path}
          options={option}
        />
        )}
      </GoogleMap>
    </div>
  );
};

MapForRoute.propTypes = {
  myRouteOne: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    User: PropTypes.object,
    UserId: PropTypes.number,
    BannerId: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.any),
    MyRouteFiles: PropTypes.arrayOf(PropTypes.any),
    MyRouteDetails: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default MapForRoute;
