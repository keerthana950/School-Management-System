
import React, { useState } from 'react';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser,faChalkboardTeacher,faBars, faGraduationCap, faMoneyBillWave,faHome,faUserSecret,faUserGraduate,faClipboard,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AdminClasses from './AdminClasses';  
import AdminHome from './AdminHome'; 
import AdminTeachers from './AdminTeachers'; 
import AdminStudents from './AdminStudents'; 
import AdminNotices from './AdminNotices'; 
function AdminDashboard() {
  const [activeOption, setActiveOption] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const handleLogout = () => {
    navigate('/admin-login');
  };
  return (
    <div className="admin-dashboard-container">
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
          <span className="admin-name">Admin</span>
        </div>
        <ul className="menu-options">
          <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li onClick={() => handleOptionClick('Classes')} className={activeOption === 'Classes' ? 'active' : ''}>
            <FontAwesomeIcon icon={faChalkboardTeacher} /> Classes
          </li>
          <li onClick={() => handleOptionClick('Teachers')} className={activeOption === 'Teachers' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUsers} /> Teachers
          </li>
          <li onClick={() => handleOptionClick('Students')} className={activeOption === 'Students' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUserGraduate} /> Students
          </li>
          <li onClick={() => handleOptionClick('Notices')} className={activeOption === 'Notices' ? 'active' : ''}>
            <FontAwesomeIcon icon={faClipboard} /> Notices
          </li>
          <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </li>
        </ul>
      </div>
      <div className="content-area">
        <div className="top-bar">
          <FontAwesomeIcon icon={faUser} className="profile-icon" title="Profile" />
        </div>
        <div className="content-display">
          {activeOption === 'Home' && <AdminHome />}
          {activeOption === 'Classes' && <AdminClasses />}
          {activeOption === 'Teachers' && <AdminTeachers />}
          {activeOption === 'Students' && <AdminStudents />} {/* Render AdminStudents when Students is selected */}
          {activeOption === 'Notices' && <AdminNotices />} {/* Render AdminNotices when Notices is selected */}
        </div>
      </div>
    </div>
  );
}
export default AdminDashboard;

