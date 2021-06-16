import React from 'react';
import PropTypes from 'prop-types';

const MyRouteCardImages = ({ images }) => {
  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} />
      </>
    );
  }
  return (
    <>
      <div>
        <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} width="50%" />
        <img role="presentation" src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} width="50%" />
      </div>
    </>
  );
};

MyRouteCardImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default MyRouteCardImages;
