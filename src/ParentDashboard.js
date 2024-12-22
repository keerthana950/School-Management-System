
import React, { useState } from 'react';
import './AdminDashboard.css'; 
import ParentHome from './ParentHome';
import ViewResult from './ViewResult';
import BookAppointment from './BookAppointment'; 

function ParentDashboard() {
  const [activeOption, setActiveOption] = useState('Home');

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="admin-name">Parent Dashboard</span>
        </div>
        <ul className="menu-options">
          <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
            Home
          </li>
          <li onClick={() => handleOptionClick('View Result')} className={activeOption === 'View Result' ? 'active' : ''}>
            View Result
          </li>
          <li onClick={() => handleOptionClick('Book Appointment')} className={activeOption === 'Book Appointment' ? 'active' : ''}>
            Book Appointment
          </li>
        </ul>
      </div>
      <div className="content-area">
        <div className="content-display">
          {activeOption === 'Home' && <ParentHome />}
          {activeOption === 'View Result' && <ViewResult />}
          {activeOption === 'Book Appointment' && <BookAppointment />}
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;


