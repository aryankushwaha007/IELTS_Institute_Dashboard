import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-primary-600 text-white font-bold text-2xl px-4 py-2 rounded-lg">
              IELTS
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Institute
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Home
            </a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Courses
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#courses"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
