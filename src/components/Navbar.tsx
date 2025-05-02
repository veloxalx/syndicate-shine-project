import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Handle navbar visibility on scroll
      if (currentScrollPos > 100) {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
      
      // Set scrolled state for styling
      setIsScrolled(currentScrollPos > 10);
      
      // Update active link based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute('id') || 'home');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Close mobile menu when escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', dropdown: [
      { id: 'web-dev', label: 'Web Development' },
      { id: 'mobile-dev', label: 'Mobile Apps' },
      { id: 'design', label: 'UI/UX Design' }
    ]},
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}
        ${visible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
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
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <div key={link.id} className="relative group">
              <a 
                href={link.dropdown ? '#' : `#${link.id}`} 
                onClick={() => !link.dropdown && handleLinkClick(link.id)}
                className={`relative px-2 py-2 text-syndicate-dark font-medium transition-colors flex items-center
                  ${activeLink === link.id ? 'text-syndicate-blue' : 'hover:text-syndicate-blue'}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />}
                {activeLink === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-syndicate-blue to-syndicate-purple rounded-full"></span>
                )}
              </a>
              
              {/* Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
                  <div className="py-1">
                    {link.dropdown.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="block px-4 py-3 text-sm text-syndicate-dark hover:bg-gradient-to-r hover:from-syndicate-blue/10 hover:to-syndicate-purple/10 hover:text-syndicate-blue transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button asChild className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 shadow-md shadow-syndicate-blue/10 transform hover:translate-y-[-2px] transition-all duration-300">
            <a href="#contact">
              Contact Us
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-syndicate-blue/10 to-syndicate-purple/10 text-syndicate-dark focus:outline-none focus:ring-2 focus:ring-syndicate-blue/30 z-50 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-lg shadow-xl z-40 transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 pt-24 pb-8 h-full flex flex-col">
          <div className="flex flex-col space-y-1">
            {navLinks.map(link => (
              <div key={link.id} className="border-b border-gray-100">
                <a
                  href={link.dropdown ? '#' : `#${link.id}`}
                  onClick={() => !link.dropdown && handleLinkClick(link.id)}
                  className={`flex items-center justify-between text-lg font-medium py-4 
                    ${activeLink === link.id ? 'text-syndicate-blue' : 'text-syndicate-dark'}`}
                >
                  {link.label}
                  {link.dropdown && <ChevronDown size={18} className={`transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} />}
                </a>
                
                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="pl-4 pb-2">
                    {link.dropdown.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => handleLinkClick(link.id)}
                        className="block py-3 text-syndicate-dark/80 hover:text-syndicate-blue transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-auto pt-6">
            <Button asChild className="w-full bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-all shadow-md shadow-syndicate-blue/10">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </a>
            </Button>
            
            {/* Social Media Icons - optional */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-syndicate-blue/10 flex items-center justify-center text-syndicate-blue hover:bg-syndicate-blue hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-syndicate-blue/10 flex items-center justify-center text-syndicate-blue hover:bg-syndicate-blue hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-syndicate-blue/10 flex items-center justify-center text-syndicate-blue hover:bg-syndicate-blue hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;