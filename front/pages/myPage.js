import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { END } from 'redux-saga';
import { useSelector } from 'react-redux';
import { BsGrid3X3GapFill, BsBookmarkFill } from 'react-icons/bs';
import { BiCalendarAlt } from 'react-icons/bi';
import { Fab } from 'react-tiny-fab';
import Router from 'next/router';
import { MdModeEdit } from 'react-icons/md';
import AppLayout from '../components/common/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import MyInfo from '../components/myPage/MyInfo';
import { LOAD_USER_MYROUTE_REQUEST } from '../reducers/myRoute';
import UserMyRoute from '../components/myPage/UserMyRoute';
import 'react-tiny-fab/dist/styles.css';

const myPage = () => {
  const { me } = useSelector((state) => state.user);
  const { userMyRoute } = useSelector((state) => state.myRoute);
  const [posts, setPosts] = useState(true);
  const [scraps, setScraps] = useState(false);
  const [calendar, setCalendar] = useState(false);
  const postsToggle = useCallback(() => {
    setPosts(() => true);
    setScraps(() => false);
    setCalendar(() => false);
  }, [posts, scraps, calendar]);
  const scrapsToggle = useCallback(() => {
    setPosts(() => false);
    setScraps(() => true);
    setCalendar(() => false);
  }, [posts, scraps, calendar]);

  const CalendarToggle = useCallback(() => {
    setPosts(() => false);
    setScraps(() => false);
    setCalendar(() => true);
  }, [posts, scraps, calendar]);

  const write = useCallback(() => {
    Router.push('/writeMyRoute');
  }, []);

  return (
    <>
      <Head>
        <title> User | It&apos;s My Route</title>
      </Head>
      <AppLayout>
        {me && <MyInfo me={me} />}
        <div className="userContents" style={{ position: 'relative', height: '30px', margin: '30px 18%', fontSize: '16px' }}>
          <div className="buttons" style={{ position: 'relative', margin: '4px 20px', display: 'flex' }}>
            <div style={{ position: 'absolute', left: '15%', cursor: 'pointer' }} onClick={postsToggle}>
              <BsGrid3X3GapFill /> ?????????
            </div>
            <div style={{ position: 'absolute', left: '45%', cursor: 'pointer' }} onClick={scrapsToggle}>
              <BsBookmarkFill /> ?????????
            </div>
            <div style={{ position: 'absolute', left: '75%', cursor: 'pointer' }} onClick={CalendarToggle}>
              <BiCalendarAlt /> ?????????
            </div>
          </div>
        </div>
        <div>
          { posts
            && (
            <div className="posts" style={{ marginTop: '-50px', border: '1px solid #f0f2f5' }}>
              {userMyRoute && userMyRoute.map((myRoute) => (
                <UserMyRoute myRoute={myRoute} />
              ))}
              <div style={{ height: '120px' }} />
            </div>
            )}
          { scraps && (
          <div className="posts" style={{ marginTop: '-50px', border: '1px solid white' }}>
            {userMyRoute && userMyRoute.map((myRoute) => (
              <UserMyRoute myRoute={myRoute} />
            ))}
            <div style={{ height: '120px' }} />
          </div>
          )}
          { calendar
            && (
              <div>
                asdf react-big-calendar  fullcalendar
              </div>
            )}
        </div>
        <Fab icon={<MdModeEdit />} alwaysShowTitle onClick={write} />
      </AppLayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.cookie = '';
  // ????????? ????????? ?????? ????????? ?????? ?????? ?????? ?????? ???????????????, ?????? ????????? ?????? ?????? ?????? ????????? ????????? ???????????? ???.
  if (context.req && cookie) { // ????????? ??????, ????????? ?????? ?????? ????????????
    axios.defaults.headers.cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_USER_MYROUTE_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // store?????? ???????????? ???.
  return { props: {} };
});

export default myPage;

//        <div style={{ marginTop: '50px', marginLeft: '100px', fontSize: '21px', fontWeight: 'bold' }}>
//   <div>?????? ?????? ??????</div>
//   <div style={{ fontWeight: 'normal', fontSize: '14px', marginTop: '10px' }}>????????? ????????? ?????????</div>
// </div>
