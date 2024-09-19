import React, { useContext, useState } from 'react';
import { NavContext } from '../context/NavContext';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const { activePage, setActivePage } = useContext(NavContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Update active page based on current route
  React.useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActivePage(1);
        break;
      case '/about':
        setActivePage(2);
        break;
      case '/services':
        setActivePage(3);
        break;
      case '/contactus':
        setActivePage(4);
        break;
      default:
        setActivePage(1);
    }
  }, [location, setActivePage]);

  return (
    <nav className="bg-gray-900 text-white p-4 flex items-center justify-between relative">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logo} alt="Taxi App Logo" className="h-10" />
        <span className="ml-2 text-2xl font-bold">Taxi App</span>
      </div>

      {/* Mobile Burger Icon */}
      <div className="md:hidden z-50" onClick={toggleMobileMenu}>
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`fixed md:static top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-transform md:transition-none transform 
        ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:translate-y-0 md:flex md:items-center z-40`}
        style={{ height: isMobileMenuOpen ? '100vh' : 'auto' }} // Full-screen height for mobile menu
      >
        <li className={`p-4 ${activePage === 1 ? 'text-yellow-500' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        </li>
        <li className={`p-4 ${activePage === 2 ? 'text-yellow-500' : ''}`}>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </li>
        <li className={`p-4 ${activePage === 3 ? 'text-yellow-500' : ''}`}>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
        </li>
        <li className={`p-4 ${activePage === 4 ? 'text-yellow-500' : ''}`}>
          <Link to="/contactus" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
