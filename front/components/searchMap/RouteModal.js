import React, { useCallback, useEffect, useState } from 'react';
import { FaRegThumbsUp, FaWonSign } from 'react-icons/fa';
import { MdTimelapse } from 'react-icons/md';
import PropTypes from 'prop-types';
import { BiBookmarkPlus, BiCaretDownCircle, BiShareAlt } from 'react-icons/bi';
import { Avatar, List, Comment } from 'antd';
import Router from 'next/router';
import { GrFormClose } from 'react-icons/gr';

const modalStyle = {
  position: 'absolute',
  left: '100%',
  top: '0%',
  zIndex: 20,
  width: '100%',
  height: '100%',
  backgroundColor: '#F8F8F8',
  overflow: 'auto',
};

const RouteModal = ({ myRoute, modalMoney, modalTime, routeModalOffToggle }) => {
  const [miniContents, setMiniContents] = useState('');
  const [semiContents, setSemiContents] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const temp = myRoute.content.replace(/<br\s*\/?>/mg, ' ');
    setMiniContents(temp.substring(0, 70));
    setComments(myRoute.Comments.slice(0, 5));
  }, [myRoute, modalMoney, modalTime]);

  const moreInfo = useCallback(() => {
    const temp = myRoute.content.replace(/<br\s*\/?>/mg, ' ');
    setSemiContents(temp.substring(0, 140));
  }, []);

  const moveDetailPage = useCallback(() => {
    Router.push(`/myRoute/${myRoute.id}`);
  }, []);

  return (
    <div style={modalStyle}>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', zIndex: '50', right: '0', width: '40px', height: '40px', backgroundColor: 'ivory' }}>
          <GrFormClose style={{ cursor: 'pointer', fontSize: '40px' }} onClick={routeModalOffToggle}/>
        </div>
        <div className="image" style={{ height: '10%' }}>
          {myRoute.MyRouteFiles[0] && <img src={myRoute.MyRouteFiles[0].src} alt={myRoute.MyRouteFiles[0].src} width="100%" />}
          {!myRoute.MyRouteFiles[0]
            && (
            <div style={{ position: 'relative', fontSize: '40px', textAlign: 'center', width: '100%', padding: '70px', backgroundColor: '#90D0AD' }}>
              {myRoute.title}
            </div>
            )}
        </div>
        <div className="title" style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', margin: '0' }}>
          {myRoute.title}
        </div>
        <div className="writer" style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', margin: '0px' }}>
          {myRoute.User.nickname}
        </div>
        <div className="figure" style={{ display: 'flex', width: '90%', fontSize: '25px' }}>
          <div style={{ flex: 1, width: '25%', marginLeft: '30px' }}>
            <FaRegThumbsUp /> {myRoute.Likers.length}
          </div>
          <div style={{ flex: 1, width: '30%' }}>
            <FaWonSign /> {modalMoney}원
          </div>
          <div style={{ flex: 1, width: '30%' }}>
            <MdTimelapse /> {modalTime}분
          </div>
        </div>
        <div className="content">
          {!semiContents ? (
            <div style={{ padding: '17px' }}>
              {miniContents} <span style={{ fontWeight: 'bold', color: '#00b9cf' }} onClick={moreInfo}> &nbsp;&nbsp;...더보기</span>
            </div>
          ) : (
            <div style={{ padding: '17px' }} onClick={() => setSemiContents(null)}>
              {semiContents}...
            </div>
          )}
        </div>
        <hr />
        <div className="actions" style={{ display: 'flex' }}>
          <div style={{ flex: 1, width: '30%', padding: '10px', textAlign: 'center' }}>
            <div><BiBookmarkPlus style={{ fontSize: '40px' }} /></div>
            <div>저장하기</div>
          </div>
          <div style={{ flex: 1, width: '30%', padding: '10px', textAlign: 'center' }} onClick={moveDetailPage}>
            <div><BiCaretDownCircle style={{ fontSize: '40px' }} /></div>
            <div>상세보기</div>
          </div>
          <div style={{ flex: 1, width: '30%', padding: '10px', textAlign: 'center' }}>
            <div><BiShareAlt style={{ fontSize: '40px' }} /></div>
            <div>공유</div>
          </div>
        </div>
        <hr />
        <div style={{ padding: '12px' }}>
          댓글 {myRoute.Comments ? myRoute.Comments.length : 0}
          <List
            itemLayout="horizontal"
            dataSource={comments || []}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>

      </div>
    </div>
  );
};

RouteModal.propTypes = {
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
  }).isRequired,
  modalMoney: PropTypes.number.isRequired,
  modalTime: PropTypes.number.isRequired,
  routeModalOffToggle: PropTypes.func.isRequired,
};

export default RouteModal;
