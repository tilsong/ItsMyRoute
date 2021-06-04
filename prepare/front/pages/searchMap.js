// 루트 검색 페이지
import React, { useEffect } from 'react';
import Head from 'next/head';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import AppLayout from '../components/AppLayout';
import FullMap from '../components/FullMap';
import SideBar from '../components/SideBar';
import { SET_CURRENTLOCATION_REQUEST } from '../reducers/map';

const searchMap = () => {
  const dispatch = useDispatch();
  useEffect(() => { // 현재 위치의 좌표를 요청함.
    dispatch({
      type: SET_CURRENTLOCATION_REQUEST,
    });
  }, []);

  return (
    <>
      <Head>
        <title>SearchMap | It's My Route</title>
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
};

export default searchMap;
