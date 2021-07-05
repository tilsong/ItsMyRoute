import React, { useCallback } from 'react';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { BiBookmarkPlus, BiShareAlt, BiCalendarCheck } from 'react-icons/bi';
import PropTypes from 'prop-types';

const MyRouteButtons = ({ me, myRouteOne }) => {
  const bookmark = useCallback(() => {
    console.log('12345');
  }, []);

  const share = useCallback(() => {
    console.log('12345');
  }, []);

  const calendar = useCallback(() => {
    console.log('12345');
  }, []);

  return (
    <div className="myRouteButtons" style={{ position: 'relative', height: '50px', width: '70%', left: '15%', right: '15%', marginTop: '10px' }}>
      <div style={{ position: 'absolute', left: '1%', fontSize: '30px' }}>
        <HeartTwoTone twoToneColor="#eb2f96" key="heart" /> <span style={{ fontSize: '22px', marginBottom: '8px', fontWeight: 'bold' }}>{myRouteOne.Likers.length}</span>
      </div>
      <div style={{ position: 'absolute', left: '7%', paddingTop: '12px', marginLeft: '5%', fontSize: '18px', fontWeight: 'bold' }}>
        댓글 {myRouteOne.Comments ? myRouteOne.Comments.length : 0}
      </div>
      <div style={{ position: 'absolute', right: '1%', fontSize: '30px' }}>
        <BiBookmarkPlus onClick={bookmark} />
        <BiShareAlt onClick={share} />
        <BiCalendarCheck onClick={calendar} />
      </div>
    </div>
  );
};

MyRouteButtons.propTypes = {
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
    myRoutes: PropTypes.arrayOf(PropTypes.any),
    Followers: PropTypes.arrayOf(PropTypes.any),
    snsId: PropTypes.string,
    profile: PropTypes.string,
    provider: PropTypes.string,
  }).isRequired,
};

export default MyRouteButtons;
