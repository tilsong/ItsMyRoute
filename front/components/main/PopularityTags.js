import React from 'react';
import { Affix, Button } from 'antd';

const PopularityTags = () => {
  const chart = ['맛집', '강남', '데이트', '저녁', '일상'];
  return (
    <>
      <Affix offsetTop={260}>
        <div style={{ backgroundColor: 'white', height: '250px', width: '250px', border: '1px solid white', borderRadius: '20px', padding: '20px', marginLeft: '45px', textAlign: 'center', boxShadow: '5px 5px gray' }}>
          <div style={{ fontSize: '20px' }}>
            태그 순위 차트
          </div>
          <div>
            {chart.map((chartOne, i) => <div style={{ margin: '5px' }}>{i + 1}. {chartOne}</div>)}
          </div>
          <Button type="primary">차트로 이동</Button>
        </div>
      </Affix>
    </>
  );
};

export default PopularityTags;
