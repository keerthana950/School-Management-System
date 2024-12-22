import React, { useState } from 'react';
import './UploadResultCard.css';

const UploadResultCard = () => {
  const [studentName, setStudentName] = useState('');
  const [resultFile, setResultFile] = useState(null);

  const handleFileChange = (e) => {
    setResultFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate file upload logic
    if (studentName && resultFile) {
      alert(`Report card for ${studentName} uploaded successfully!`);
      // Reset form fields
      setStudentName('');
      setResultFile(null);
    } else {
      alert('Please select a student and a file to upload.');
    }
  };

  return (
    <div className="upload-result-card-container">
      <h2>Upload Result Card</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentName">Select Student:</label>
          <select
            id="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          >
            <option value="" disabled>Select a student</option>
            <option value="Keerthana">Keerthana</option>
            <option value="Rahul">Rahul</option>
            <option value="Priya">Priya</option>
            <option value="Aakash">Aakash</option>
            {/* Add more students as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="resultFile">Upload Result Card:</label>
          <input
            type="file"
            id="resultFile"
            accept=".pdf, .jpg, .jpeg, .png" // Accepting specific file types
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Upload</button>
      </form>
    </div>
  );
};

export default UploadResultCard;
