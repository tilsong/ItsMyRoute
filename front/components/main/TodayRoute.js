import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Card } from 'antd';
import Router from 'next/router';
import { LOAD_TODAYROUTE_REQUEST } from '../../reducers/myRoute';

const TodayRoute = () => {
  const dispatch = useDispatch();
  const { todayMyroute } = useSelector((state) => state.myRoute);

  useEffect(() => {
    if (todayMyroute.length < 4) {
      dispatch({
        type: LOAD_TODAYROUTE_REQUEST,
      });
    }
  }, [todayMyroute]);// todayMyroute

  return (
    <div style={{ padding: '0', paddingBottom: '20px', backgroundColor: '#f0f2f5' }}>
      <div style={{ margin: '0px 70px 20px', paddingTop: '20px', fontSize: '40px', fontWeight: 'bold' }}>오늘의 루트</div>
      <div style={{ margin: '0 70px', padding: '0px' }}>
        <List
          grid={{ gutter: 30, column: 4 }}
          dataSource={todayMyroute}
          renderItem={(today) => (
            <List.Item>
              <Card
                hoverable
                style={{ height: '200px' }}
                cover={(
                  <div style={{ position: 'relative' }} onClick={() => Router.push(`/myRoute/${today.id}`)}>
                    <div style={{ padding: '0 10px 3px', borderRadius: '5px', color: 'white', fontSize: '20px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.3)', position: 'absolute', left: '5%', top: '5%' }}>
                      {today.title}
                    </div>
                    <div style={{ padding: '0 10px 3px', borderRadius: '5px', color: 'white', fontSize: '15px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.3)', position: 'absolute', right: '5%', bottom: '5%' }}>
                      <div>
                        {today.routeLocalName}
                      </div>
                    </div>
                    <img role="presentation" src={today.MyRouteFiles[0] && `${today.MyRouteFiles[0].src}`} style={{ height: '200px', width: '100%' }} />
                  </div>
              )}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default TodayRoute;
