import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer>
           
            <div class="footer-content">
            <h3>WareHouse</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur a numquam, sequi voluptatibus repellat!</p>
            </div>
            <ul class="socials">
    <li><a href="#"> <small>Facebook</small></a></li>
    <li><a href="#"><small>Google</small></a></li>
    <li><a href="#"><small>Instagram</small></a></li>
    <li><a href="#"><small>Github</small></a></li>
    <li><a href="#"><small>YouTube</small></a></li>
 </ul>
 <div class="footer-bottom">
        
 <p>copyright &copy;2021 <a href="#">Car Parts WareHouse</a>  </p>

</div>
        </footer>
    );
};

export default Footer;