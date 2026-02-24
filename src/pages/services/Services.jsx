import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';
import { FaDatabase, FaNodeJs, FaMobileAlt, FaCode, FaUsers } from "react-icons/fa";
import { SiInstructure } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: <FaMobileAlt />,
    title: 'RESPONSIVE DESIGN',
    aosDelay: '0',
  },
  {
    icon: <FaDatabase/>,
    title: 'DATABASE MANAGEMENT', 
    aosDelay: '200',
  },
  {
    icon: <FaCode />,
    title: 'WEB DEVELOPER',
    aosDelay: '400',
  },
  {
    icon: <SiInstructure />,
    title: 'CODEBASE STRUCTURING',
    aosDelay: '0',
  },
  {
    icon: <FaUsers />,
    title: 'TEAM COLLABORATOR',
    aosDelay: '200',
  },
  {
    icon: <FaNodeJs />,
    title: 'Node.js',
    aosDelay: '400',
  },
];

const Services = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.service-card');

    gsap.fromTo(cards,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: { each: 0.15, from: 'start' },
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <span className="background-text-services">Services</span>

        <div className="section-header-services" data-aos="fade-up">
          <h2><span id='servicesspan'>Serv</span>ices</h2>
          <p>"I turn ideas into powerful, interactive web experiences—driven by creativity, code, and a passion for seamless design"</p>
        </div>

        <div className="services-grid" ref={gridRef}>
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;