import React from 'react';
import Extra from '../components/Extra';
import Footer from '../components/Footer';
import Products from '../pages/Products/Products';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Rating from './Rating';

const Home = () => {
    return (
        <div className=''>
            <Banner />
            <Products />
            <Rating />
            <BusinessSummery />
            <Extra />
            <Footer />
        </div>
    );
};

export default Home;