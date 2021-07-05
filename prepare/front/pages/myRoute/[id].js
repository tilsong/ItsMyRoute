import React from 'react';

import Head from 'next/head';
import axios from 'axios';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import wrapper from '../../store/configureStore';
import AppLayout from '../../components/common/AppLayout';
import { LOAD_MYROUTEONE_REQUEST } from '../../reducers/myRoute';
import MyRouteTop from '../../components/myRouteOne/MyRouteTop';
import RouteInfoToggle from '../../components/myRouteOne/RouteInfoToggle';
import ContentsAndImages from '../../components/myRouteOne/ContentsAndImages';
import MapForRoute from '../../components/myRouteOne/MapForRoute';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import WriterInfo from '../../components/myRouteOne/WriterInfo';
import Comments from '../../components/myRouteOne/Comments';
import MyRouteButtons from '../../components/myRouteOne/MyRouteButtons';

const myRoute = () => {
  const { myRouteOne } = useSelector((state) => state.myRoute);
  const { me } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>
          {myRouteOne && myRouteOne.User.nickname}님의 글
        </title>
      </Head>
      {myRouteOne
      && (
      <div>
        <MyRouteTop myRouteOne={myRouteOne} />

        <div className="myRouteContent" style={{ backgroundColor: '#f0f2f5', padding: '40px 0 20px' }}>
          <RouteInfoToggle myRouteOne={myRouteOne} />
          <ContentsAndImages myRouteOne={myRouteOne} />
        </div>
        <div style={{ position: 'relative', height: '65vh', marginBottom: '20px', paddingLeft: '23%' }}>
          <MapForRoute myRouteOne={myRouteOne} />
          <div style={{ width: '20%', right: '45%', left: '43%', position: 'absolute', bottom: '2%', textAlign: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            {myRouteOne.title}
          </div>
        </div>

        <WriterInfo me={me} myRouteOne={myRouteOne} />
        <MyRouteButtons me={me} myRouteOne={myRouteOne} />
        <hr style={{ width: '70%' }} />
        <Comments myRouteOne={myRouteOne} />
      </div>
      )}
    </AppLayout>
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
    type: LOAD_MYROUTEONE_REQUEST,
    data: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // store에서 등록해둔 것.
  return { props: {} };
});

export default myRoute;
