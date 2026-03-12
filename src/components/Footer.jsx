import React from "react";
import "./Footer.css";
import logo from "../photos/logo.png";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-wave-container">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#0b1f3a" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="footer-content">
        {/* Main Centered Logo */}
        <div className="footer-center-brand">
          <img src="https://14wgjdss3w.ufs.sh/f/ImvjWigzci0ZSIA9MBiUqJBvCjYnufEe4F5yZ8Q7TGbl1zaN" alt="Pharma AI" className="footer-main-logo" />
        </div>

        {/* Minimal Bottom Info Row */}
        <div className="footer-minimal-row">
          <div className="footer-links-minimal">
            <a href="#home">Home</a>
            <a href="#overview">Overview</a>
            <a href="#agenda">Agenda</a>
            <a href="#speakers">Speakers</a>
          </div>

          <p className="footer-copyright-minimal">&copy; {new Date().getFullYear()} Digi-Tech Pharma & AI. All rights reserved.</p>

          <div className="footer-socials-minimal">
            <a href="#" className="social-icon-min"><FaLinkedinIn /></a>
            <a href="#" className="social-icon-min"><FaInstagram /></a>
            <a href="#" className="social-icon-min"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
