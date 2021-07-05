import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import moment from 'moment';
moment.locale('ko');

const UserMyRoute = ({ myRoute }) => {
  const moveMyRouteOne = useCallback(() => {
    Router.push(`/myRoute/${myRoute.id}`);
  }, [] );
  return (
    <div style={{ position: 'relative', border : '1px solid white', borderRadius: '10px', margin: '30px 20% 130px', height: '400px', backgroundColor: 'ivory', cursor: 'pointer' }} onClick={moveMyRouteOne}>
      { myRoute.MyRouteFiles[0]
      ? ( 
      <img role="presentation" src={`${myRoute.MyRouteFiles[0].src}`} alt={`${myRoute.MyRouteFiles[0].src}`} width="100%" height="100%" style={{ borderRadius: '10px'}} />
      )
      : (
      <div style={{ position: 'absolute', bottom: '30%', left: '50%', transform: `translate(-50%, -10%)`, fontSize: '80px', fontWeight: 'bold', textAlign: 'center' }}>
        {myRoute.title}
      </div>
      )}
      <div style={{ position: 'absolute', bottom: '-20%', width: '100%', left: '50%', transform: 'translateX(-50%)', fontSize: '35px', fontWeight: 'bold', textAlign: 'center' }}>
        {myRoute.title} <div style={{ fontSize: '14px', marginTop: '2px' }}> Around {myRoute.routeLocalName}</div>
      </div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '0%', fontSize: '14px' }}>
        {moment(myRoute.createdAt).startOf('hour').fromNow()}
      </div>
    </div>
  );
};

// myRoute.propTypes = {
//   myRoute: PropTypes.shape({
//     id: PropTypes.number,
//     title: PropTypes.string,
//     content: PropTypes.string,
//     createdAt: PropTypes.string,
//     updatedAt: PropTypes.string,
//     UserId: PropTypes.number,
//     BannerId: PropTypes.string,
//     Comments: PropTypes.arrayOf(PropTypes.any),
//     MyRouteFiles: PropTypes.arrayOf(PropTypes.any),
//     MyRouteDetails: PropTypes.arrayOf(PropTypes.object),
//     Likers: PropTypes.arrayOf(PropTypes.object),
//   }).isRequired,
// };

export default UserMyRoute;
