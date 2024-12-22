
import React, { useState } from 'react';
import './MarkAttendance.css';

const MarkAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState([]);
  const studentsData = [
    { name: 'John Doe', studentId: '1228001', className: 'Class 1' },
    { name: 'Jane Smith', studentId: '1221013', className: 'Class 1' },
    { name: 'Alex Brown', studentId: '1221364', className: 'Class 1' },
    { name: 'Emily White', studentId: '1220145', className: 'Class 1' },
    { name: 'Michael Green', studentId: '122355', className: 'Class 1' },
    { name: 'Sara Black', studentId: '1221104', className: 'Class 1' },
    { name: 'James Red', studentId: '1226628', className: 'Class 1' },
    { name: 'Linda Blue', studentId: '1221030', className: 'Class 1' },
  ];
  const toggleAttendance = (index) => {
    const newAttendance = [...attendance];
    newAttendance[index].present = !newAttendance[index].present;
    setAttendance(newAttendance);
  };
  const handleClassChange = (e) => {
    const className = e.target.value;
    setSelectedClass(className);
    if (className) {
      const updatedAttendance = studentsData.map((student) => ({
        ...student,
        present: false, 
      }));
      setAttendance(updatedAttendance);
    } else {
      setAttendance([]); 
    }
  };

  const handleSubmit = () => {
    alert('Attendance marked');
    const resetAttendance = attendance.map((student) => ({
      ...student,
      present: false, 
    }));
    setAttendance(resetAttendance);
    setSelectedClass(''); 
  };

  return (
    <div className="mark-attendance-container">
      <h2>Mark Attendance</h2>
      <label htmlFor="class-select">Select Class:</label>
      <select id="class-select" value={selectedClass} onChange={handleClassChange}>
        <option value="">--Select a Class--</option>
        <option value="Class 1">Class 1</option>
        <option value="Class 2">Class 2</option>
        <option value="Class 3">Class 3</option>
      </select>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Class</th>
            <th>Present/Absent</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student, index) => (
            <tr key={index}>
              <td>{student.name || studentsData[index].name}</td>
              <td>{student.studentId || studentsData[index].studentId}</td>
              <td>{student.className || studentsData[index].className}</td>
              <td
                className={student.present ? 'present' : 'absent'}
                onClick={() => toggleAttendance(index)}
              >
                {student.present ? 'Present' : 'Absent'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="submit-button" onClick={handleSubmit}>
        Submit Attendance
      </button>
    </div>
  );
};

export default MarkAttendance;

