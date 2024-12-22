
// import React from 'react';
// import { Link } from 'react-router-dom';
// import GoogleMap from './gMaps';
// import './Contact.css';

// function Contact() {
//   return (
//     <div className="contact-container">
//       <header className="school-header">
//         <div className="logo-section">
//           <img src="https://tse1.mm.bing.net/th?id=OIP.70nt6T8DNnH8mwOO15cUEwHaEw&pid=Api&P=0&h=220" alt="School Logo" className="school-logo" />
//           <h1 className="school-name">SchoolSphere</h1>
//         </div>
//         <nav className="navbar">
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/about" className="nav-link">About Us</Link>
//           <Link to="/contact" className="nav-link">Contact Us</Link>
//         </nav>
//       </header>
//       <div className="map-container">
//         <GoogleMap />
//       </div>
//       <div className="contact-content">
//         <div className="contact-info">
//           <h2>Contact Information</h2>
//           <p>Address: 123 School St, Education City</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Email: contact@schoolsphere.edu</p>
//           <div className="social-media">
//             <a href="#" className="social-icon">🌐</a>
//             <a href="#" className="social-icon">📘</a>
//             <a href="#" className="social-icon">🐦</a>
//             <a href="#" className="social-icon">📸</a>
//           </div>
//         </div>
//         <div className="contact-form">
//           <h2>Get in Touch</h2>
//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <input type="text" placeholder="Subject" />
//             <textarea placeholder="Your Message" rows="4" required></textarea>
//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMap from './gMaps';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevents the form from actually submitting
    alert("Thank you for contacting us! Our team will respond to you shortly.");
  };

  return (
    <div className="contact-container">
      <header className="school-header">
        <div className="logo-section">
          <img src="https://tse1.mm.bing.net/th?id=OIP.70nt6T8DNnH8mwOO15cUEwHaEw&pid=Api&P=0&h=220" alt="School Logo" className="school-logo" />
          <h1 className="school-name">SchoolSphere</h1>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
      </header>
      <div className="map-container">
        <GoogleMap />
      </div>
      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Address: 123 School St, Education City</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@schoolsphere.edu</p>
          <div className="social-media">
            <a href="#" className="social-icon">🌐</a>
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📸</a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
