import React, { useCallback } from 'react';
import { Col, Row } from 'antd';
import { Fab } from 'react-tiny-fab';
import Router from 'next/router';
import { MdModeEdit } from 'react-icons/md';
// import { useDispatch } from 'react-redux';

import AppLayout from '../components/common/AppLayout';
import TodayRoute from '../components/main/TodayRoute';
import TimeLine from '../components/main/TimeLine';
import PopularityTags from '../components/main/PopularityTags';
import 'react-tiny-fab/dist/styles.css';
// 메인 페이지, SNS

const SNS = () => {
  const write = useCallback(() => {
    Router.push('/writeMyRoute');
  }, []);

  return (
    <AppLayout>
      <TodayRoute />
      <div style={{ backgroundColor: '#f0f2f5' }}>
        <Row gutter={8}>
          <Col xs={24} md={18}>
            <TimeLine />
          </Col>
          <Col xs={24} md={6}>
            <PopularityTags />
          </Col>
        </Row>
      </div>
      <Fab icon={<MdModeEdit />} alwaysShowTitle onClick={write} />
    </AppLayout>
  );
};

export default SNS;
