import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiJest, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);


const Projects = () => {
  const projectsRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: 'top 85%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
        scrub: 0.5
      }
    });
    
    tl.fromTo('.projects-heading', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    )
    .fromTo('.projects-description', 
      { opacity: 0.7, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    )
    .fromTo('.project-card', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.6, ease: 'power3.out' }, 
      '-=0.3'
    );
    
    // Add hover animations for project cards
    gsap.utils.toArray('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          boxShadow: '0 10px 30px rgba(100, 255, 218, 0.15)',
          borderColor: 'rgba(100, 255, 218, 0.5)',
          duration: 0.3
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          borderColor: 'rgba(136, 146, 176, 0.2)',
          duration: 0.3
        });
      });
    });
  }, []);
  
  // Function to get tech icon
  const getTechIcon = (tech) => {
    switch(tech.toLowerCase()) {
      case 'react.js': return <FaReact className="text-[#61DAFB]" />;
      case 'node.js': return <FaNodeJs className="text-[#68A063]" />;
      case 'express.js': return <SiExpress className="text-white" />;
      case 'mongodb': return <SiMongodb className="text-[#47A248]" />;
      case 'mysql': return <SiMysql className="text-[#4479A1]" />;
      case 'postgresql': return <SiPostgresql className="text-[#336791]" />;
      case 'prisma': return <SiPrisma className="text-white" />;
      case 'jest': return <SiJest className="text-[#C21325]" />;
      case 'html': case 'html5': return <SiHtml5 className="text-[#E34F26]" />;
      case 'css': case 'css3': return <SiCss3 className="text-[#1572B6]" />;
      case 'javascript': return <SiJavascript className="text-[#F7DF1E]" />;
      case 'websockets': return <FaCode className="text-white" />;
      case 'rest apis': case 'nasa api': case 'sports api': return <FaCode className="text-white" />;
      default: return <FiFolder className="text-secondary" />;
    }
  };
  

  const projects = [
    {
      title: 'HamVerse',
      description: 'A 2D Metaverse application creating a real-time collaborative environment with WebSockets and PostgreSQL. Features dynamic user interactions, scalable APIs with Prisma ORM, and Test-Driven Development using Jest.',
      tech: ['Node.js', 'PostgreSQL', 'Prisma', 'React.js', 'WebSockets', 'Jest'],
      github: 'https://github.com/Hamza1821/HamVerse',
      image: 'metaverse-bg.jpg',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website created with React and Tailwind CSS, featuring smooth animations, responsive design, and modern UI components.',
      tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Hamza1821/portfolio',
      live: 'https://hamza-mubin.vercel.app',
      image: 'portfolio.jpg'
    },
    {
      title: 'HamGram',
      description: 'A full-stack social media platform with features like user authentication, post creation, real-time interactions, and responsive design.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Hamza1821/HamGramUI',
      apiGithub: 'https://github.com/Hamza1821/HamGramAPI',
      image: 'social-bg.jpg'
    },
    {
      title: 'SpaceHm',
      description: 'An interactive space exploration platform that showcases the Astronomy Picture of the Day and other space-related content using NASA\'s API.',
      tech: ['React.js', 'HTML', 'CSS', 'NASA API'],
      github: 'https://github.com/Hamza1821/SpaceHm',
      live: 'https://spacehm.vercel.app/',
      image: 'space-bg.jpg'
    },
    {
      title: 'PlanetsPedia',
      description: 'An educational web application providing comprehensive information about our solar system with interactive elements and engaging content.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Hamza1821/PlanetsPedia',
      image: 'planets-bg.jpg'
    },
    {
      title: 'Sportify',
      description: 'A modern web application delivering the latest sports news and updates with a clean, user-friendly interface and real-time data.',
      tech: ['React.js', 'CSS', 'Sports API'],
      github: 'https://github.com/Hamza1821/Sportify',
      image: 'sports-bg.jpg'
    },
    {
      title: 'Spotify Clone',
      description: 'A music streaming application clone featuring playlist management, music playback controls, and user authentication.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Hamza1821/Spotify-clone',
      image: 'music-bg.jpg'
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="projects-heading section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group relative bg-primary/80 p-6 rounded-lg border border-tertiary/20 hover:border-secondary/50 transition-all duration-700 flex flex-col h-full overflow-hidden backdrop-blur-sm hover:bg-secondary/10 hover:shadow-[0_0_25px_rgba(var(--quaternary-rgb),0.4)] before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/30 before:via-secondary/20 before:to-primary/30 before:opacity-0 before:transition-opacity before:duration-700 group-hover:before:opacity-100 hover:scale-[1.02] hover:-translate-y-2">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-quaternary mb-2 group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                
                <p className="text-tertiary mb-4 flex-grow group-hover:text-tertiary/90 transition-colors duration-300">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-1 text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded hover:bg-secondary/20 transition-colors duration-300">
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-quaternary hover:text-secondary transition-colors duration-300" aria-label={`GitHub repository for ${project.title}`}>
                    <FiGithub size={20} />
                  </a>
                  {project.apiGithub && (
                    <a href={project.apiGithub} target="_blank" rel="noopener noreferrer" className="text-quaternary hover:text-secondary transition-colors duration-300" aria-label={`API GitHub repository for ${project.title}`}>
                      <FiGithub size={20} /> <span className="text-xs">API</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-quaternary hover:text-secondary transition-colors duration-300" aria-label={`Live demo for ${project.title}`}>
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  }
export default Projects;