import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary/80 border-t border-tertiary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-tertiary text-sm">
              &copy; {currentYear} Hamza Mubin. All Rights Reserved.
            </p>
            <p className="text-tertiary text-sm mt-1">
              Made with passion by Hamza Mubin
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Hamza1821" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hamza-mubin/" target="_blank" rel="noopener noreferrer" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FiLinkedin size={20} />
            </a>
            <a href="mailto:hamzamubeen182@gmail.com" className="text-tertiary hover:text-secondary transition-colors duration-300">
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;