import React from 'react';
import AppLayout from '../components/AppLayout';
import TodayRoute from '../components/TodayRoute';
import TimeLine from '../components/TimeLine.js';
import PopularityTags from '../components/PopularityTags';


const Home = () => {
    return(
        <AppLayout>
            <TodayRoute/>
            <TimeLine />
            <PopularityTags />
        </AppLayout>
    )
}

export default Home;