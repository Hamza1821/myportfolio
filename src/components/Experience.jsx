import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar } from 'react-icons/fi';
import matrixLogo from '../assets/matrix_innovation_logo.jpg';
import gssocLogo from '../assets/GSSoC.jpg';
import hfLogo from '../assets/hactoberfest logo.webp';
import jpLogo from '../assets/jp.avif';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const expRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: expRef.current,
        start: 'top 85%',
        end: 'center 60%',
        toggleActions: 'play none none reverse',
        scrub: 0.3
      }
    });
    
    tl.fromTo('.exp-heading', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.exp-card', 
      { opacity: 0, y: 50, scale: 0.95 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        stagger: 0.2, 
        duration: 0.8, 
        ease: 'power3.out',
        onComplete: () => {
          // Add floating animation to cards
          gsap.to('.exp-card', {
            y: '+=10',
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
            stagger: {
              each: 0.5,
              from: 'random'
            }
          });

          // Add orbital animations to company logos
          gsap.utils.toArray('.company-logo').forEach((logo, index) => {
            const card = logo.closest('.exp-card');
            const cardRect = card.getBoundingClientRect();
            const radius = 30;
            const speed = 3 + Math.random() * 2; // Random speed between 3-5 seconds
            const startAngle = (index * 90) % 360; // 90 degrees for even distribution

            gsap.to(logo, {
              duration: speed,
              repeat: -1,
              ease: 'none',
              motionPath: {
                path: [
                  { x: radius * Math.cos(startAngle), y: radius * Math.sin(startAngle) },
                  { x: radius * Math.cos(startAngle + Math.PI/2), y: radius * Math.sin(startAngle + Math.PI/2) },
                  { x: radius * Math.cos(startAngle + Math.PI), y: radius * Math.sin(startAngle + Math.PI) },
                  { x: radius * Math.cos(startAngle + 3*Math.PI/2), y: radius * Math.sin(startAngle + 3*Math.PI/2) },
                  { x: radius * Math.cos(startAngle + 2*Math.PI), y: radius * Math.sin(startAngle + 2*Math.PI) }
                ],
                curviness: 1.5,
                relative: true
              }
            });
          });
        }
      }, 
      '-=0.4'
    );

    // Animate stars
    gsap.to('.exp-star', {
      rotate: 360,
      duration: 'random(2, 4)',
      repeat: -1,
      ease: 'none',
      stagger: {
        each: 0.5,
        from: 'random'
      }
    });
  }, []);

  return (
    <section id="experience" ref={expRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="exp-heading section-heading">Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Background Stars */}
          {[...Array(20)].map((_, i) => (
            <FiStar
              key={i}
              className={`exp-star absolute text-secondary/30 transform`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 10 + 5}px`
              }}
            />
          ))}
          {/* Matrix Innovation */}
          <div className="exp-card relative backdrop-blur-sm bg-primary/40 p-6 rounded-lg border border-tertiary/20 group hover:bg-secondary/10 hover:border-quaternary transition-all duration-700 hover:shadow-[0_0_25px_rgba(var(--quaternary-rgb),0.4)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/30 before:via-secondary/20 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-700 group-hover:before:opacity-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <img src={matrixLogo} alt="Matrix Innovation" className="company-logo w-12 h-12 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-quaternary group-hover:text-secondary transition-colors duration-300">Backend Developer Intern</h3>
                <div className="text-secondary font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">Dec 2024 - Present</div>
              </div>
            </div>
            <h4 className="text-lg text-secondary mb-4 group-hover:text-quaternary transition-colors duration-300">Matrix Innovation</h4>
            <ul className="relative list-disc list-inside text-tertiary space-y-2 z-10 group-hover:text-tertiary/90 transition-colors duration-300">
              <li>Engineered and Optimized backend API performance, reducing response times by 35% through query indexing and browser local storage caching.</li>
              <li>Engineered real-time matchmaking & session management for a Unity-based 3D basketball game, improving match success rate by 40%.</li>
              <li>Reduced WebSocket event latency from 120ms to 75ms, enhancing real-time responsiveness.</li>
              <li>Improved database query efficiency by 50%, leading to faster data retrieval and smoother gameplay.</li>
              <li>Contributing to backend development of Amorr and IRLSocial, gaining experience in deployment, microservice architecture, Jest testing, and security testing.</li>
            </ul>
          </div>
          
          {/* GSSoC */}
          <div className="exp-card relative backdrop-blur-sm bg-primary/40 p-6 rounded-lg border border-tertiary/20 group hover:bg-secondary/10 hover:border-quaternary transition-all duration-700 hover:shadow-[0_0_25px_rgba(var(--quaternary-rgb),0.4)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/30 before:via-secondary/20 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-700 group-hover:before:opacity-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <img src={gssocLogo} alt="GSSoC" className="company-logo w-12 h-12 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-quaternary group-hover:text-secondary transition-colors duration-300">Contributor</h3>
                <div className="text-secondary font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">Oct 2024 - Nov 2024</div>
              </div>
            </div>
            <h4 className="text-lg text-secondary mb-4 group-hover:text-quaternary transition-colors duration-300">GSSoC-Extended 2024</h4>
            <ul className="relative list-disc list-inside text-tertiary space-y-2 z-10 group-hover:text-tertiary/90 transition-colors duration-300">
              <li>Contributed 22 merged pull requests across various open-source projects, demonstrating proficiency in GSAP animations and backend development.</li>
              <li>Achieved rank 109 out of 3,900 active participants, showcasing consistency and impactful contributions.</li>
              <li>Contributed to open source repositories like Algo, master-web-development, Imagine-AI.</li>
            </ul>
          </div>
          
          {/* HacktoberFest */}
          <div className="exp-card relative backdrop-blur-sm bg-primary/40 p-6 rounded-lg border border-tertiary/20 group hover:bg-secondary/10 hover:border-quaternary transition-all duration-700 hover:shadow-[0_0_25px_rgba(var(--quaternary-rgb),0.4)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/30 before:via-secondary/20 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-700 group-hover:before:opacity-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <img src={hfLogo} alt="HacktoberFest" className="company-logo w-12 h-12 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-quaternary group-hover:text-secondary transition-colors duration-300">Contributor</h3>
                <div className="text-secondary font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">Oct 2023, Oct 2024</div>
              </div>
            </div>
            <h4 className="text-lg text-secondary mb-4 group-hover:text-quaternary transition-colors duration-300">HacktoberFest</h4>
            <ul className="relative list-disc list-inside text-tertiary space-y-2 z-10 group-hover:text-tertiary/90 transition-colors duration-300">
              <li>Contributed to open source repositories like DSA-hub, Algo-master, and other projects.</li>
              <li>Gained experience in collaborative development and version control through meaningful contributions.</li>
            </ul>
          </div>
          
          {/* JP Morgan */}
          <div className="exp-card relative backdrop-blur-sm bg-primary/40 p-6 rounded-lg border border-tertiary/20 group hover:bg-secondary/10 hover:border-quaternary transition-all duration-700 hover:shadow-[0_0_25px_rgba(var(--quaternary-rgb),0.4)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/30 before:via-secondary/20 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-700 group-hover:before:opacity-100 hover:scale-[1.02] hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <img src={jpLogo} alt="JP Morgan" className="company-logo w-12 h-12 rounded-full object-cover mr-4" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-quaternary group-hover:text-secondary transition-colors duration-300">SWE Virtual Internship</h3>
                <div className="text-secondary font-mono opacity-80 group-hover:opacity-100 transition-opacity duration-300">Aug 2024</div>
              </div>
            </div>
            <h4 className="text-lg text-secondary mb-4 group-hover:text-quaternary transition-colors duration-300">JP Morgan & Chase Co. (Forage)</h4>
            <ul className="relative list-disc list-inside text-tertiary space-y-2 z-10 group-hover:text-tertiary/90 transition-colors duration-300">
              <li>Created a 2D graph for data visualization, enhancing financial data interpretation.</li>
              <li>Gained practical experience in software engineering practices used in financial technology.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;