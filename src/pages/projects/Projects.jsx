import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPostgresql, SiTypescript } from 'react-icons/si';

const projectsData = [
  {
    title: 'Courier Delivery Services',
    description: 'Complete courier management system with real-time tracking, user authentication, admin dashboard, and payment integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🚚',
    features: [
      'Real-time package tracking',
      'Agent dashboard management',
      'Admin management',
      'Consumer management',
      'Customer live chat support',
      'Payment gateway integration',
    ],
    category: 'Full Stack',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    githubLink: 'https://github.com/waleedjatt88/Courier-Delivery-Services-Backend-',
    demoLink: '#',
  },
  {
    title: 'Blood Management System',
    description: 'Blood donation and inventory management platform with donor registration, request system, and emergency alerts.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    icon: '🩸',
    features: [
      'Donor registration & management',
      'Blood inventory tracking',
      'Emergency alert system',
      'Request & donation history',
    ],
    category: 'Full Stack',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    githubLink: 'https://github.com/waleedjatt88/backend-blood-managment',
    demoLink: '#',
  },
  {
    title: 'Programming Speed',
    description: 'RESTful API for competitive programming challenges with user management, problem sets, submission system, and leaderboard.',
    technologies: ['Node.js', 'Express', 'MongoDB'],
    icon: '⚡',
    features: [
      'RESTful API architecture',
      'Problem sets management',
      'Code submission system',
      'Real-time leaderboard',
    ],
    category: 'Backend Only',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    githubLink: 'https://github.com/waleedjatt88',
    demoLink: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern online shopping platform with product catalog, shopping cart, user authentication, and Stripe payment processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: '🛒',
    features: [
      'Product catalog & search',
      'Shopping cart functionality',
      'Stripe payment integration',
      'Order tracking & history',
    ],
    category: 'Full Stack',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    githubLink: 'https://github.com/waleedjatt88',
    demoLink: '#',
  },
];

const getTechIcon = (tech) => {
  const icons = {
    'React': <SiReact />,
    'Node.js': <SiNodedotjs />,
    'MongoDB': <SiMongodb />,
    'Express': <SiExpress />,
    'PostgreSQL': <SiPostgresql />,
    'TypeScript': <SiTypescript />,
  };
  return icons[tech] || null;
};

const Projects = () => {
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.project-card');

    gsap.fromTo(cards,
      { opacity: 0, y: 100, rotateX: 5 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: { each: 0.2, from: 'start' },
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

  const toggleFeatures = (index) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="background-text-projects">Projects</span>

        <div className="section-header-projects" data-aos="fade-up">
          <h2><span id='ourspan'>Our</span> Projects</h2>
          <p>
            "Driven by passion and purpose, I'm constantly learning, creating, and pushing boundaries to turn ideas into impactful digital experiences".
          </p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projectsData.map((project, index) => (
            <div
              className="project-card"
              key={index}
            >
              <div className="project-image" style={{ background: project.gradient }}>
                <div className="project-icon">{project.icon}</div>
                <div className="project-category-badge">{project.category}</div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                {/* Toggle Features Button */}
                <button 
                  className="toggle-features-btn"
                  onClick={() => toggleFeatures(index)}
                >
                  {expandedFeatures[index] ? (
                    <>
                      <FaChevronUp /> Hide Features
                    </>
                  ) : (
                    <>
                      <FaChevronDown /> View Features
                    </>
                  )}
                </button>

                {/* Features (Expandable) */}
                <div className={`project-features ${expandedFeatures[index] ? 'expanded' : 'collapsed'}`}>
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <FaCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a 
                    href={project.githubLink} 
                    className="project-btn github-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

