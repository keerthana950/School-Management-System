import React, { useState } from 'react';
import './AddAssignment.css';

function AddAssignment() {
  const [assignmentName, setAssignmentName] = useState('');
  const [className, setClassName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert(`Assignment Added:\nName: ${assignmentName}\nClass: ${className}\nDue Date: ${dueDate}`);
    
    // Reset form fields
    setAssignmentName('');
    setClassName('');
    setDueDate('');
  };

  return (
    <div className="add-assignment-container">
      <h2>Add New Assignment</h2>
      <form onSubmit={handleSubmit} className="assignment-form">
        <div className="form-group">
          <label htmlFor="assignmentName">Assignment Name:</label>
          <input
            type="text"
            id="assignmentName"
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="className">Class Name:</label>
          <input
            type="text"
            id="className"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Assignment</button>
      </form>
    </div>
  );
}

export default AddAssignment;
