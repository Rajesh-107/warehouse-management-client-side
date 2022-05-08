import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className='container mb-5'>
            <Helmet>
                <title>About - WareHouse</title>
            </Helmet>
            <h2>SERVICE</h2>
            <p>Car Parts Warehouse has over 175 delivery vehicles on the road each day making local deliveries! Everything that we sell comes with a minimum of a 1 year warranty and many items come with longer warranties. All of our locations are staffed with managers, experienced counter personnel and drivers focused on getting you the right parts in a short amount of time. We call this Hot Shot Delivery!</p>
            <h2>AVAILABILITY</h2>
            <p>Our name says it all. Car Parts Warehouse. We stock full lines from over 100 name brand manufacturers. It doesn’t matter if you are in Youngstown, Canton, Norwalk or anywhere in between if the part you need is in our Warrensville Heights Distribution center you can get it the same day if ordered by 2:30 PM! We call this our Professional Installer VIP Delivery!</p>
            <h2>PRICE</h2>
            <p>Car Parts Warehouse is one of the top 25 Automotive Aftermarket Parts Distributors in the country. We are also members of the largest buying group in the country, the Automotive Distribution Network (ADN). We have negotiated special pricing from our manufacturers and pass the savings directly to you the professional installer! We are an authorized distributor of all of the products that we sell. This means that we buy directly from the manufacturer and sell them to you. No middle men!</p>
            <div>
                <h1 className='text-primary mb-3'>RIGHT PARTS. RIGHT PRICE. RIGHT NOW</h1>
            </div>
            <div>
                <h1 className='text-danger mb-5'>MISSION STATEMENT</h1>
                <h3>TO PROVIDE –</h3>
                <p>Our Customers with the highest quality possible in parts and service…</p>
                <h3>TO TREAT –</h3>
                <p>All people we come into contact with, in our business dealings, with respect, fairness and honesty…</p>
                <h3>TO FURNISH -</h3>
                <p>Our employees with career opportunities, pleasant working conditions, fair wages and opportunities for advancement…</p>
            </div>
        </div>
    );
};

export default About;