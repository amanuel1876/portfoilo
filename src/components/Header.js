import React from 'react';
import logo from './logo.jpg'; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header1">
        <img src={logo} alt="Logo" className="h-12 mr-2" /> {/* Use your logo image */}
      </div>
      <div>
      <nav className="bar">
      <a href='./#home' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">Home</a>
        <a href='./#about' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">About</a>
        <a href='./#services' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">Services</a>
        <a href='./#skills' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">Skills</a>
        <a href='./#project' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">Projects</a>
        <a href='./#contact' className="inline-block px-4 py-2 bg-white text-blue-500 rounded-lg mr-2">Contact</a>
      </nav>
      </div>
    </header>
  );
}

export default Header;
