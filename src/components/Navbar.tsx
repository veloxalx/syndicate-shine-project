
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-heading text-syndicate-dark">
            Syndicate<span className="text-syndicate-blue">Solutions</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-syndicate-dark font-medium hover-underline">Home</a>
          <a href="#services" className="text-syndicate-dark font-medium hover-underline">Services</a>
          <a href="#about" className="text-syndicate-dark font-medium hover-underline">About</a>
          <a href="#team" className="text-syndicate-dark font-medium hover-underline">Team</a>
          <Button asChild>
            <a href="#contact" className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-opacity">
              Contact Us
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-syndicate-dark focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#home" onClick={toggleMobileMenu} className="text-syndicate-dark font-medium py-2">Home</a>
            <a href="#services" onClick={toggleMobileMenu} className="text-syndicate-dark font-medium py-2">Services</a>
            <a href="#about" onClick={toggleMobileMenu} className="text-syndicate-dark font-medium py-2">About</a>
            <a href="#team" onClick={toggleMobileMenu} className="text-syndicate-dark font-medium py-2">Team</a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={toggleMobileMenu} className="bg-gradient-to-r from-syndicate-blue to-syndicate-purple hover:opacity-90 transition-opacity">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
