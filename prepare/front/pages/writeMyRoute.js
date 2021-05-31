import React from 'react';
import Head from 'next/head';
import { Row, Col } from 'antd';
import AppLayout from '../components/AppLayout';
import WriteMyRouteForm from '../components/WriteMyRouteForm';
import AddLocation from '../components/AddLocation';

const writeMyRoute = () => (
  <>
    <Head>
      <title> 새 마이루트 작성 | It's My Route</title>
    </Head>
    <AppLayout>
      <div style={{ backgroundColor: '#F8F8F8' }}>
        <Row gutter={8}>
          <Col xs={24} md={12}>
            <WriteMyRouteForm />
          </Col>
          <Col xs={24} md={12}>
            <AddLocation />
          </Col>
        </Row>
      </div>
    </AppLayout>
  </>
);

export default writeMyRoute;
