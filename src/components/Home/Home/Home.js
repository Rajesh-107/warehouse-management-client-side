import React from 'react';
import { Helmet } from 'react-helmet-async';
import BestCarStyle from '../../../BestCarStyle/BestCarStyle';
import Banner from '../../Banner/Banner';
import Review from '../../Review/Review';
import PartItems from '../PartItems/PartItems';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - WareHouse</title>
            </Helmet>
            <Banner></Banner>
            <PartItems></PartItems>
            <BestCarStyle></BestCarStyle>
            <Review></Review>
        </div>
    );
};

export default Home;