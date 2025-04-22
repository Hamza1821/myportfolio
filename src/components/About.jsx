import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaTrophy, FaStar, FaAward, FaMedal, FaCertificate } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top 85%',
        end: 'center 60%',
        toggleActions: 'play none none reverse',
        scrub: 0.3
      }
    });
    
    tl.fromTo('.about-heading', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.about-content', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 
      '-=0.3'
    )
    .fromTo('.about-education', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 
      '-=0.3'
    );

    // Add orbital animations for achievement badges
    gsap.utils.toArray('.achievement-badge').forEach((badge, index) => {
      const radius = 60;
      const speed = 4 + Math.random() * 2; // Random speed between 4-6 seconds
      const startAngle = (index * 72) % 360; // 72 degrees = 360/5 for even distribution

      gsap.to(badge, {
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
          curviness: 1.5
        }
      });

      // Add hover effect
      badge.addEventListener('mouseenter', () => {
        gsap.to(badge, {
          scale: 1.2,
          duration: 0.3,
          backgroundColor: 'rgba(var(--color-secondary), 0.4)'
        });
      });

      badge.addEventListener('mouseleave', () => {
        gsap.to(badge, {
          scale: 1,
          duration: 0.3,
          backgroundColor: 'rgba(var(--color-secondary), 0.2)'
        });
      });
    });
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="about-heading section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="about-content">
            <p className="text-tertiary mb-6">
              Hello! I'm Hamza, a passionate full-stack web developer and AI/ML enthusiast currently pursuing my Bachelor's degree in Computer Science and Engineering at the Institute of Engineering and Technology, Lucknow.
            </p>
            <p className="text-tertiary mb-6">
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p className="text-tertiary">
              Currently, I'm working as a Backend Developer Intern at Matrix Innovation, where I'm focused on optimizing API performance and engineering real-time systems. I'm also an active open-source contributor, having participated in GSSoC'24-Extended and HacktoberFest.
            </p>
          </div>
          
          <div className="about-education">
            <div className="bg-primary/80 p-6 rounded-lg border border-tertiary/20">
              <h3 className="text-xl font-bold text-quaternary mb-2">Education</h3>
              <div className="mb-4">
                <h4 className="text-secondary font-medium">Institute of Engineering and Technology, Lucknow</h4>
                <p className="text-tertiary">Bachelor of Technology (CSE)</p>
                <p className="text-tertiary">November 2022 - May 2026</p>
                <p className="text-tertiary">GPA: 8.1/10</p>
              </div>
              
              <h3 className="text-xl font-bold text-quaternary mb-2 mt-6">Achievements</h3>
              <div className="achievement-orbit relative h-48 mb-4">
                <div className="achievement-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <FaTrophy size={24} />
                </div>
                <div className="achievement-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <FaStar size={24} />
                </div>
                <div className="achievement-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <FaAward size={24} />
                </div>
                <div className="achievement-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <FaMedal size={24} />
                </div>
                <div className="achievement-badge absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-secondary/20 text-secondary">
                  <FaCertificate size={24} />
                </div>
              </div>
              <ul className="list-disc list-inside text-tertiary space-y-2">
                <li>Secured Rank 207 in CodeChef Starter 156 Div 3</li>
                <li>Recipient of the Reliance Foundation Scholarship</li>
                <li>Achieved rank 109 out of 3,900 active participants in GSSoC-Extended 2024</li>
                <li>CodeChef (Max Rating 1627, 3 star)</li>
                <li>HackerRank (Gold Badge, 5 star)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;