
// import React from 'react';

// function ViewResult() {
//   return (
//     <div>
//       <h2>Student Result</h2>
//       <p>This section displays the student's results.</p>
//     </div>
//   );
// }

// export default ViewResult;
import React from 'react';
import './AdminDashboard.css'; // Reusing AdminDashboard.css for consistent styling

function ViewResult() {
  const studentInfo = {
    name: 'John Doe',
    studentId: 'S001',
    class: 'Grade 5',
  };

  const subjects = [
    { subject: 'Mathematics', grade: 'A', remarks: 'Excellent' },
    { subject: 'Science', grade: 'B+', remarks: 'Very Good' },
    { subject: 'English', grade: 'A-', remarks: 'Good' },
    { subject: 'History', grade: 'B', remarks: 'Satisfactory' },
    { subject: 'Physical Education', grade: 'A', remarks: 'Outstanding' },
  ];

  return (
    <div className="view-result-container">
      {/* Student Header */}
      <div className="student-info">
        <h2>Student Result</h2>
        <p><strong>Name:</strong> {studentInfo.name}</p>
        <p><strong>Student ID:</strong> {studentInfo.studentId}</p>
        <p><strong>Class:</strong> {studentInfo.class}</p>
      </div>

      {/* Result Table */}
      <table className="result-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Grade</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.subject}</td>
              <td>{subject.grade}</td>
              <td>{subject.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Performance Summary */}
      <div className="performance-summary">
        <h3>Overall Performance</h3>
        <p>John has shown excellent performance in core subjects and actively participates in physical activities. Keep up the great work!</p>
      </div>
    </div>
  );
}

export default ViewResult;

