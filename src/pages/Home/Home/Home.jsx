import React from 'react';
import Chefs from '../chefs/Chefs';
import Banner from '../banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <div className=''>
            <Banner/>
            <Chefs/>
            </div>
        </div>
    );
};

export default Home;