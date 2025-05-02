
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Scroll to top button functionality
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById('scrollToTopBtn');
      if (scrollToTopBtn) {
        if (window.pageYOffset > 300) {
          scrollToTopBtn.classList.remove('opacity-0', 'invisible');
          scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
          scrollToTopBtn.classList.remove('opacity-100', 'visible');
          scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
      }
    };

    // Animation on scroll effect
    const animateOnScrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            animateOnScrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    // Allow time for the page to load
    setTimeout(() => {
      setIsLoaded(true);
      
      // Initialize animations after a short delay
      setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
          animateOnScrollObserver.observe(el);
        });
      }, 300);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        animateOnScrollObserver.unobserve(el);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Update the document title
  useEffect(() => {
    document.title = "Syndicate Solutions - Innovative Digital Solutions";
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Scroll to top button */}
      <button
        id="scrollToTopBtn"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-syndicate-blue to-syndicate-purple text-white p-3 rounded-full shadow-xl opacity-0 invisible transition-all duration-300 hover:shadow-2xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-syndicate-blue/50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Index;
