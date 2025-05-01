
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';

const Index = () => {
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
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      animateOnScrollObserver.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <>
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
        className="fixed bottom-6 right-6 bg-syndicate-blue text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 hover:bg-syndicate-purple focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
};

export default Index;
