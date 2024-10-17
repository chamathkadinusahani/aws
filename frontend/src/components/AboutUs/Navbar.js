import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="OIP-removebg-preview.png" alt="ABC School" />
        <span>ABC School</span>
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Student Bio</li>
        <li>Payments</li>
        <li>Login</li>
      </ul>
      <div className="contact">
        <button>Contact Us</button>
        <span>(011) 2345 567</span>
      </div>
    </nav>
  );
}

export default Navbar;
