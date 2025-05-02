
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute('id') || 'home');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group z-10">
          <span className="text-xl md:text-2xl font-bold font-heading text-syndicate-dark relative">
            Syndicate
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-syndicate-blue to-syndicate-purple">Solutions</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-syndicate-blue to-syndicate-purple group-hover:w-full transition-all duration-300"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              className={`relative px-2 py-2 text-syndicate-dark font-medium transition-colors ${
                activeLink === link.id ? 'text-syndicate-blue' : 'hover:text-syndicate-blue'
              }`}
            >
              {link.label}
              {activeLink === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-syndicate-blue to-syndicate-purple rounded-full"></span>
              )}
            </a>
          ))}
          <Button asChild className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 shadow-md shadow-syndicate-blue/10">
            <a href="#contact">
              Contact Us
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-syndicate-dark focus:outline-none z-50"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg shadow-xl z-40 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-8 h-full flex flex-col">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  toggleMobileMenu();
                  setActiveLink(link.id);
                }}
                className={`text-lg font-medium py-4 border-b border-gray-100 ${
                  activeLink === link.id 
                    ? 'text-syndicate-blue border-syndicate-blue' 
                    : 'text-syndicate-dark'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <Button asChild className="w-full bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-all mt-6">
              <a href="#contact" onClick={toggleMobileMenu}>
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
