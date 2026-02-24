import React, { useEffect } from 'react';
import AOS from 'aos';
import './About.css';


import profileImage from '../../assets/image1.jpg'; 

const About = () => {
   useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,    
    });
  }, []);
  const CV_FILE_URL = '/alamgeer-khan.pdf';

  return (
    <section id="about" className="about-section" >
      <div className="about-image-container" data-aos="fade-right">
  <img 
    src={profileImage} 
    alt="Alamgeer Khan" 
    width="450"  
    height="500"
    loading="lazy" 
  />
</div>

      <div className="about-content-container">
        <span className="background-text">About</span>
        
        <h2 className="about-heading"data-aos="fade-up">
          <span id='aboutspan'>About</span> Me</h2>
        
        <p className="about-description"data-aos="fade-left">
          I'm a passionate MERN Stack Developer focused on creating seamless digital 
experiences. From concept to deployment, I build scalable applications that 
combine elegant design with robust functionality, always prioritizing 
performance and user satisfaction.
        </p>

        <div className="personal-details"data-aos="fade-left">
          <div className="detail-item">
            <span className="detail-label">Name:</span>
            <span className="detail-value">Alamgeer Khan</span>
          </div>
          <div className="detail-item">
          </div>
          <div className="detail-item">
            <span className="detail-label">Address:</span>
            <span className="detail-value">Pakistan</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Email:</span>
            <span className="detail-value">khanalamgeer996@gmail.com</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">03366043862</span>
          </div>
        </div>

        <div className="project-counter"data-aos="fade-up">
        </div>
        <div data-aos="fade-up">
        <a href={CV_FILE_URL} download className="download-cv-btn">
          DOWNLOAD CV
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;