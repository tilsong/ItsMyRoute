import React from 'react';
import { Avatar, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';

const Comments = ({ myRouteOne }) => (
  <div className="comments" style={{ position: 'relative', width: '70%', left: '15%', right: '15%' }}>
    <List
      itemLayout="horizontal"
      dataSource={myRouteOne.Comments || []}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.User.nickname}
            avatar={item.User.profile
              ? (<Avatar src={item.User.profile} />)
              : (<Avatar>{item.User.nickname}</Avatar>)}
            content={item.content}
          />
        </li>
      )}
    />
    <CommentForm myRoute={myRouteOne} />
  </div>
);

Comments.propTypes = {
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

export default Comments;
