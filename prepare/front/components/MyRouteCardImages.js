import React from 'react';

const MyRouteCardImages = ({ image }) => (
  <>
    <div>
      <img role="presentation" src={image[0].src} alt={image[0].src} width="100%" />
    </div>
  </>
);

export default MyRouteCardImages;
