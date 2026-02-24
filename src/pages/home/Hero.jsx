import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

import './Hero.css';
import profileImage1 from '../../assets/image1.jpg';
import profileImage2 from '../../assets/image2.jpg'; 
import ParticlesBackground from '../../components/ParticlesBackground';

const Hero = () => {
  const [init, setInit] = useState(false);
  const [isFirstView, setIsFirstView] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFirstView(prevView => !prevView);
    }, 3000); 
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); 

  if (!init) {
    return null;
  }

  return (
    <section id='home' className="hero-section">
       
        <ParticlesBackground id="hero-particles" />


      <div className="hero-content">
        <p className="greeting">HELLO!</p>
        
        <div className="headline-wrapper">
          {isFirstView ? (
            <div key="frontend" className="fade-in">
              <h1 className="headline-small">I'm a</h1>
              <h1 className="headline-large">
                <span className="highlight">Full Stack MERN</span><span className="text-white"> Developer</span>
              </h1>
            </div>
          ) : (
            <div key="name" className="fade-in">
              <h1 className="headline-large">
                I'm <span className="highlight">Alamgeer Khan</span>
              </h1>
              <p className="sub-headline">A Freelance MERN Developer</p>
            </div>
          )}
        </div>



<div className="button-group">
    <Link to="/#contact" className="btn hire-me-btn">
        HIRE ME
    </Link>
    
    <Link to="/#projects" className="btn my-works-btn">
        MY WORKS
    </Link>
</div>
</div>
      
      <div className="hero-image">
  <img
    key={isFirstView ? 'image1' : 'image2'}
    src={isFirstView ? profileImage1 : profileImage2}
    alt="Alamgeer Khan"
    className="fade-in"
    loading="lazy"
    
    width="500"
    height="500" 
  />
</div>

      <div className="slider-dots">
        <span className={`dot ${isFirstView ? 'active' : ''}`}></span>
        <span className={`dot ${!isFirstView ? 'active' : ''}`}></span>
      </div>
    </section>
  );
};

export default Hero;