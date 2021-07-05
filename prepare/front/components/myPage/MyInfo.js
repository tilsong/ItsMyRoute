import React from 'react';
import { Avatar, Button } from 'antd';
import PropTypes from 'prop-types';

const MyInfo = ({ me }) => {
  const a = 1;
  return (
    <div className="userInfo" style={{ position: 'relative', borderRadius: '5px', border: '1px solid #f0f2f5', height: '200px', margin: '10px 18%' }}>
      <div style={{ position: 'absolute', left: '7%', top: '7%', bottom: '7%' }}>
        <Avatar size={170} src={me.profile} />
      </div>
      <div style={{ position: 'absolute', left: '33%', paddingTop: '2%', display: 'flex' }}>
        <div style={{ fontSize: '40px', fontWeight: 'bold', marginRight: '35px' }}>
          {me.nickname}
        </div>
        <div style={{ marginTop: '20px' }}>
          <Button type="button" style={{ fontWeight: 'bold' }}>프로필 편집</Button>
        </div>
      </div>
      <div className="relative" style={{ position: 'absolute', left: '33%', top: '46%', fontSize: '17px' }}>
        <div style={{ float: 'left', marginRight: '80px' }}>
          마이 루트 <span style={{ fontWeight: 'bold' }}>{me.MyRoutes.length}</span>
        </div>
        <div style={{ float: 'left', marginRight: '80px' }}>
          팔로잉 <span style={{ fontWeight: 'bold' }}>{me.Followings.length}</span>
        </div>
        <div style={{ float: 'left' }}>
          팔로워 <span style={{ fontWeight: 'bold' }}>{me.Followers.length}</span>
        </div>
      </div>
      <div style={{ position: 'absolute', fontWeight: 'bold', fontSize: '23px', left: '33%', top: '66%' }}>
        <div>
          {me.email}
        </div>
        <div style={{ fontWeight: 'normal', fontSize: '14px', marginTop: '5px' }}>
          지구 동네 한바퀴
        </div>
      </div>
      <hr style={{ position: 'relative', width: '100%', marginTop: '220px' }} />
    </div>
  );
};

MyInfo.propTypes = {
  me: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    nickname: PropTypes.string,
    phoneNumber: PropTypes.string,
    active: PropTypes.bool,
    MyRoutes: PropTypes.arrayOf(PropTypes.any),
    Followers: PropTypes.arrayOf(PropTypes.any),
    Followings: PropTypes.arrayOf(PropTypes.any),
    snsId: PropTypes.string,
    profile: PropTypes.string,
    provider: PropTypes.string,
  }).isRequired,
};

export default MyInfo;
