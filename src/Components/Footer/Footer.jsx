import React from "react";
import './Footer.css';
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>Passionate web developer eager to build clean and user-friendly websites.</p>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2025 Anjali Gupta. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <div className="footer-socials">
            <p>Connect with me:</p>
            <a
              href="https://www.linkedin.com/in/anjali-gupta-6b8427281/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/Anjali129-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={22} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
