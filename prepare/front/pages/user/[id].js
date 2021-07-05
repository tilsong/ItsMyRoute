import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { LOAD_MY_INFO_REQUEST, LOAD_USER_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/common/AppLayout';
import { LOAD_OTHER_USER_MYROUTE_REQUEST } from '../../reducers/myRoute';
import UserInfo from '../../components/user/UserInfo';
import UserMyRoute from '../../components/myPage/UserMyRoute';

const user = () => {
  const { otherUserMyRoute } = useSelector((state) => state.myRoute);
  const { me, user } = useSelector((state) => state.user);

  return (
    <div>
      <Head>
        {user && <title>{user.nickname}님의 마이 루트</title>}
      </Head>
      <AppLayout>
        {user && <UserInfo user={user} myRouteNum={otherUserMyRoute ? otherUserMyRoute.length : 0} meId={me ? me.id : 0} />}
        <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '40px' }}>
          <BsGrid3X3GapFill /> 게시물
        </div>
        <div className="posts" style={{ marginTop: '-50px', border: '1px solid #f0f2f5' }}>
          {otherUserMyRoute && otherUserMyRoute.map((myRoute) => (
            <UserMyRoute myRoute={myRoute} />
          ))}
          <div style={{ height: '120px' }} />
        </div>
        <div style={{ position: 'absolute', width: '15%', fontSize: '14px', top: '45%', left: '2%' }}>
          <div style={{ fontSize: '19px', fontWeight: 'bold' }}>
            최근 작성 지역 <br />
            <div style={{ fontSize: '14px', marginLeft: '10px'}}>
              {otherUserMyRoute ? otherUserMyRoute[0].routeLocalName : '없음'}
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.cookie = '';
  // 실제로 쿠키를 써서 요청을 보낼 때만 잠깐 쿠키 넣어놨다가, 쿠키 안써서 요청 보낼 때는 서버의 쿠키를 제거하는 것.
  if (context.req && cookie) { // 서버일 때랑, 쿠키가 있을 때만 넣어주기
    axios.defaults.headers.cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_USER_INFO_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_OTHER_USER_MYROUTE_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // store에서 등록해둔 것.
  return { props: {} };
});

export default user;

//   const router = useRouter();
//   const { id } = router.query;
//   const { me } = useSelector((state) => state.user);
//   useEffect(() => {
//     // 접속하는 다른 클릭 이벤트에도 if를 설정하기. 이건 아예 url로 검색하는 경우 대비하는 것.
//     if (me.id === parseInt(id)) {
//       Router.push('/myPage');
//     }
//   }, [me]);
// import React, { useEffect } from 'react';
// import Router, { useRouter } from 'next/router';
