import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import SocialLogin from '../components/logIn/SocialLogin';

const ErrorMessage = styled.div`
  color: red;
`;
const InputDiv = styled.div`
  margin: 15px;
`;

const signUp = () => {
  const dispatch = useDispatch();

  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [name, onChangeName] = useInput('');
  const [phoneNumber, onChangePhoneNumber] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const { signUpLoading, me, signUpDone, signUpError } = useSelector((state) => state.user);

  useEffect(() => {
    if (signUpDone) {
      Router.replace('/');
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  });

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/'); // push는 단순이동, replace는 이전 페이지 사라짐
    }
  }, [me && me.id]);

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, phoneNumber, name, nickname, password },
    });
  }, [email, phoneNumber, name, nickname, password, passwordCheck]);

  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title> SignUp | It&apos;s My Route</title>
      </Head>
      <div>
        <div style={{ backgroundColor: 'white', position: 'absolute', left: '50%', top: '50%', width: '30%', transform: 'translate(-50%)', border: '1px solid #999a9a', marginTop: '50px' }}>
          <div style={{ fontSize: '50px', textAlign: 'center', marginTop: '30px', color: '#5D99FD', fontWeight: 'bold' }}>It&#39;s My Route</div>
          <div style={{ position: 'relative', marginBottom: '17%' }}>
            <SocialLogin />
          </div>
          <div className="lineeee">
            또는
          </div>
          <Form onFinish={onSubmit} style={{ margin: '10px', padding: '0px' }}>
            <div>
              <InputDiv>
                <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} placeholder="이메일 주소" />
              </InputDiv>
              <InputDiv>
                <Input name="user-phoneNumber" value={phoneNumber} required onChange={onChangePhoneNumber} placeholder="휴대폰 번호" />
              </InputDiv>
              <InputDiv>
                <Input name="user-name" value={name} required onChange={onChangeName} placeholder="성명" />
              </InputDiv>
              <InputDiv>
                <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} placeholder="닉네임" />
              </InputDiv>
              <InputDiv>
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} placeholder="비밀번호" />
              </InputDiv>
              <InputDiv>
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} placeholder="비밀번호 확인" />
                {passwordError && <ErrorMessage> 비밀번호가 일치하지 않습니다.</ErrorMessage>}
              </InputDiv>
              <div style={{ margin: '20px 0 5px 20px' }}>
                <Button style={{ width: '100%' }} type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
              </div>
              <div style={{ marginLeft: '20px', fontSize: '12px', color: '#A3A5A7' }}>
                가입 시 It&apos;s MyRoute의 <span style={{ fontWeight: 'bold', color: 'black' }}>약관</span>에 동의하게 됩니다.
              </div>
              <div className="lineeee">
                계정이 있으신가요?&nbsp;&nbsp; <span onClick={() => Router.push('/')} style={{ cursor: 'pointer', color: '#5D99FD', textAlign: 'center', fontSize: '15px' }}>로그인</span>
              </div>

            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default signUp;
