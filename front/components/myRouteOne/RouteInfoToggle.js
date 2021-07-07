import React, { useCallback, useState } from 'react';
import { MdArrowDropDownCircle } from 'react-icons/md';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import FullRouteModal from './FullRouteModal';

const RouteInfoToggle = ({ myRouteOne }) => {
  const [seeRoute, setSeeRoute] = useState(false);
  const seeRouteToggle = useCallback(() => {
    setSeeRoute(!seeRoute);
  }, [seeRoute]);

  const [fullRoute, setFullRoute] = useState(false);
  const fullRouteOpenToggle = useCallback(() => {
    setFullRoute(() => true);
  }, [fullRoute]);

  return (
    <div className="seeRoutes" style={{ position: 'relative', backgroundColor: '#DADAF5', width: '36%', left: '32%', right: '32%', top: '10px', padding: '10px', borderRadius: '5px' }}>
      <div style={{ margin: 0, padding: 0, fontSize: '20px', fontWeight: 'bold', textAlign: 'center', cursor: 'pointer' }} onClick={seeRouteToggle}>
        <MdArrowDropDownCircle />
        &nbsp;&nbsp;경로 보기
      </div>
      <div>
        {seeRoute && myRouteOne.MyRouteDetails.map((route) => (
          <div style={{ padding: '20px' }}>
            <div style={{ float: 'left' }}>
              {route.routeOrder} {route.locationName ? route.locationName : route.locationAddress } •
            </div>
            <div style={{ fontWeight: 'bold', float: 'left' }}>
              {route.requiredTime}분 • {route.requiredMoney}원
            </div>
          </div>
        ))}
      </div>
      <div>
        {seeRoute && <Button onClick={fullRouteOpenToggle} type="button" style={{ margin: '2% 2% 2% 60%' }}>지도와 보기</Button>}
      </div>
      {fullRoute
      && <FullRouteModal myRouteOne={myRouteOne} fullRouteOpenToggle={fullRouteOpenToggle} setFullRoute={setFullRoute} fullRoute={fullRoute}/>}
    </div>
  );
};

RouteInfoToggle.propTypes = {
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

export default RouteInfoToggle;
