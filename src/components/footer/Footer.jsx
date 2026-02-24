import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

import { FaGithub, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope ,FaLinkedinIn} from 'react-icons/fa';

import ParticlesBackground from '../ParticlesBackground';

const Footer = () => {
  return (
    <footer className="footer-section">

      <ParticlesBackground id="footer-particles" />

      <div className="container footer-grid">
        
        <div className="footer-column">
          <h4>About</h4>
          <p>"MERN STACK Developer specializing in building fast and responsive web interfaces."</p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <ul className="footer-links">
            <li><Link to="/#home">→ Home</Link></li>
            <li><Link to="/#about">→ About</Link></li>
            <li><Link to="/#services">→ Services</Link></li>
            <li><Link to="/#projects">→ Projects</Link></li>
            <li><Link to="/#contact">→ Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#services">→ Web Design</a></li>
            <li><a href="#services">→ Web Development</a></li>
            <li><a href="#services">→ Ui/Ux Designer</a></li>
            <li><a href="#services">→ MERN STACK Developer</a></li>
            {/* <li><a href="#services">→ Video Editor</a></li> */}
          </ul>
        </div>

        <div className="footer-column">
          <h4>Have a Questions?</h4>
          <ul className="footer-contact-info">
            <li>
              <span><FaMapMarkerAlt /></span>
              <p>Punjab, Pakistan</p>
            </li>
            <li>
              <span><FaPhone /></span>
              <p>03366043862</p>
            </li>
            <li>
              <span><FaEnvelope /></span>
              <p>khanalamgeer996@gmail.com</p>
            </li>
          </ul>

          <div className="social-icons">
  <a href="https://github.com/Alamgir651" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.facebook.com/Alamgeer.khan.921230" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://www.instagram.com/alamgir.baloch9/" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/alamgeerkhan-softwareengineer/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>
</div>
</div>

      </div>
      <div className="copyright-text">
        <p>© {new Date().getFullYear()} All rights reserved | This Portfolio is made by Alamgeer Khan.</p>
      </div>
    </footer>
  );
};

export default Footer;