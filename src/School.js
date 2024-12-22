
import React from 'react';
import { Link } from 'react-router-dom';
import './School.css';
import Slideshow from './Slideshow';
function School() {
  return (
    <div className="school-container">
      <header className="school-header">
        <div className="logo-section">
          <img src="https://tse1.mm.bing.net/th?id=OIP.70nt6T8DNnH8mwOO15cUEwHaEw&pid=Api&P=0&h=220" alt="School Logo" className="school-logo" />
          <h1 className="school-name">SchoolSphere</h1>
        </div>
        <nav className="navbar">
          <span className="nav-link">Home</span> 
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <Slideshow />
    </div>
  );
}
export default School;

