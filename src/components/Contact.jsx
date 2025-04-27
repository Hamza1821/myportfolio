import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhone, FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 90%',
        end: 'center 60%',
        toggleActions: 'play none none reverse',
        scrub: 0.5
      }
    });
    
    tl.fromTo('.contact-heading', 
      { opacity: 0.3, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    )
    .fromTo('.contact-info', 
      { opacity: 0.3, x: -50 }, 
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, 
      '-=0.2'
    )
    .fromTo('.contact-form', 
      { opacity: 0.3, x: 50 }, 
      { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }, 
      '-=0.4'
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    emailjs.sendForm(
      'service_g9f6gks', // Replace with your EmailJS service ID
      'template_mcqmbrd', // Replace with your EmailJS template ID
      formRef.current,
      'DiKmGtoK7A44HusL1' // Replace with your EmailJS public key
    )
      .then((result) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.error('Error sending email:', error);
      });
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="contact-heading section-heading">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="contact-info">
            <p className="text-tertiary mb-8">
              I'm currently looking for new opportunities to apply my skills and knowledge. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FiPhone className="text-secondary" size={20} />
                <a href="tel:+919838894338" className="text-tertiary hover:text-secondary transition-colors duration-300">+91 9838894338</a>
              </div>
              
              <div className="flex items-center gap-4">
                <FiMail className="text-secondary" size={20} />
                <a href="mailto:hamzamubeen182@gmail.com" className="text-tertiary hover:text-secondary transition-colors duration-300">hamzamubeen182@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-4">
                <FiMapPin className="text-secondary" size={20} />
                <span className="text-tertiary">Lucknow, India</span>
              </div>
            </div>
            
            <div className="flex gap-6 mt-8">
              <a href="https://github.com/Hamza1821" target="_blank" rel="noopener noreferrer" className="text-quaternary hover:text-secondary transition-colors duration-300">
                <FiGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/hamza-mubin/" target="_blank" rel="noopener noreferrer" className="text-quaternary hover:text-secondary transition-colors duration-300">
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>
          
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label htmlFor="name" className="block text-tertiary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/30 border border-tertiary/30 rounded-md px-4 py-2 text-quaternary focus:outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-tertiary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary/30 border border-tertiary/30 rounded-md px-4 py-2 text-quaternary focus:outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-tertiary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-primary/30 border border-tertiary/30 rounded-md px-4 py-2 text-quaternary focus:outline-none focus:border-secondary transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 mt-2">Message sent successfully! I'll get back to you soon.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 mt-2">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;