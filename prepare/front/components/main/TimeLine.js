import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_MYROUTES_REQUEST } from '../../reducers/myRoute';
import MyRouteCard from './MyRouteCard';
import wrapper from '../../store/configureStore';

const TimeLine = () => {
  const dispatch = useDispatch();
  const { myRoutes, hasMoreMyRoutes, loadMyRoutesLoading } = useSelector((state) => state.myRoute);

  useEffect(() => {
    function onScroll() { // 1- 얼마나 내렸는지 2-브라우저 화면에 보이는 부분의 길이 3-총 길이  => 1+2 = 3
      if (window.pageYOffset + document.documentElement.clientHeight
        > document.documentElement.scrollHeight - 300) {
        if (hasMoreMyRoutes && !loadMyRoutesLoading) {
          const lastId = myRoutes[myRoutes.length - 1]?.id;
          dispatch({
            type: LOAD_MYROUTES_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); // 이렇게 리턴 안해주면 이벤트리스너 메모리에 쌓여있음. add와 remove 모두 같은 함수 넣어주어야 함.
    };
  }, [myRoutes, hasMoreMyRoutes, loadMyRoutesLoading]);

  return (
    <div style={{ margin: '0 40px 0 70px', padding: '0px' }}>
      {myRoutes.map((myRoute) => (<MyRouteCard key={myRoute.id} myRoute={myRoute} />))}
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MYROUTES_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default TimeLine;
