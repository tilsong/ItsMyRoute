// 계정 페이지
import React from 'react';
import Head from 'next/head';
import { Avatar } from 'antd';
import AppLayout from '../components/AppLayout';

const user = () => (
  <>
    <Head>
      <title> User | It&apos;s My Route</title>
    </Head>
    <AppLayout>
      <div style={{ fontSize: '30px' }}><Avatar size={150} src="https://cdn.pixabay.com/photo/2020/06/30/22/34/dog-5357794_1280.jpg" />유저 이름</div>
    </AppLayout>
  </>
);

export default user;
