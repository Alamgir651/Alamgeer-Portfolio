import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

import './Hero.css';
import profileImage1 from '../../assets/image1.jpg';
import profileImage2 from '../../assets/image2.jpg'; 
import ParticlesBackground from '../../components/ParticlesBackground';

const phrases = [
  "Full Stack MERN Developer",
  "Alamgeer Khan",
  "Freelance MERN Developer",
];

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && displayText === currentWord) {
      const pause = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1)
      );
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Hero = () => {
  const [init, setInit] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const typedText = useTypewriter(phrases);
  const images = [profileImage1, profileImage2];

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
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
          <h1 className="headline-small">I'm a</h1>
          <h1 className="headline-large">
            <span className="highlight">{typedText}</span>
            <span className="typing-cursor">|</span>
          </h1>
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
          key={imageIndex}
          src={images[imageIndex]}
          alt="Alamgeer Khan"
          className="fade-in"
          loading="lazy"
          width="500"
          height="500"
        />
      </div>

      <div className="slider-dots">
        <span className={`dot ${imageIndex === 0 ? 'active' : ''}`}></span>
        <span className={`dot ${imageIndex === 1 ? 'active' : ''}`}></span>
      </div>
    </section>
  );
};

export default Hero;