import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapForRoute from './MapForRoute';

const FullRouteModal = ({ myRouteOne, fullRouteOpenToggle, setFullRoute, fullRoute }) => {
  const fullRouteCloseToggle = useCallback(() => {
    setFullRoute(() => false);
  }, [fullRoute]);

  // 총 시간, 돈
  const [totalMoney, setTotalMoney] = useState('');
  const [totalTime, setTotalTime] = useState('');

  useEffect(() => {
    let tempMoney = 0;
    let tempTime = 0;
    for (let i = 0; i < myRouteOne.MyRouteDetails.length; i++) {
      tempMoney += parseFloat(myRouteOne.MyRouteDetails[i].requiredMoney);
      tempTime += parseFloat(myRouteOne.MyRouteDetails[i].requiredTime);
    }
    if (isNaN(tempMoney)) {
      tempMoney = '0';
    }
    if (isNaN(tempTime)) {
      tempTime = '0';
    }
    setTotalMoney(tempMoney);
    setTotalTime(tempTime);
  }, [totalMoney, totalTime]);

  return (
    <div className="modalWrapper" style={{ zIndex: '40', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
      <div onClick={fullRouteCloseToggle}>
        <div
          className="fullRouteModal"
          style={{
            height: '80%',
            width: '90%',
            backgroundColor: 'white',
            position: 'relative',
            margin: '50px auto',
            padding: '0px 10px 10px',
            background: '#fff' }}
        >
          <span onClick={fullRouteCloseToggle} style={{ float: 'right', fontSize: '30px' }}> X</span>
          <div style={{
            position: 'relative',
            zIndex: 50,
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            height: '67vh',
          }}
          >
            <div style={{ paddingTop: '1%', width: '70%', height: '65vh', margin: '0' }}>
              <MapForRoute myRouteOne={myRouteOne} />
            </div>
            <div style={{ width: '40%', margin: '0', backgroundColor: '#F8F8F8', overflow: 'auto' }}>
              <div style={{ fontSize: '40px', textAlign: 'center', fontWeight: 'bold', marginTop: '20px' }}>
                지도와 보기
              </div>
              <hr style={{ width: '70%', margin: '5px auto 0' }} />
              <div>
                { myRouteOne.MyRouteDetails.map((route) => (
                  <div style={{ padding: '10px 15% 20px 5%' }}>
                    <span>
                      {route.routeOrder} {route.locationName ? route.locationName : route.locationAddress} •
                    </span>
                    <span style={{ fontWeight: 'bold' }}>
                      {route.requiredTime}분 • {route.requiredMoney}원
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ margin: '50px 0'}} />
              <hr style={{ width: '70%', margin: '20px auto' }} />
              <div style={{ textAlign: 'center' }}>
                총 소요시간 {totalTime}분, 총 소비금액 {totalMoney}원
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

FullRouteModal.propTypes = {
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
  fullRouteOpenToggle: PropTypes.func.isRequired,
  setFullRoute: PropTypes.func.isRequired,
  fullRoute: PropTypes.bool.isRequired,
};

export default FullRouteModal;
