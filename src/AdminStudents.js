import React, { useState } from 'react';
import './AdminStudents.css';

const AdminStudents = () => {
  const [students, setStudents] = useState([
    { name: 'John Doe', studentId: '1221001', className: '10A', phone: '9461537662' },
    { name: 'Jane Smith', studentId: '1220341', className: '10B', phone: '93461985653' },
    { name: 'Emily Johnson', studentId: '1220971', className: '10C', phone: '9319209556' }
  ]);

  const [formVisible, setFormVisible] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', studentId: '', className: '', phone: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', studentId: '', className: '', phone: '' });
    setFormVisible(false);
  };

  return (
    <div>
      <h1 style={{ float: 'left' }}>Students</h1>
      <button onClick={() => setFormVisible(true)} style={{ float: 'right' }}>Add Student</button>
      <div style={{ clear: 'both' }}></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Student ID</th>
            <th>Class Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{student.name}</td>
              <td>{student.studentId}</td>
              <td>{student.className}</td>
              <td>{student.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {formVisible && (
        <div className="form-popup">
          <h2>Add Student</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newStudent.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="studentId"
            placeholder="Student ID"
            value={newStudent.studentId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="className"
            placeholder="Class"
            value={newStudent.className}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={newStudent.phone}
            onChange={handleInputChange}
          />
          <button onClick={handleAddStudent}>Add Student</button>
          <button onClick={() => setFormVisible(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default AdminStudents;
