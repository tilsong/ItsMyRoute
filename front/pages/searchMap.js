// 루트 검색 페이지
import React from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import AppLayout from '../components/common/AppLayout';
import FullMap from '../components/searchMap/FullMap';
import SideBar from '../components/searchMap/SideBar';

const searchMap = () => (
  <>
    <Head>
      <title>SearchMap | It&#39;s My Route</title>
    </Head>
    <AppLayout>
      <div>
        <Row gutter={6}>
          <Col xs={24} md={6}>
            <SideBar />
          </Col>
          <Col xs={24} md={18}>
            <FullMap />
          </Col>
        </Row>
      </div>
    </AppLayout>
  </>
);

export default searchMap;
