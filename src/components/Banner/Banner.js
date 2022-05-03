import React from 'react';
import './Banner.css';
import banner from '../../images/banner/jon-flobrant-lRSChvh1Mhs-unsplash.jpg'

const Banner = () => {
    return (
        <div className='banner' style={{backgroundImage: `url(${banner})`}}>
            <h1 className='text-secondary'>World's Biggest Warehouse</h1>
            <p className='text-secondary h1'>A warehouse is a building for storing goods. Warehouses are used by manufacturers, importers, exporters, wholesalers, <br /> transport businesses, customs, etc.</p>
            {/* <img src={banner} alt="" /> */}
        </div>
    );
};

export default Banner;