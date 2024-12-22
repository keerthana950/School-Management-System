// import React from 'react';

// function TeacherHome() {
//   return (
//     <div className="home-content">
//       <h2>Welcome to the Teacher Dashboard Home</h2>
//       <p>This is the Teacher's main dashboard view.</p>
//     </div>
//   );
// }

// export default TeacherHome;
import React from 'react';
import './TeacherHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUserGraduate, faClipboard, faBell } from '@fortawesome/free-solid-svg-icons';

function TeacherHome() {
  return (
    <div className="teacher-home-container">
      
      {/* Quick Stats Section */}
      <div className="quick-stats">
        <div className="stat-box">
          <FontAwesomeIcon icon={faBook} className="stat-icon" />
          <p>Total Classes</p>
          <h3>5</h3>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faUserGraduate} className="stat-icon" />
          <p>Students Enrolled</p>
          <h3>120</h3>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faClipboard} className="stat-icon" />
          <p>Pending Assignments</p>
          <h3>15</h3>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faBell} className="stat-icon" />
          <p>Notifications</p>
          <h3>3</h3>
        </div>
      </div>

      {/* Upcoming Classes Section */}
      <div className="upcoming-classes">
        <h2>Upcoming Classes</h2>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Time/Date</th>
              <th>Room</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class 10A</td>
              <td>10:00 AM, 02 Nov</td>
              <td>Room 201</td>
              <td>Mathematics</td>
            </tr>
            <tr>
              <td>Class 8B</td>
              <td>12:00 PM, 02 Nov</td>
              <td>Room 104</td>
              <td>Science</td>
            </tr>
            <tr>
              <td>Class 9A</td>
              <td>02:00 PM, 02 Nov</td>
              <td>Room 305</td>
              <td>History</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Announcements Section */}
      <div className="announcements">
        <h2>Announcements</h2>
        <div className="announcement">
          <p><strong>Annual Day</strong> - The school’s annual day celebration is on 20th Nov. Teachers are requested to coordinate activities.</p>
        </div>
        <div className="announcement">
          <p><strong>Exam Preparation</strong> - Ensure that students are prepared for upcoming midterms beginning on 15th Nov.</p>
        </div>
      </div>

      {/* Student Queries Section */}
      <div className="student-queries">
        <h2>Student Queries</h2>
        <div className="query">
          <p><strong>John Doe (Class 8B)</strong> - Needs clarification on the recent science assignment.</p>
        </div>
        <div className="query">
          <p><strong>Jane Smith (Class 10A)</strong> - Asked for additional resources for the math class.</p>
        </div>
      </div>

    </div>
  );
}

export default TeacherHome;

