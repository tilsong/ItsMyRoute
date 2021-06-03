import React from 'react';
import SideBarRoute from './SideBarRoute';

const SideBarRouteList = () => {
  const a = 1;
  return (
    <div style={{ overflow: 'auto', height: '550px' }}>
      <h2>SideBarRouteList</h2>
      <SideBarRoute />
      <SideBarRoute />
      <SideBarRoute />
      <SideBarRoute />
      <SideBarRoute />
      <SideBarRoute />
      <SideBarRoute />
    </div>
  );
};

export default SideBarRouteList;
