import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import AppLayout from '../../components/common/AppLayout';
import MyRouteCard from '../../components/main/MyRouteCard';
import { LOAD_MYROUTEONE_REQUEST } from '../../reducers/myRoute';

const myRoute = () => {
  const { myRouteOne } = useSelector((state) => state.myRoute);
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout>
      <Head>
        <title>
          {myRouteOne.User.nickname}님의 글
        </title>
        <meta name="description" content={myRouteOne.content} />
        <meta property="og:title" content={`${myRouteOne.User.nickname}님의 게시글`} />
        <meta property="og:description" content={myRouteOne.content} />
        <meta property="og:image" content={myRouteOne.Images[0] ? myRouteOne.Images[0].src : 'currnetLocation.svg'} />
        {/* <meta property="og:url" content={`https://nodebird.com/post/${id}`} /> */}
      </Head>
      <MyRouteCard post={myRouteOne} />
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log(context);
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
    type: LOAD_MYROUTEONE_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // store에서 등록해둔 것.
  return { props: {} };
});

export default myRoute;
