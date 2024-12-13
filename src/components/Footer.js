import React from 'react';
import './Footer.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: contact@offlicenceshop.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Off-Licence Shop. All rights reserved.</p>
      </div>
    </footer>
  );
});

export default Footer;