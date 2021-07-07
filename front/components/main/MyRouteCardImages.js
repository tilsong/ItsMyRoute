import React from 'react';
import PropTypes from 'prop-types';

const MyRouteCardImages = ({ images }) => {
  if (images.length === 1) {
    return (
      <div style={{ width: '100%', padding: '0 2%' }}>
        <img role="presentation" src={`${images[0].src}`} alt={images[0].src} width="100%" hegith="100%" />
      </div>
    );
  }
  return (
    <div style={{ width: '100%', padding: '0 2%' }}>
        <img role="presentation" src={`${images[0].src}`} alt={images[0].src} width="50%" />
        <img role="presentation" src={`${images[1].src}`} alt={images[1].src} width="50%" />
    </div>
  );
};

MyRouteCardImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default MyRouteCardImages;
