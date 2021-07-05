import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from '../imagesZoom';

const MyRouteImage = ({ myRouteFiles }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (myRouteFiles.length === 1) {
    return (
      <>
        <img role="presentation" src={`${myRouteFiles[0].src}`} alt={`${myRouteFiles[0].src}`} onClick={onZoom} width="100%"  />
        {showImagesZoom && <ImagesZoom images={myRouteFiles} onClose={onClose}/>}
      </>
    );
  }
  if (myRouteFiles.length === 2) {
    return (
      <>
        <div>
          <img role="presentation" src={`${myRouteFiles[0].src}`} alt={`${myRouteFiles[0].src}`} width="50%" onClick={onZoom} />
          <img role="presentation" src={`${myRouteFiles[1].src}`} alt={`${myRouteFiles[1].src}`} width="50%" onClick={onZoom} />
        </div>
        {showImagesZoom && <ImagesZoom images={myRouteFiles} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div >
        <div style={{display: 'inline-block', position: 'relative' }} onClick={onZoom}>
          <img role="presentation" src={`${myRouteFiles[0].src}`} alt={`${myRouteFiles[0].src}`} width="50%" onClick={onZoom} style={{ }}/>
          <img role="presentation" src={`${myRouteFiles[1].src}`} alt={`${myRouteFiles[0].src}`} style={{verticalAlign: 'middle', display: 'inline-block', filter: `blur(5px)`}} width="50%" onClick={onZoom} />
          <div style={{ textAlign: 'center', position: 'absolute', top: '42%', left: '70%', backgroundColor: 'black', color: 'white', padding: '10px', borderRadius: '10px' }}>
          <PlusOutlined />
          <br />
          {myRouteFiles.length - 1}
          개의 사진 더보기
          </div>
        </div>

      </div>
      {showImagesZoom && <ImagesZoom images={myRouteFiles} onClose={onClose} />}
    </>
  );
};

MyRouteImage.propTypes = {
  myRouteFiles: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default MyRouteImage;
