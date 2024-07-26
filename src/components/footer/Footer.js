// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"; // Import the WhatsApp icon
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2024 House Technology. All rights reserved.
        </p>
        <div className="icon-container">
          <a
            href="https://www.facebook.com/profile.php?id=100091864776994"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://x.com/housetechuae" // Update this URL to the actual X link
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="X"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.instagram.com/housetechuae/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://wa.me/+9710589445296" // Replace YOUR_PHONE_NUMBER with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
