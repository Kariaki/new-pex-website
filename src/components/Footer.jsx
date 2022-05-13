import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return(
    <footer>
      <div className="footer">
        <div className="first">
          <h4>Get to know us</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sponsorship</li>
            <li>Accessibility</li>
          </ul>
        </div>
        <div className="second">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Account Details</li>
            <li>Contact Us</li>
            <li>Order History</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="third">
          <h4>Doing Business</h4>
          <ul>
            <li>Become a Pexer</li>
            <li>Be a Partner Restaurant</li>
          </ul>
        </div>
        <div className="fourth">
          <h2>PEX</h2>
        </div>
      </div>

      <div className="sub-footer">
        <div className="service">
          <p>Terms of Service</p>
          <p>Privacy</p>
          <p>Notice at Collection</p>
          <p>&copy; {new Date().getFullYear()} PEX Global</p>
        </div>
        
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="icon">
            <FaWhatsapp />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
        </div>
      </div>
       
    </footer>
  )
}

export default Footer;
