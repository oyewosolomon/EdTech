import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = {
    product: [
      { name: 'Analytics Dashboard', href: '#' },
      { name: 'Student Tracking', href: '#' },
      { name: 'Assessment Tools', href: '#' },
      { name: 'Learning Paths', href: '#' },
    ],
    solutions: [
      { name: 'For Schools', href: '#' },
      { name: 'For Universities', href: '#' },
      { name: 'For Teachers', href: '#' },
      { name: 'For Administrators', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg mr-2" />
              <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-600'}`}>
                EdTech Analytics
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-gray-600'} hover:text-indigo-600`}>
                <span>Product</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute -left-4 w-56 mt-2 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                {navigation.product.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-gray-600'} hover:text-indigo-600`}>
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute -left-4 w-56 mt-2 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                {navigation.solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-gray-600'} hover:text-indigo-600`}>
                <span>Company</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute -left-4 w-56 mt-2 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                {navigation.company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="#" className={`${isScrolled ? 'text-gray-600' : 'text-gray-600'} hover:text-indigo-600`}>
              Pricing
            </a>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className={`${
                isScrolled ? 'text-gray-600 hover:text-indigo-600' : 'text-gray-600 hover:text-indigo-500'
              }`}
            >
              Sign in
            </a>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-600' : 'text-white'} p-2`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {Object.entries(navigation).map(([category, items]) => (
              <div key={category} className="py-2">
                <div className="px-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {category}
                </div>
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-indigo-50 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ))}
            <div className="px-3 py-4 space-y-4">
              <a
                href="#"
                className="block text-center px-4 py-2 text-base font-medium text-gray-900 hover:text-indigo-600"
              >
                Sign in
              </a>
              <a
                href="#"
                className="block text-center px-4 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;