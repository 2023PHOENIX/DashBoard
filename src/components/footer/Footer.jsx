import React from "react";
import "./footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        {/* Add more links as needed */}
      </ul>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
