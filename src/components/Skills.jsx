import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPython, FaJava, FaNodeJs, FaReact, FaDatabase, FaDocker, FaGithub, FaCode } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiExpress, SiPrisma, SiMongodb, SiTensorflow, SiKeras, SiScikitlearn, SiNumpy, SiPandas, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 85%',
        end: 'center 60%',
        toggleActions: 'play none none reverse',
        scrub: 0.3
      }
    });
    
    tl.fromTo('.skills-heading', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
    .fromTo('.skills-filter', 
      { opacity: 0.7, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 
      '-=0.2'
    )
    .fromTo('.skill-category', 
      { opacity: 0.7, y: 50 }, 
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.4, ease: 'power2.out' }, 
      '-=0.2'
    )
    .fromTo('.skill-item', 
      { opacity: 0.7, scale: 0.8 }, 
      { opacity: 1, scale: 1, stagger: 0.05, duration: 0.4, ease: 'power2.out' }, 
      '-=0.4'
    );

    // Add orbital animations for skill icons
    gsap.utils.toArray('.skill-item').forEach((item, index) => {
      const radius = 10;
      const speed = 2 + Math.random() * 2; // Random speed between 2-4 seconds
      const startAngle = (index * 137.5) % 360; // Golden angle for even distribution

      gsap.to(item, {
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
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.1,
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          duration: 0.3
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          boxShadow: '0 0 0 rgba(0,0,0,0)',
          duration: 0.3
        });
      });
    });
  }, []);
  
  // Filter skills when category changes
  useEffect(() => {
    const allSkillItems = document.querySelectorAll('.skill-category');
    
    if (activeCategory === 'all') {
      gsap.to(allSkillItems, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out'
      });
    } else {
      allSkillItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (category === activeCategory) {
          gsap.to(item, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: 'power3.out'
          });
        } else {
          gsap.to(item, {
            opacity: 0.3,
            scale: 0.95,
            duration: 0.4,
            ease: 'power3.out'
          });
        }
      });
    }
  }, [activeCategory]);
  
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      category: 'languages',
      skills: [
        { name: 'Python', icon: <FaPython size={24} />, level: 90 },
        { name: 'JavaScript', icon: <SiJavascript size={24} />, level: 85 },
        { name: 'Java', icon: <FaJava size={24} />, level: 75 },
        { name: 'C/C++', icon: <SiCplusplus size={24} />, level: 70 }
      ]
    },
    {
      title: 'Backend Development',
      category: 'backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs size={24} />, level: 85 },
        { name: 'Express.js', icon: <SiExpress size={24} />, level: 80 },
        { name: 'Prisma', icon: <SiPrisma size={24} />, level: 75 },
        { name: 'REST APIs', icon: <FaCode size={24} />, level: 85 }
      ]
    },
    {
      title: 'Databases & Tools',
      category: 'tools',
      skills: [
        { name: 'SQL', icon: <FaDatabase size={24} />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb size={24} />, level: 75 },
        { name: 'Docker', icon: <FaDocker size={24} />, level: 70 },
        { name: 'GitHub', icon: <FaGithub size={24} />, level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      category: 'frontend',
      skills: [
        { name: 'React.js', icon: <FaReact size={24} />, level: 85 },
        { name: 'HTML5', icon: <SiHtml5 size={24} />, level: 90 },
        { name: 'CSS3', icon: <SiCss3 size={24} />, level: 85 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={24} />, level: 80 },
        { name: 'GSAP', icon: <SiJavascript size={24} />, level: 75 }
      ]
    },
    {
      title: 'Machine Learning',
      category: 'ml',
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow size={24} />, level: 70 },
        { name: 'Keras', icon: <SiKeras size={24} />, level: 65 },
        { name: 'Scikit-learn', icon: <SiScikitlearn size={24} />, level: 75 },
        { name: 'NumPy', icon: <SiNumpy size={24} />, level: 80 },
        { name: 'Pandas', icon: <SiPandas size={24} />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" ref={skillsRef} className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="skills-heading section-heading">Skills</h2>
        
        {/* Filter buttons */}
        <div className="skills-filter flex flex-wrap gap-3 mb-8 justify-center">
          <button 
            onClick={() => handleCategoryChange('all')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'all' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            All
          </button>
          <button 
            onClick={() => handleCategoryChange('languages')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'languages' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            Languages
          </button>
          <button 
            onClick={() => handleCategoryChange('frontend')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'frontend' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            Frontend
          </button>
          <button 
            onClick={() => handleCategoryChange('backend')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'backend' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            Backend
          </button>
          <button 
            onClick={() => handleCategoryChange('tools')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'tools' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            Databases & Tools
          </button>
          <button 
            onClick={() => handleCategoryChange('ml')} 
            className={`px-4 py-2 rounded-md transition-all duration-300 ${activeCategory === 'ml' ? 'bg-secondary text-primary font-medium' : 'bg-primary/80 text-tertiary border border-tertiary/20'}`}
          >
            Machine Learning
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              data-category={category.category}
              className="skill-category bg-primary/80 p-6 rounded-lg border border-tertiary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-quaternary mb-4">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-secondary">{skill.icon}</span>
                      <span className="text-tertiary">{skill.name}</span>
                    </div>
                    <div className="h-2 w-full bg-primary/60 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary rounded-full transition-all duration-1000" 
                        style={{ width: `${skill.level}%`, transform: 'translateX(-100%)', opacity: 0 }}
                        ref={el => {
                          if (el) {
                            // Animate skill bar when in view
                            ScrollTrigger.create({
                              trigger: el,
                              start: 'top 90%',
                              onEnter: () => {
                                gsap.to(el, {
                                  translateX: 0,
                                  opacity: 1,
                                  duration: 1.5,
                                  ease: 'power3.out'
                                });
                              }
                            });
                          }
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;