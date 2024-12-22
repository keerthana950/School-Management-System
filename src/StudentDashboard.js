
// import React, { useState } from 'react';
// import './AdminDashboard.css'; 
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faUser, faBars, faSignOutAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons'; 
// import StudentHome from './StudentHome'; 
// import MyTimeTable from './MyTimeTable'; 
// import MyMessages from './MyMessages';
// import AssignmentUpload from './AssignmentUpload'; 
// import Result from './Result'; 
// import Complaint from './Complaint'; 
// import ReqForLeave from './ReqForLeave'; 

// function StudentDashboard() {
//   const [activeOption, setActiveOption] = useState('Home');
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleOptionClick = (option) => {
//     setActiveOption(option);
//   };

//   const handleLogout = () => {
//     navigate('/student-login'); 
//   };

//   return (
//     <div className="student-dashboard-container">
//       <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
//           <span className="admin-name">Student</span>
//         </div>
//         <ul className="menu-options">
//           <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> Home
//           </li>
//           <li onClick={() => handleOptionClick('MyTimeTable')} className={activeOption === 'MyTimeTable' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> My TimeTable
//           </li>
//           <li onClick={() => handleOptionClick('MyMessages')} className={activeOption === 'MyMessages' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> My Messages
//           </li>
//           <li onClick={() => handleOptionClick('AssignmentUpload')} className={activeOption === 'AssignmentUpload' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> Assignment Upload
//           </li>
//           <li onClick={() => handleOptionClick('Result')} className={activeOption === 'Result' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faFileAlt} /> Result
//           </li>
//           <li onClick={() => handleOptionClick('Complaint')} className={activeOption === 'Complaint' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> Complaint
//           </li>
//           <li onClick={() => handleOptionClick('ReqForLeave')} className={activeOption === 'ReqForLeave' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> Req for Leave 
//           </li>
//           <li onClick={handleLogout}>
//             <FontAwesomeIcon icon={faSignOutAlt} /> Logout
//           </li>
//         </ul>
//       </div>
//       <div className="content-area">
//         <div className="top-bar">
//           <FontAwesomeIcon icon={faUser} className="profile-icon" title="Profile" />
//         </div>

//         <div className="content-display">
//           {activeOption === 'Home' && <StudentHome />}
//           {activeOption === 'MyTimeTable' && <MyTimeTable />}
//           {activeOption === 'MyMessages' && <MyMessages />}
//           {activeOption === 'AssignmentUpload' && <AssignmentUpload />}
//           {activeOption === 'Result' && <Result />}
//           {activeOption === 'Complaint' && <Complaint />} 
//           {activeOption === 'ReqForLeave' && <ReqForLeave />} 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StudentDashboard;


import React, { useState } from 'react';
import './AdminDashboard.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBars, faSignOutAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons'; 
import StudentHome from './StudentHome'; 
import MyTimeTable from './MyTimeTable'; 
import MyMessages from './MyMessages';
import AssignmentUpload from './AssignmentUpload'; 
import Result from './Result'; 
import Complaint from './Complaint'; 
import ReqForLeave from './ReqForLeave';
import StudentProfile from './StudentProfile'; // Import the new component

function StudentDashboard() {
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
    navigate('/student-login'); 
  };

  return (
    <div className="student-dashboard-container">
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
          <span className="admin-name">Student</span>
        </div>
        <ul className="menu-options">
          <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li onClick={() => handleOptionClick('MyTimeTable')} className={activeOption === 'MyTimeTable' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> My TimeTable
          </li>
          <li onClick={() => handleOptionClick('MyMessages')} className={activeOption === 'MyMessages' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> My Messages
          </li>
          <li onClick={() => handleOptionClick('AssignmentUpload')} className={activeOption === 'AssignmentUpload' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Assignment Upload
          </li>
          <li onClick={() => handleOptionClick('Result')} className={activeOption === 'Result' ? 'active' : ''}>
            <FontAwesomeIcon icon={faFileAlt} /> Result
          </li>
          <li onClick={() => handleOptionClick('Complaint')} className={activeOption === 'Complaint' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Complaint
          </li>
          <li onClick={() => handleOptionClick('ReqForLeave')} className={activeOption === 'ReqForLeave' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Req for Leave
          </li>
          <li onClick={() => handleOptionClick('Profile')} className={activeOption === 'Profile' ? 'active' : ''}>
            <FontAwesomeIcon icon={faUser} /> Profile
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
          {activeOption === 'Home' && <StudentHome />}
          {activeOption === 'MyTimeTable' && <MyTimeTable />}
          {activeOption === 'MyMessages' && <MyMessages />}
          {activeOption === 'AssignmentUpload' && <AssignmentUpload />}
          {activeOption === 'Result' && <Result />}
          {activeOption === 'Complaint' && <Complaint />} 
          {activeOption === 'ReqForLeave' && <ReqForLeave />}
          {activeOption === 'Profile' && <StudentProfile />} {/* Render StudentProfile */}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
