import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST } from '../reducers/user';
import SocialLogin from './SocialLogin';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LogInForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError, me } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  useEffect(() => {
    if (me && me.id) {
      alert('로그인했으니 메인페이지로 이동합니다.');
      Router.push('/');
    }
  }, [me && me.id]);

  useEffect(() => { // 로그인 에러 알려줌
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    // ant디자인에서는 이미 e.preventDefault()가 되어 있으므로 하면 안됨.
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <h1>로그인</h1>
      <div>
        <div>소셜 로그인</div>
        <SocialLogin />
      </div>
      <div>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required prefix={<UserOutlined />} size="large" placeholder="이메일 주소" />
      </div>
      <div>
        <br />
        <Input.Password name="user-password" type="password" value={password} onChange={onChangePassword} required prefix={<KeyOutlined />} size="large" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} placeholder="비밀번호" />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>새 계정 만들기</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LogInForm;
