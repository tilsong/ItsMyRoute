import React, { useEffect, useState, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaWonSign } from 'react-icons/fa';
import { MdTimelapse } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { LOAD_MODAL_DATA } from '../../reducers/myRoute';

const SideBarRoute = ({ myRoute, index, color, routeModalToggle }) => {
  const dispatch = useDispatch();

  // 총 시간, 돈
  const [totalMoney, setTotalMoney] = useState('');
  const [totalTime, setTotalTime] = useState('');

  useEffect(() => {
    let tempMoney = 0;
    let tempTime = 0;
    for (let i = 0; i < myRoute.MyRouteDetails.length; i++) {
      tempMoney += parseFloat(myRoute.MyRouteDetails[i].requiredMoney);
      tempTime += parseFloat(myRoute.MyRouteDetails[i].requiredTime);
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

  const [content, setContent] = useState('');
  useEffect(() => {
    const temp = myRoute.content.replace(/<br\s*\/?>/mg, ' ');
    setContent(temp);
  }, []);

  const beforeOpenModal = useCallback(() => {
    const data = { modalMoney: totalMoney, modalTime: totalTime, order: index };
    dispatch({
      type: LOAD_MODAL_DATA,
      data,
    });
    routeModalToggle();
  }, [totalMoney, totalTime]);

  return (
    <div style={{ backgroundColor: 'white', marginTop: 10 }} onClick={beforeOpenModal}>
      <div className="myRouteTitle" style={{ position: 'relative' }}>
        <div>
          <img src={`marker${index + 1}.png`} alt={`marker${index + 1}.png`} width="11%" />
        </div>
        <div style={{ position: 'absolute', left: '40%', top: '50%', transform: 'translate(-50%, -50%)', fontSize: '20px', fontWeight: 'bold', padding: '0 0 2px' }}>
          {myRoute.title}
        </div>
        <div style={{ position: 'absolute', width: '20%', right: '0%', top: '10%', height: '25px', backgroundColor: color }} />
      </div>
      <div className="image">
        {myRoute.MyRouteFiles[0]
          && <img src={myRoute.MyRouteFiles[0].src} alt={myRoute.MyRouteFiles[0].src} width="100%" />}
      </div>
      <div className="contentFront" style={{ padding: '3px' }}>

        {content && content.substr(0, 60)}..
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {myRoute.Tags.map((tag) => (
          <div style={{ fontSize: '13px', backgroundColor: '#90D0AD', color: 'white', borderRadius: '20px', margin: '0 2px', padding: '3px', width: '30%', textAlign: 'center' }}>{tag.name}</div>
        ))}
      </div>
      <div style={{ display: 'flex', padding: '2px', fontSize: '20px', fontWeight: 'bold', paddingLeft: '6px' }}>
        <div style={{ width: '33%' }}>
          <FaRegThumbsUp /> {myRoute.Likers.length}
        </div>
        <div style={{ width: '33%' }}>
          <FaWonSign /> {totalMoney}
        </div>
        <div style={{ width: '33%' }}>
          <MdTimelapse /> {totalTime}
        </div>
      </div>
    </div>
  );
};

SideBarRoute.propTypes = {
  myRoute: PropTypes.shape({
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
    Tags: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  routeModalToggle: PropTypes.func.isRequired,
};

export default SideBarRoute;
