import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Router from 'next/router';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_MYROUTE_REQUEST } from '../../reducers/myRoute';

moment.locale('ko');

const MyRouteTop = ({ myRouteOne }) => {
  // 총 시간, 돈
  const [totalMoney, setTotalMoney] = useState('');
  const [totalTime, setTotalTime] = useState('');
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
  }, []);

  const deleteMyRoute = useCallback(() => {
    if (confirm('게시물을 삭제하시겠습니까?')) {
      dispatch({
        type: DELETE_MYROUTE_REQUEST,
        data: myRouteOne.id,
      });
      Router.push('/myPage');
    }
  }, []);
  const updateMyRoute = useCallback(() => {
    Router.push('/updateMyRoute');
  }, []);

  const moveToId = useCallback(() => {
    Router.push(`/user/${myRouteOne.UserId}`);
  }, []);
  return (
    <div className="myRouteTop" style={{ position: 'relative', background: '#5D99FD', height: '200px' }}>
      <div className="writer" onClick={moveToId} style={{ cursor: 'pointer', position: 'absolute', fontSize: '30px', fontWeight: 'bold', left: '100px', top: '10px', color: 'white' }}>
        {myRouteOne.User.nickname}
      </div>
      {parseInt(myRouteOne.UserId) === me.id && (
      <div style={{ position: 'absolute', right: '1%', top: '3%' }}>
        <Button onClick={deleteMyRoute}> 삭제</Button>
        <Button onClick={updateMyRoute}> 수정</Button>
      </div>
      )}

      <div className="myRouteTitle" style={{ fontSize: '70px', position: 'absolute', top: '50px', left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        {myRouteOne.title}
      </div>
      <div className="createdTime" style={{ position: 'absolute', fontSize: '15px', fontWeight: 'bold', left: '100px', bottom: '10px' }}>
        {moment(myRouteOne.createdAt).startOf('hour').fromNow()}
      </div>
      <div className="localTimeMoney" style={{ position: 'absolute', fontSize: '15px', fontWeight: 'bold', right: '100px', bottom: '10px' }}>
        {myRouteOne.routeLocalName} | {totalTime}분 | {totalMoney}원
      </div>
    </div>
  );
};

MyRouteTop.propTypes = {
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

export default MyRouteTop;
