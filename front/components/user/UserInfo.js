import React, { useCallback } from 'react';
import { Avatar } from 'antd';
import PropTypes from 'prop-types';
import { RiUserUnfollowFill, RiUserFollowFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../../reducers/user';

const UserInfo = ({ user, myRouteNum, meId }) => {
  const isFollowing = user?.Followings.find((v) => v.id === meId);

  const dispatch = useDispatch();
  const followToggle = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: user.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: user.id,
      });
    }
  }, [isFollowing]);

  return (
    <div className="userInfo" style={{ position: 'relative', borderRadius: '5px', border: '1px solid #f0f2f5', height: '200px', margin: '10px 18%' }}>
      <div style={{ position: 'absolute', left: '7%', top: '7%', bottom: '7%' }}>
        <Avatar size={170} src={user.profile} />
      </div>
      <div style={{ position: 'absolute', left: '33%', paddingTop: '2%', display: 'flex' }}>
        <div style={{ fontSize: '30px', fontWeight: 'bold', marginRight: '35px' }}>
          {user.nickname}
        </div>
        <div style={{ position: 'absolute', cursor: 'pointer', paddingLeft: '20px', backgroundColor: 'white', paddingTop: '2px', height: '24px', width: '60px', right: '-350%', marginTop: '20px', border: '1px solid white', borderRadius: '10px' }}>
          {isFollowing ? (
            <RiUserFollowFill onClick={followToggle} style={{ fontSize: '16px' }} />
          ) : (
            <RiUserUnfollowFill onClick={followToggle} style={{ fontSize: '16px' }} />
          )}
        </div>
      </div>
      <div className="relative" style={{ position: 'absolute', left: '33%', top: '46%', fontSize: '17px' }}>
        <div style={{ float: 'left', marginRight: '80px' }}>
          마이 루트 <span style={{ fontWeight: 'bold' }}>{myRouteNum}</span>
        </div>
        <div style={{ float: 'left', marginRight: '80px' }}>
          팔로우 <span style={{ fontWeight: 'bold' }}>{user.Followings ? user.Followings.length : 0 }</span>
        </div>
        <div style={{ float: 'left' }}>
          팔로워 <span style={{ fontWeight: 'bold' }}>{user.Followers ? user.Followers.length : 0 }</span>
        </div>
      </div>
      <div style={{ position: 'absolute', fontWeight: 'bold', fontSize: '23px', left: '33%', top: '66%' }}>
        <div>
          {user.email}
        </div>
        <div style={{ fontWeight: 'normal', fontSize: '14px', marginTop: '5px' }}>
          길을 걷는 사람
        </div>
      </div>
      <hr style={{ position: 'relative', width: '100%', marginTop: '220px' }} />
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    nickname: PropTypes.string,
    phoneNumber: PropTypes.string,
    active: PropTypes.bool,
    MyRoutes: PropTypes.arrayOf(PropTypes.any),
    Followings: PropTypes.arrayOf(PropTypes.any),
    Followers: PropTypes.arrayOf(PropTypes.any),
    snsId: PropTypes.string,
    profile: PropTypes.string,
    provider: PropTypes.string,
  }).isRequired,
  myRouteNum: PropTypes.number.isRequired,
  meId: PropTypes.number.isRequired,
};

export default UserInfo;
