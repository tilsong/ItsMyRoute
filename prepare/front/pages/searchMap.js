// 루트 검색 페이지
import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import AppLayout from '../components/AppLayout';
import FullMap from '../components/FullMap';
import SideBar from '../components/SideBar';

const searchMap = () => (
  <>
    <Head>
      <title>SearchMap | It&#39;s My Route</title>
    </Head>
    <AppLayout>
      <div>
        <Row gutter={8}>
          <Col xs={24} md={8}>
            <SideBar />
          </Col>
          <Col xs={24} md={16}>
            <FullMap />
          </Col>
        </Row>
      </div>
    </AppLayout>
  </>
);

export default searchMap;
