// 루트 검색 페이지
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from './AppLayout';
import { PLUS_TAG } from '../reducers/myRoute';

const searchMap = () => {
  const dispatch = useDispatch();
  const { tagList } = useSelector((state) => (state.myRoute));
  const [tagv, setTagv] = useState('');

  const onChangeTag = useCallback((e) => {
    setTagv(e.target.value);
  }, [tagv]);
  useEffect(() => {
    console.log(tagv);
  }, [tagv, tagList]);

  const onChangeEnter = useCallback((e) => {
    if (e.key === 'Enter' && tagv !== '') {
      console.log(tagv);
      dispatch({
        type: PLUS_TAG,
        data: tagv,
      });
    }
  });

  const go = useCallback(() => {
    console.log(tagList);
    for (let i = 0; i < tagList.length; i++) {
      console.log(tagList[i]);
    }
  });
  return (
    <>
      <Head>
        <title>SearchMap | It's My Route</title>
      </Head>
      <AppLayout>
        <h1>searchMap</h1>
        <div>
          <TagList />

          <Input value={tagv} bordered={false} onChange={onChangeTag} onKeyPress={onChangeEnter} placeholder="태그를 입력하세요" />
          <button onClick={go} >result</button>
        </div>
      </AppLayout>
    </>
  );
};

export default searchMap;
