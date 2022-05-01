import React from 'react';
import './Banner.css';
import banner from '../../images/banner/jon-flobrant-lRSChvh1Mhs-unsplash.jpg'

const Banner = () => {
    return (
        <div className='banner' style={{backgroundImage: `url(${banner})`}}>
            <h1>World's Biggest Warehouse</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Deleniti molestiae labore a illo eius officia?</p>
            {/* <img src={banner} alt="" /> */}
        </div>
    );
};

export default Banner;