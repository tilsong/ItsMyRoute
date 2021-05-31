import React, { useCallback } from 'react';
import { Col, Row } from 'antd';
import { Fab } from 'react-tiny-fab';
import Router from 'next/router';
import { MdModeEdit } from 'react-icons/md';
// import { useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import TimeLine from '../components/TimeLine.js';
import TodayRoute from '../components/TodayRoute';
import PopularityTags from '../components/PopularityTags';
import 'react-tiny-fab/dist/styles.css';
// 메인 페이지, SNS

const SNS = () => {
  const write = useCallback(() => {
    Router.push('/writeMyRoute');
  }, []);

  return (
    <AppLayout>
      <TodayRoute />
      <Row gutter={8}>
        <Col xs={24} md={18}>
          <TimeLine />
        </Col>
        <Col xs={24} md={6}>
          <PopularityTags />
        </Col>
      </Row>
      <Fab icon={<MdModeEdit />} alwaysShowTitle onClick={write} />
    </AppLayout>
  );
};

export default SNS;
