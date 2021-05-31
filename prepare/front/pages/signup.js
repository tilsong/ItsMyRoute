import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import SocialLogin from '../components/SocialLogin';

const ErrorMessage = styled.div`
  color: red;
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
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);

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

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, phoneNumber, name, nickname, password },
    });
  }, [email, phoneNumber, name, nickname, password, passwordCheck, term]);

  return (
    <div style={{ textAlign: 'center', border: '1px solid black', width: '500px', margin: '0px', padding: '0px' }}>
      <Head>
        <title> SignUp | It&apos;s My Route</title>
      </Head>
      <div style={{ fontSize: '70px', textAlign: 'center' }}>It's My Route</div>
      <br />
      <div style={{ textAlign: 'center', border: '1px solid black' }}>소셜로그인칸
        <SocialLogin />
      </div>
      <Form onFinish={onSubmit} style={{ margin: '0px', padding: '0px' }}>
        <div>
          <br /><Input name="user-email" type="email" value={email} required onChange={onChangeEmail} placeholder="이메일 주소" />
        </div>
        <div>
          <br /><Input name="user-phoneNumber" value={phoneNumber} required onChange={onChangePhoneNumber} placeholder="휴대폰 번호" />
        </div>
        <div>
          <br /><Input name="user-name" value={name} required onChange={onChangeName} placeholder="성명" />
        </div>
        <div>
          <br /><Input name="user-nickname" value={nickname} required onChange={onChangeNickname} placeholder="닉네임" />
        </div>
        <div>
          <br /><Input name="user-password" type="password" value={password} required onChange={onChangePassword} placeholder="비밀번호" />
        </div>
        <div>
          <br /><Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} placeholder="비밀번호" />
          {passwordError && <ErrorMessage> 비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}> 가입할 것을 동의합니다.</Checkbox>
          {termError && (<ErrorMessage> 약관에 동의하셔야 합니다..</ErrorMessage>)}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
        </div>
      </Form>
    </div>
  );
};

export default signUp;
