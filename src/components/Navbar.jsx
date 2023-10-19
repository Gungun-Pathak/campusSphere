import React, { useState } from 'react';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex items-center">
        <button className="mr-4" onClick={handleToggle}>
           
          
        </button>
        <img src={logo} alt="CampusSphere Logo" className="h-8" />
        <h1 className="text-xl font-bold ml-2">CampusSphere</h1>
      </div>
      <div className="flex items-center">
        <button className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
        <div className="absolute top-16 right-0 bg-white shadow-lg rounded-lg p-4">
          <ul>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 hover:bg-gray-200">
                Contact
              </a>
            </li>
          </ul>

        </div>
        
    </nav>
  );
};

export default Navbar;