import React from 'react';
import './Footer.css';

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer className="footer" ref={ref}>
      <div className="footer-content">
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: emailid@gmail.com</p>
          <p>Phone: +44 7462 806652</p>
          <p>Address: Store name, England, United Kingdom</p>
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
        <p>&copy; 2024 Off-Licence Shop. All rights reserved.</p>
        <p>Author: Tarun Kumar</p>
      </div>
    </footer>
  );
});

export default Footer;