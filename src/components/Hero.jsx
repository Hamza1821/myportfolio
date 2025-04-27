import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaCode, FaServer, FaDatabase, FaPython, FaReact, FaDocker,FaJava } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJest, SiMysql, SiSpring } from 'react-icons/si';

const Hero = () => {
  const heroRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Web Developer', 'Backend Developer', 'AI/ML Enthusiast'];
  
  // Typing animation effect
  useEffect(() => {
    const textToType = titles[currentIndex];
    let typingInterval;
    
    if (displayText.length < textToType.length) {
      typingInterval = setTimeout(() => {
        setDisplayText(textToType.substring(0, displayText.length + 1));
      }, 100);
    } else {
      // Pause at the end of typing before erasing
      typingInterval = setTimeout(() => {
        // Start erasing
        const erasingInterval = setInterval(() => {
          setDisplayText(prev => {
            if (prev.length === 0) {
              clearInterval(erasingInterval);
              setCurrentIndex((currentIndex + 1) % titles.length);
              return '';
            }
            return prev.substring(0, prev.length - 1);
          });
        }, 50);
      }, 2000);
    }
    
    return () => clearTimeout(typingInterval);
  }, [displayText, currentIndex, titles]);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Animate code symbols in background
    gsap.to('.floating-icon', {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-15, 15)',
      duration: 'random(3, 6)',
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2
    });

    // Animate solar system
    // Sun pulsing animation
    gsap.to('.sun', {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Skills rotation animation
    const skills = document.querySelectorAll('.skill-orbit');
    const baseSpeed = 6; // Faster base rotation speed
    
    // Relative orbital periods (adjusted for better visibility)
    const orbitalPeriods = [
      1.0,  // React
      1.5,  // Node.js
      2.0,  // MongoDB
      2.5,  // Express
      3.0,  // PostgreSQL
      3.5,  // Docker
      4.0,  // Git
      4.5   // Jest
    ];
    
    skills.forEach((skill, index) => {
      const duration = baseSpeed * orbitalPeriods[index];
      gsap.to(skill, {
        rotation: "+=360",
        duration: duration,
        ease: 'none',
        repeat: -1,
        transformOrigin: '50% 50%',
        overwrite: false
      });
    });

    // Add floating animation to skill icons
    gsap.to('.skill-icon', {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2
    });

    
    tl.fromTo('.hero-greeting', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.hero-name', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo('.hero-title-container', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo('.hero-desc', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo('.hero-buttons', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    )
    .fromTo('.social-icon', 
      { opacity: 0, x: -10 }, 
      { opacity: 1, x: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }, 
      '-=0.4'
    );
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center pt-10 pb-10 relative overflow-hidden">
      {/* Floating code symbols in background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <FaCode className="floating-icon absolute text-secondary" style={{ top: '15%', left: '10%', fontSize: '2rem' }} />
        <FaServer className="floating-icon absolute text-secondary" style={{ top: '40%', left: '80%', fontSize: '2.5rem' }} />
        <FaDatabase className="floating-icon absolute text-secondary" style={{ top: '70%', left: '20%', fontSize: '2rem' }} />
        <FaCode className="floating-icon absolute text-secondary" style={{ top: '20%', left: '60%', fontSize: '1.8rem' }} />
        <FaServer className="floating-icon absolute text-secondary" style={{ top: '80%', left: '70%', fontSize: '2.2rem' }} />
        <div className="floating-icon absolute text-secondary font-mono" style={{ top: '30%', left: '30%', fontSize: '1.5rem' }}>&lt;/&gt;</div>
        <div className="floating-icon absolute text-secondary font-mono" style={{ top: '60%', left: '50%', fontSize: '1.5rem' }}>{'{}'}</div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-start justify-center gap-4">
  
          <h1 className="hero-name text-5xl md:text-7xl font-bold text-quaternary mb-2">Hamza Mubin</h1>
          
          <div className="hero-title-container h-24 mb-6">
            <h2 className="hero-title text-4xl md:text-6xl font-bold text-tertiary leading-tight">
              <span className="text-secondary">I'm a </span>
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
            <br />
          </div>
          
          <p className="hero-desc text-tertiary max-w-xl mb-8 text-lg">
            Programming enthusiast who builds innovative solutions for real-world problems. 
            Currently focused on backend development at <span className="text-secondary">Matrix Innovation</span> and exploring AI/ML technologies.
          </p>
          
          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/Hamza1821" target="_blank" rel="noopener noreferrer" className="social-icon text-quaternary hover:text-secondary transition-colors duration-300">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/hamzamubin/" target="_blank" rel="noopener noreferrer" className="social-icon text-quaternary hover:text-secondary transition-colors duration-300">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:hamzamubeen182@gmail.com" className="social-icon text-quaternary hover:text-secondary transition-colors duration-300">
              <FiMail size={24} />
            </a>
          </div>
          
          <div className="hero-buttons flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary flex items-center gap-2">
              <span>View My Work</span>
            </a>
            <a href="#contact" className="btn-primary flex items-center gap-2">
              <span>Contact Me</span>
            </a>
            <a href="/resume.pdf" download className="btn-primary flex items-center gap-2">
              <FiDownload size={18} />
              <span>Resume</span>
            </a>
          </div>
          </div>
          
          {/* Tech Stack Orbital Animation */}
          <div className="relative w-full h-[500px] hidden md:block ">
            <div className="absolute inset-0 scale-[0.85]">
              {/* Core Language (Python) */}
              <div className="sun absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center bg-space-cosmic/80 rounded-full"
                   style={{
                     boxShadow: '0 0 30px #4169E1, 0 0 60px #7B4397',
                   }}
              >
                <FaJava className="text-space-stardust w-10 h-10" />
              </div>
              {/* Orbiting Skills */}
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-space-nebula/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#61DAFB]/10 rounded-full">
                  <FaReact className="text-[#61DAFB] w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-space-aurora/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#6DB33F]/10 rounded-full">
                  <SiSpring className="text-[#6DB33F] w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-space-stardust/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#47A248]/10 rounded-full">
                  <SiMongodb className="text-[#47A248] w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-space-cosmic/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                  <SiExpress className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full border border-space-nebula/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#F29111]/10 rounded-full">
                  <SiMysql className="text-[#F29111] w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] rounded-full border border-space-aurora/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#2496ED]/10 rounded-full">
                  <FaDocker className="text-[#2496ED] w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full border border-space-stardust/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-black/10 rounded-full">
                  <FiGithub className="text-white w-6 h-6" />
                </div>
              </div>
              <div className="skill-orbit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full border border-space-cosmic/20">
                <div className="skill-icon absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-[#C21325]/10 rounded-full">
                  <SiJest className="text-[#C21325] w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;