import React from 'react';
import './footer.css'; // Replace with the path to your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
