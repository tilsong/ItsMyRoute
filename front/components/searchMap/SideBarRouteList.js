import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import RouteModal from './RouteModal';
import SideBarRoute from './SideBarRoute';

const SideBarRouteList = () => {
  const { hereMyRoutes } = useSelector((state) => state.myRoute);
  const colors = ['#FF668F', '#7FE5F0', '#FFA8BF', '#0055FF', '#FFE4E1', '#1B1A1C', '#A7A897', '#5E4474', '#1F7150', 'white'];
  const { modalData } = useSelector((state) => state.myRoute);

  // 세부 루트 모달
  const [routeModal, setRouteModal] = useState(false);
  const routeModalOnToggle = useCallback(() => {
    setRouteModal(() => true);
  }, [modalData, routeModal]);
  const routeModalOffToggle = useCallback(() => {
    setRouteModal(() => false);
  }, [modalData, routeModal]);

  return (
    <div style={{ overflow: 'auto', height: '620px' }}>
      {routeModal
       && (
       <RouteModal
         myRoute={hereMyRoutes[modalData.order]}
         modalMoney={modalData.modalMoney}
         modalTime={modalData.modalTime}
         routeModalOffToggle={routeModalOffToggle}
       />
       )}
      <div style={{ fontSize: '20px', fontWeight: 'bold' }}>주변</div>
      {hereMyRoutes && hereMyRoutes.map((myRoute, i) => (
        <SideBarRoute
          myRoute={myRoute}
          index={i}
          color={colors[i]}
          routeModalOnToggle={routeModalOnToggle}
        />
      ))}
    </div>
  );
};

export default SideBarRouteList;
