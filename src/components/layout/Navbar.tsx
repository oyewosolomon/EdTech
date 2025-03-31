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
              {/* <div className="w-8 h-8 bg-indigo-600 rounded-lg mr-2" /> */}
              <svg width="40px" height="40px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>school_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Building" transform="translate(-432.000000, -48.000000)"> <g id="school_fill" transform="translate(432.000000, 48.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M11.063,2.46883 C11.5716714,2.06187429 12.2791765,2.03280602 12.8162528,2.3816252 L12.937,2.46883 L17.2494,5.91871 C17.67636,6.260305 17.942778,6.7599067 17.991792,7.29932962 L18,7.48045 L18,18.9999 L19,18.9999 L19,10.4999 C19,10.2543889 19.1769086,10.0502644 19.4101355,10.0079345 L19.5,9.99988 L20,9.99988 C21.0543909,9.99988 21.9181678,10.8157482 21.9945144,11.8506337 L22,11.9999 L22,19.8999 C22,20.4669 21.5709778,20.9337222 21.0198548,20.9934452 L20.9,20.9999 L3.1,20.9999 C2.53299067,20.9999 2.06617653,20.5708778 2.00645469,20.0197548 L2,19.8999 L2,11.9999 C2,10.9455091 2.81587733,10.081714 3.85073759,10.0053657 L4,9.99988 L4.5,9.99988 C4.74545778,9.99988 4.9496079,10.1767254 4.99194425,10.4100085 L5,10.4999 L5,18.9999 L6,18.9999 L6,7.48045 C6,6.933637 6.2237058,6.4135135 6.61430643,6.03826498 L6.75061,5.91871 L11.063,2.46883 Z M12,8.99988 C10.8954,8.99988 10,9.89531 10,10.9999 C10,12.1044 10.8954,12.9999 12,12.9999 C13.1046,12.9999 14,12.1044 14,10.9999 C14,9.89531 13.1046,8.99988 12,8.99988 Z" id="形状" fill="#4f46e5"> </path> </g> </g> </g> </g></svg>
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