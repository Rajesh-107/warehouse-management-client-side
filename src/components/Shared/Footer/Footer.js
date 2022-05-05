import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
           
            <div className="footer-content">
            <h3>WareHouse</h3>
                <p>Car Parts Warehouse is one of the top 25 Automotive Aftermarket Parts Distributors in the country. We are also members of the largest buying group in the country, the Automotive Distribution Network (ADN). We are an authorized distributor of all of the products that we sell.</p>
            </div>
            <ul className="socials">
    <li><a href="#"> <small>Facebook</small></a></li>
    <li><a href="#"><small>Google</small></a></li>
    <li><a href="#"><small>Instagram</small></a></li>
    <li><a href="#"><small>Github</small></a></li>
    <li><a href="#"><small>YouTube</small></a></li>
 </ul>
 <div className="footer-bottom">
        
 <p>copyright &copy;2022 <a href="#">Car Parts WareHouse</a>  </p>

</div>
        </footer>
    );
};

export default Footer;