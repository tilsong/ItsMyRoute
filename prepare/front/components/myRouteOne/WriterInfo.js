import React, { useCallback, useEffect, useState } from 'react';
import { RiUserUnfollowLine, RiUserFollowLine } from 'react-icons/ri';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import Route from 'next/router';

const WriterInfo = ({ me, myRouteOne }) => {
  const [followFact, setFollowFact] = useState(false);

  useEffect(() => {
    for (let i = 0; i < me.Followers.length; i++) {
      if (me.Followers === myRouteOne.User.id) {
        setFollowFact(() => true);
      }
    }
  }, [me, followFact]);

  const followToggle = useCallback(() => {
    // dispatch로 팔로우 요청 보낼 것임. 라우터도 만들어야 함.
  }, []);
  const moveToWriter = useCallback(() => {
    Route.push(`/user/${myRouteOne.UserId}`);
  }, []);

  return (
    <div className="writerInfo" style={{ padding: '3px', borderRadius: '5px', border: '3px solid #f0f2f5', position: 'relative', width: '70%', left: '15%', right: '15%', height: '120px' }}>
      <div style={{ position: 'absolute', left: '1%' }}>
        <Avatar size={100} src={myRouteOne.User.profile} />
      </div>
      <div style={{ position: 'absolute', left: '16%', paddingTop: '10px' }}>
        <div style={{ fontSize: '40px', fontWeight: 'bold', cursor: 'pointer' }} onClick={moveToWriter}>
          {myRouteOne.User.nickname}
        </div>
        <div style={{ fontsize: '15px' }}>
          길을 걷는 것을 좋아합니다.
        </div>
      </div>
      <div className="relative" style={{ position: 'absolute', right: '3%', bottom: '15%', display: 'flex', fontSize: '15px', fontWeight: 'bold' }}>
        <div style={{ marginRight: '20px' }}>
          마이 루트 {myRouteOne.User.MyRoutes.length}
        </div>
        <div style={{ marginRight: '20px' }}>
          팔로워 {myRouteOne.User.Followers.length}
        </div>
        <div style={{ marginRight: '20px' }}>
          { (me.id !== myRouteOne.User.id)
             && (followFact
               ? (<RiUserUnfollowLine onClick={followToggle} style={{ fontSize: '30px' }} />)
               : (<RiUserFollowLine onClick={followToggle} style={{ fontSize: '30px' }} />)
             )}
        </div>
      </div>
    </div>
  );
};

WriterInfo.propTypes = {
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
  me: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    nickname: PropTypes.string,
    phoneNumber: PropTypes.string,
    active: PropTypes.bool,
    MyRoutes: PropTypes.arrayOf(PropTypes.any),
    Followers: PropTypes.arrayOf(PropTypes.any),
    snsId: PropTypes.string,
    profile: PropTypes.string,
    provider: PropTypes.string,
  }).isRequired,
};

export default WriterInfo;
