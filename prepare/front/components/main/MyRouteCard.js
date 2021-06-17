import React, { useCallback, useState } from 'react';
import { Card, Avatar, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeartOutlined, HeartTwoTone, MessageOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import MyRouteCardImages from './MyRouteCardImages';
import { LIKE_MYROUTE_REQUEST, UNLIKE_MYROUTE_REQUEST } from '../../reducers/myRoute';
import CommentForm from './CommentForm';

moment.locale('ko');

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const MyRouteCard = ({ myRoute }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const liked = myRoute.Likers.find((v) => v.id === id);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_MYROUTE_REQUEST,
      data: myRoute.id,
    });
  }, [id]);

  const onUnLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_MYROUTE_REQUEST,
      data: myRoute.id,
    });
  }, [id]);

  return (
    <CardWrapper key={myRoute.id}>
      <Card
        cover={myRoute.MyRouteFiles[0] && <MyRouteCardImages images={myRoute.MyRouteFiles} />}
        actions={[
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike} />
            : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />]}
      >
        <>
          <span style={{ float: 'right' }}>{moment(myRoute.createdAt).startOf('hour').fromNow()}</span>
        </>
        <Card.Meta
          avatar={<Avatar>{myRoute.User.nickname}</Avatar>}
          title={myRoute.User.nickname}
          description={myRoute.content}
        />
      </Card>
      {commentFormOpened && (
        <>
          <CommentForm myRoute={myRoute} />
          <List
            header={`${myRoute.Comments ? myRoute.Comments.length : 0}개의 댓글`}
            itemLayout="horizontal"
            dataSource={myRoute.Comments || []}
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
        </>
      )}
    </CardWrapper>
  );
};
MyRouteCard.propTypes = {
  myRoute: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.any),
    MyRouteFiles: PropTypes.arrayOf(PropTypes.any),
    Likers: PropTypes.arrayOf(PropTypes.object),
    // RetweetId: PropTypes.number,
    // Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};
export default MyRouteCard;
