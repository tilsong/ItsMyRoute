import React from 'react';
import { Affix, Button } from 'antd';

const PopularityTags = () => (
  <>
    <Affix offsetTop={260}>
      <div style={{ height: '300px', width: '250px', border: '1px solid black', padding: '20px', marginLeft: '100px', textAlign: 'center' }}>
        <div>
          차트 차트<br /><br />1위 집<br />2위 역시 집<br />3위도 집
        </div>
        <br />
        <Button type="primary">차트로 이동</Button>
      </div>
    </Affix>
  </>
);

export default PopularityTags;
