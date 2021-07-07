import Head from 'next/head';
import React, { useCallback, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Avatar, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../components/common/AppLayout';
import { LOAD_MY_INFO_REQUEST, UPDATE_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';
import useInput from '../hooks/useInput';

const updateUser = () => {
  const { me } = useSelector((state) => (state.user));
  const [profile, setProfile] = useState(true);
  const [nickname, onChangeNickname] = useInput(me.nickname);
  const [phoneNumber, onChangePhoneNumber] = useInput(me.phoneNumber);

  const updateProfile = useCallback(() => {
    setProfile((current) => !current);
  }, [profile]);

  const dispatch = useDispatch();

  const updateMyInfo = useCallback(() => {
    // 이미 쓰고 있는 nickname 인지 검사해야 함. 만약 이미 있을 경우 경고 처리해야함.
    if (nickname?.me.nickname && phoneNumber?.me.phoneNumber) {
      return;
    }
    dispatch({
      type: UPDATE_MY_INFO_REQUEST,
      data: { nickname, phoneNumber },
    });
  }, [nickname, phoneNumber]);

  return (
    <>
      <Head>
        <title> User | It&apos;s My Route</title>
      </Head>
      <AppLayout>
        <div style={{ position: 'relative', margin: '5% 10%', backgroundColor: 'white', width: '80%', height: '550px' }}>
          <div style={{ float: 'left', borderRight: '2px solid #AEBDC9', height: '100%', margin: '0 5px', width: '250px', fontSize: '20px', padding: '30px' }}>
            {profile
              ? (
                <div>
                  <div style={{ marginTop: '30px', fontWeight: 'bold' }}>
                    <IoIosArrowForward /> 프로필 편집
                  </div>
                  <div style={{ marginTop: '30px' }} onClick={updateProfile}>
                    <IoIosArrowForward /> 비밀번호 변경
                  </div>
                </div>
              )
              : (
                <div>
                  <div style={{ marginTop: '30px' }} onClick={updateProfile}>
                    <IoIosArrowForward /> 프로필 편집
                  </div>
                  <div style={{ marginTop: '30px', fontWeight: 'bold' }}>
                    <IoIosArrowForward /> 비밀번호 변경
                  </div>
                </div>
              )}
          </div>

          <div style={{ position: 'relative', float: 'left', margin: '50px 100px', width: '600px', height: '400px' }}>
            {profile ? (
              <div>
                <div style={{ position: 'absolute', left: '3%' }}>
                  <Avatar size={120} src={me.profile} />
                </div>
                <div style={{ position: 'absolute', left: '30%', top: '3%' }}>
                  <div style={{ fontSize: '35px' }}>{me.nickname}</div>
                  <div style={{ fontSize: '16px', color: '#5D99FD' }}>프로필 사진 바꾸기</div>
                </div>
                <div style={{ fontSize: '20px', position: 'absolute', left: '12%', top: '38%' }}>
                  <div style={{ marginBottom: '15px' }}>이름</div>
                  <div style={{ marginBottom: '15px' }}>닉네임</div>
                  <div style={{ marginBottom: '15px' }}>이메일</div>
                  <div style={{ marginBottom: '15px' }}>전화번호</div>
                </div>
                <div style={{ position: 'absolute', left: '30%', top: '38%' }}>
                  <Input value={me.name} style={{ marginBottom: '15px' }} />
                  <Input value={nickname} onChange={onChangeNickname} style={{ marginBottom: '15px' }} />
                  <Input value={me.email} style={{ marginBottom: '15px' }} />
                  <Input value={phoneNumber} onChange={onChangePhoneNumber} style={{ marginBottom: '15px' }} />
                </div>
                <div style={{ position: 'absolute', left: '30%', bottom: '-10%' }}>
                  <div>
                    <Button type="primary" onClick={updateMyInfo}>저장</Button>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <Button>회원 탈퇴하기</Button>
                  </div>
                </div>
              </div>
            ) : (<div>asdf</div>)}
          </div>

        </div>
      </AppLayout>
    </>
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
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise(); // store에서 등록해둔 것.
  return { props: {} };
});

export default updateUser;
