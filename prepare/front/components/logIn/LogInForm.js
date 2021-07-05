import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Col, Row } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone, KeyOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import useInput from '../../hooks/useInput';
import { LOG_IN_REQUEST } from '../../reducers/user';
import SocialLogin from './SocialLogin';
import Head from 'next/head';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    margin-top: 10px;
    position: relative;
    width: 100%;
    height: 100%;
`;

const LogInForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError, me } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [center, setCenter] = useState('');

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

  useEffect(() => {
    setCenter((document.documentElement.clientHeight / 2) - 20); // top: `',
  }, []);

  return (
    <div>
      <Head>
        <title>
          LogIn | It&#39;s My Route 
        </title>
      </Head>
      <Row gutter={12}>
        <Col xs={0} md={12}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div style={{ position: 'absolute', top: `${center}px`, left: '55%', width: '80%', transform: 'translate(-50%, -80%)', fontSize: '45px'}}>
              일상 속 새로운 길을 찾다
            </div>
            <div style={{ position: 'absolute', left: '55%', color: '#5D99FD', width: '80%', fontWeight: 'bold', top: `${center}px`, transform: 'translate(-50%)', fontSize: '90px'}}>
              It`s My Route
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <FormWrapper onFinish={onSubmitForm}>
            <div style={{ padding: '20px', position: 'absolute', top: `${center}+180px`, marginTop:'5%', width: '80%' }}>
              <div>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required style={{ hegith: '50px' }} prefix={<UserOutlined />} size="large" placeholder="이메일 주소" />
              </div>
              <div>
                <br />
                <Input.Password name="user-password" type="password" value={password} onChange={onChangePassword} required prefix={<KeyOutlined />} size="large" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} placeholder="비밀번호" />
              </div>
              <div style={{ margin: '20px 0'}}>
                <Button type="primary" htmlType="submit" style={{ width: '100%', height: '10%', fontSize: '30px' }} loading={logInLoading}>로 그 인</Button>
              </div>
              <div style={{ position: 'relative' }}>
                <span style={{ float: 'left'}}>
                  <Link href="/signup"><a>새 계정 만들기</a></Link>
                </span>
                <span style={{ float: 'right'}}>
                  <Link href="/signup"><a>아이디, 비밀번호 찾기</a></Link>
                </span>
              </div>
              <div style={{ margin: '70px 0 0' }}>
                <hr style={{ position: 'relative', width: '100%' }} />
                <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>SNS 계정으로 로그인하기</div>
                <SocialLogin />
              </div>
            </div>
          </FormWrapper>
        </Col>
      </Row>
    </div>
  );
};

export default LogInForm;

