import React from 'react';
import './StudentProfile.css';

function StudentProfile() {
  const student = {
    name: 'Keerthana',
    studentId: '1228001',
    className: 'Class 2A',
    attendance: '85%',
    average: 'B+'
  };

  return (
    <div className="student-profile-container">
      <h1 className="profile-heading">My Profile</h1>
      <div className="profile-details">
        <div className="profile-item">
          <span className="label">Name:</span>
          <span className="value">{student.name}</span>
        </div>
        <div className="profile-item">
          <span className="label">Student ID:</span>
          <span className="value">{student.studentId}</span>
        </div>
        <div className="profile-item">
          <span className="label">Class:</span>
          <span className="value">{student.className}</span>
        </div>
        <div className="profile-item">
          <span className="label">Current Attendance:</span>
          <span className="value">{student.attendance}</span>
        </div>
        <div className="profile-item">
          <span className="label">Current Average:</span>
          <span className="value">{student.average}</span>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
