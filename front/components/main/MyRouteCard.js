import React, { useCallback, useEffect, useState } from 'react';
import { Card, Avatar, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HeartOutlined, HeartTwoTone, MessageOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import Router from 'next/router';
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
  const [miniContents, setMiniContents] = useState(false);
  const [normalContents, setNormalContents] = useState('');

  useEffect(() => {
    const contentM = myRoute.content.replace(/<br\s*\/?>/mg, ' ');
    if (myRoute.content.substring(121, 122)) {
      setMiniContents(contentM.substring(0, 120));
    } else {
      setNormalContents(contentM);
    }
  }, []);

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

  const moveMyRoute = useCallback(() => {
    Router.push(`/myRoute/${myRoute.id}`);
  }, []);

  return (
    <CardWrapper key={myRoute.id} style={{ backgroundColor: 'white', position: 'relative', borderRadius: '10px', border: '1px solid white' }}>
      <Card.Meta
        style={{ position: 'relative', margin: '2% 2%' }}
        avatar={myRoute.User.profile
          ? (<Avatar src={myRoute.User.profile} />)
          : (<Avatar>{myRoute.User.nickname}</Avatar>)}
        title={myRoute.User.nickname}
      />
      <Card
        style={{ borderRadius: '10px', border: '1px solid white', cursor: 'default' }}
        cover={myRoute.MyRouteFiles[0] && <MyRouteCardImages images={myRoute.MyRouteFiles} />}
        actions={[
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" style={{ fontSize: '20px' }} onClick={onUnLike} />
            : <HeartOutlined key="heart" style={{ fontSize: '20px' }} onClick={onLike} />,
          <MessageOutlined key="comment" style={{ fontSize: '20px' }} onClick={onToggleComment} />]}
      >
        <div>
          <Card.Meta
            title={myRoute.title}
          />

          { miniContents
            ? (
              <div style={{ cursor: 'pointer', padding: '0', margin: '10px 0', color: '#979797' }}>
                {miniContents}..
                <span style={{ fontWeight: 'bold' }} onClick={moveMyRoute}>더보기</span>
              </div>
            )
            : (
              <div style={{ cursor: 'pointer', padding: '0', margin: '10px 0', color: '#979797' }} onClick={moveMyRoute}>
                {normalContents}
              </div>
            )}

          <div style={{ marginTop: '20px' }}>{moment(myRoute.createdAt).startOf('hour').fromNow()}</div>
        </div>

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
                  avatar={item.User.profile
                    ? (<Avatar src={item.User.profile} />)
                    : (<Avatar>{item.User.nickname}</Avatar>)}
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
    title: PropTypes.string,
    User: PropTypes.object,
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.any),
    MyRouteFiles: PropTypes.arrayOf(PropTypes.any),
    Likers: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default MyRouteCard;
