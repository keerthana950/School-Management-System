
// import React, { useState } from 'react';
// import './AdminDashboard.css'; 
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBars, faUser, faClipboardCheck, faIdBadge } from '@fortawesome/free-solid-svg-icons';
// import TeacherHome from './TeacherHome'; 
// import MarkAttendance from './MarkAttendance';
// import AddAssignment from './AddAssignment'; 
// import UploadResultCard from './UploadResultCard';
// import TeacherProfile from './TeacherProfile'; 

// function TeacherDashboard() {
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
//     navigate('/teacher-login');
//   };

//   return (
//     <div className="admin-dashboard-container">
//       <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
//           <span className="admin-name">Teacher</span>
//         </div>
//         <ul className="menu-options">
//           <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faHome} /> Home
//           </li>
//           <li onClick={() => handleOptionClick('MarkAttendance')} className={activeOption === 'MarkAttendance' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Mark Attendance
//           </li>
//           <li onClick={() => handleOptionClick('AddAssignment')} className={activeOption === 'AddAssignment' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Assignment Add
//           </li>
//           <li onClick={() => handleOptionClick('UploadResultCard')} className={activeOption === 'UploadResultCard' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Upload Result Card
//           </li>
//           <li onClick={() => handleOptionClick('Profile')} className={activeOption === 'Profile' ? 'active' : ''}>
//             <FontAwesomeIcon icon={faIdBadge} className="menu-icon" /> Profile
//           </li>
//           <li onClick={handleLogout}>
//             <FontAwesomeIcon icon={faUser} /> Logout
//           </li>
//         </ul>
//       </div>
//       <div className="content-area">
//         <div className="top-bar">
//           <FontAwesomeIcon icon={faUser} className="profile-icon" title="Profile" />
//         </div>
//         <div className="content-display">
//           {activeOption === 'Home' && <TeacherHome />}
//           {activeOption === 'MarkAttendance' && <MarkAttendance />}
//           {activeOption === 'AddAssignment' && <AddAssignment />}
//           {activeOption === 'UploadResultCard' && <UploadResultCard />}
//           {activeOption === 'Profile' && <TeacherProfile />} 
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TeacherDashboard;
import React, { useState } from 'react';
import './AdminDashboard.css'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faUser, faClipboardCheck, faIdBadge, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import TeacherHome from './TeacherHome'; 
import MarkAttendance from './MarkAttendance';
import AddAssignment from './AddAssignment'; 
import UploadResultCard from './UploadResultCard';
import TeacherProfile from './TeacherProfile'; 
import RequestForLeave from './RequestForLeave'; // Importing the new component

function TeacherDashboard() {
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
    navigate('/teacher-login');
  };

  return (
    <div className="admin-dashboard-container">
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />
          <span className="admin-name">Teacher</span>
        </div>
        <ul className="menu-options">
          <li onClick={() => handleOptionClick('Home')} className={activeOption === 'Home' ? 'active' : ''}>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li onClick={() => handleOptionClick('MarkAttendance')} className={activeOption === 'MarkAttendance' ? 'active' : ''}>
            <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Mark Attendance
          </li>
          <li onClick={() => handleOptionClick('AddAssignment')} className={activeOption === 'AddAssignment' ? 'active' : ''}>
            <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Assignment Add
          </li>
          <li onClick={() => handleOptionClick('UploadResultCard')} className={activeOption === 'UploadResultCard' ? 'active' : ''}>
            <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" /> Upload Result Card
          </li>
          <li onClick={() => handleOptionClick('ReqForLeave')} className={activeOption === 'ReqForLeave' ? 'active' : ''}>
            <FontAwesomeIcon icon={faFileAlt} className="menu-icon" /> Req for Leave
          </li>
          <li onClick={() => handleOptionClick('Profile')} className={activeOption === 'Profile' ? 'active' : ''}>
            <FontAwesomeIcon icon={faIdBadge} className="menu-icon" /> Profile
          </li>
          <li onClick={handleLogout}>
            <FontAwesomeIcon icon={faUser} /> Logout
          </li>
        </ul>
      </div>
      <div className="content-area">
        <div className="top-bar">
          <FontAwesomeIcon icon={faUser} className="profile-icon" title="Profile" />
        </div>
        <div className="content-display">
          {activeOption === 'Home' && <TeacherHome />}
          {activeOption === 'MarkAttendance' && <MarkAttendance />}
          {activeOption === 'AddAssignment' && <AddAssignment />}
          {activeOption === 'UploadResultCard' && <UploadResultCard />}
          {activeOption === 'ReqForLeave' && <RequestForLeave />}
          {activeOption === 'Profile' && <TeacherProfile />} 
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;

