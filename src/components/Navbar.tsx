import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why us', href: '#why-us' },
    { name: 'Offices', href: '#offices' },
    { name: 'Spaces', href: '#spaces' },
    { name: 'Plans', href: '#plans' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#15100B]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4'
          : 'bg-[#18120C]/90 backdrop-blur-sm py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center group">
          <span className="font-serif text-2xl sm:text-3xl text-white tracking-wide font-normal group-hover:text-[#DEBF86] transition-colors">
            Corporate Business Hub
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-light text-[#E5D7C7] hover:text-white transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C09449] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenBooking}
            className="ml-2 text-xs uppercase tracking-widest text-[#E5D7C7] border border-[#C09449]/40 hover:border-[#C09449] px-4 py-2 hover:bg-[#C09449]/10 transition-colors duration-200"
          >
            Book Viewing
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="tel:+971527601343"
            aria-label="Call directly"
            className="p-2 text-[#C09449] border border-white/10 rounded"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#15100B] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#FAF7F2] hover:text-[#C09449] py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full text-center py-2.5 bg-[#C09449] text-white text-sm font-medium tracking-wide hover:bg-[#A97C38] transition-colors"
            >
              Book a Viewing
            </button>
            <a
              href="tel:+971527601343"
              className="text-center text-xs text-[#D8C7B5] py-1 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C09449]" />
              <span>+971 52 760 1343</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
