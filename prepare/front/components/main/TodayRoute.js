import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Card } from 'antd';
import { LOAD_TODAYROUTE_REQUEST } from '../../reducers/myRoute';

const TodayRoute = () => {
  const dispatch = useDispatch();
  const { todayMyroute } = useSelector((state) => state.myRoute);

  useEffect(() => {
    console.log(todayMyroute.length);
    if (todayMyroute.length < 4) {
      dispatch({
        type: LOAD_TODAYROUTE_REQUEST,
      });
    }
  }, [todayMyroute]);// todayMyroute

  return (
    <div style={{ padding: '0', marginBottom: '20px' }}>
      <div style={{ margin: '30px 70px', padding: '0', fontSize: '50px', fontWeight: 'bold' }}>오늘의 루트</div>
      <div style={{ margin: '0 70px', padding: '0px' }}>
        <List
          grid={{ gutter: 30, column: 4 }}
          dataSource={todayMyroute}
          renderItem={(today) => (
            <List.Item>
              <Card
                cover={<img role="presentation" src={today.MyRouteFiles[0] && `http://localhost:3065/${today.MyRouteFiles[0].src}`} style={{height:'220px'}}/>}
                actions={[
                  <div>{today.title}</div>,
                ]}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodayRoute;
