import React from 'react';
import { useSelector } from 'react-redux';
import { List, Card } from 'antd';

const TodayRoute = () => {
    const { myRoute } = useSelector(state => state.myRoute);

    return (
        <>
            <h3>오늘의 루트</h3>
            <List
                grid={{ gutter: 10, column: 4 }}
                dataSource={myRoute}
                renderItem={item => (
                <List.Item>
                    <Card 
                        cover={<img src={'https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg'} style={{width:'100%', height: '100%'}}/>}
                        actions= {[
                            <p>{item.MyRouteName}</p>  
                        ]}
                    >
                    </Card>
                </List.Item>
            )}
            />
        </>
    )
}

export default TodayRoute;