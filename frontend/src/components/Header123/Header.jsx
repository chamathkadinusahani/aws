import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import WelcomePage from './components/welcomelogin/WelcomePage';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="head">
      <nav className="navi">
        
        <div className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`} onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navi-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link to="/Home" onClick={toggleMobileMenu}>Home</Link></li>
          <li><Link to="/AboutUs" onClick={toggleMobileMenu}>About Us</Link></li>
          <li><Link to="/Register88" onClick={toggleMobileMenu}>Register</Link></li>
          <li><Link to="/welcome" onClick={toggleMobileMenu}>Login</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;