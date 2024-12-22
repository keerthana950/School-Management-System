
import React from 'react';
import './AdminHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import dashboardImage from 'C:/reactproject2/my-project/src/Screenshot 2024-10-28 155427.png';
const AdminHome = () => {
  return (
    <div className="admin-home-container">
      <div className="info-boxes">
        <div className="info-box">
          <FontAwesomeIcon icon={faUserGraduate} className="icon" />
          <p>Total students - 2000</p>
        </div>
        <div className="info-box">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="icon" />
          <p>Total teachers - 90</p>
        </div>
        <div className="info-box">
          <FontAwesomeIcon icon={faDollarSign} className="icon" />
          <p>Fee collection - 70K</p>
        </div>
      </div>

      <h2 className="announcements-heading">Today's Announcements</h2>
      <div className="announcements-box">
        <p>1) Summative Assessment Results got declared, Students can check them in their Dashboard.</p>
        <p>2) Workshop "Science Lab Spectacle" will be starting after two days, all the students who registered for this are advised to check their dashboard for further details.</p>
      </div>

      <div className="image-container">
        <img src={dashboardImage} alt="Dashboard" style={{ maxWidth: '70%', height: 'auto', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

export default AdminHome;

