
// import React from 'react';

// function ParentHome() {
//   return (
//     <div className="home-content">
//       <h2>Welcome, Parent!</h2>
//       <p>This is the Parent Home Page.</p>
//     </div>
//   );
// }
// export default ParentHome;
// ParentHome.js
import React from 'react';
import './ParentHome.css'; // New CSS file for styling

function ParentHome() {
  return (
    <div className="parent-home-container">
      {/* Child Profile Section */}
      <div className="child-profile-card">
        <img src="profile-photo-url" alt="Child Profile" className="profile-photo" />
        <h2>Name: Ayaan</h2>
        <p>Grade: 5</p>
        <p>Class: 5A</p>
        <p>Student ID: S12345</p>
      </div>

      {/* Performance Summary Section */}
      <div className="performance-summary">
        <h3>Performance Summary</h3>
        <div className="summary-box">
          <div className="summary-item">
            <h4>Attendance</h4>
            <p>95%</p>
          </div>
          <div className="summary-item">
            <h4>Assignments</h4>
            <p>Completed: 8/10</p>
          </div>
          <div className="summary-item">
            <h4>Grades</h4>
            <p>Average: A</p>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="notifications-section">
        <h3>Notifications</h3>
        <ul>
          <li>Parent-teacher meeting on Nov 5th</li>
          <li>Sports Day on Nov 10th</li>
          <li>Report cards available on Dec 1st</li>
        </ul>
      </div>

      {/* Quick Links Section */}
      {/* <div className="quick-links">
        <h3>Quick Links</h3>
        <button className="quick-link-btn">View Report Card</button>
        <button className="quick-link-btn">Message Teachers</button>
        <button className="quick-link-btn">View Attendance</button>
      </div> */}
    </div>
  );
}

export default ParentHome;

