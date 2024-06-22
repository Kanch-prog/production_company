import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Rubber Manufacturing Co.</p>
        <p>We are here to provide the best solutions.</p>
        <p>Call us: <a href="tel:+1234567890">+1 234 567 890</a></p>
        <p>Email: <a href="mailto:info@rubbermanufacturing.com">info@rubbermanufacturing.com</a></p>
      </div>
      <div className="footer-social">
        <a href="https://www.youtube.com" className="social-icon"><i className="fab fa-youtube"></i></a>
        <a href="https://www.linkedin.com" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com" className="social-icon"><i className="fab fa-facebook"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
