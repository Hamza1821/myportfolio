import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animation for navbar items
    gsap.fromTo(
      '.nav-item',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-quaternary">
          <span className="text-secondary">&lt;</span>Hamza<span className="text-secondary">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="nav-item nav-link">Home</a>
          <a href="#about" className="nav-item nav-link">About</a>
          <a href="#experience" className="nav-item nav-link">Experience</a>
          <a href="#skills" className="nav-item nav-link">Skills</a>
          <a href="#projects" className="nav-item nav-link">Projects</a>
          <a href="#contact" className="nav-item nav-link">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-quaternary focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-primary/95 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <a href="#home" className="nav-link text-xl" onClick={toggleMenu}>Home</a>
        <a href="#about" className="nav-link text-xl" onClick={toggleMenu}>About</a>
        <a href="#experience" className="nav-link text-xl" onClick={toggleMenu}>Experience</a>
        <a href="#skills" className="nav-link text-xl" onClick={toggleMenu}>Skills</a>
        <a href="#projects" className="nav-link text-xl" onClick={toggleMenu}>Projects</a>
        <a href="#contact" className="nav-link text-xl" onClick={toggleMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;