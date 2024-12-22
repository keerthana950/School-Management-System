import React, { useState } from 'react';
import './AssignmentUpload.css';

function AssignmentUpload() {
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [section, setSection] = useState('');
  const [file, setFile] = useState(null);

  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleTeacherChange = (e) => setTeacher(e.target.value);
  const handleSectionChange = (e) => setSection(e.target.value);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && teacher && section && file) {
      alert("Assignment successfully uploaded!");
      // Reset form fields if needed
      setSubject('');
      setTeacher('');
      setSection('');
      setFile(null);
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className="assignment-upload-container">
      <h2>Upload Assignment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject">Select Subject:</label>
          <select id="subject" value={subject} onChange={handleSubjectChange} required>
            <option value="">--Select Subject--</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
            <option value="English">English</option>
            <option value="Physics">Physics</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="teacher">Select Teacher:</label>
          <select id="teacher" value={teacher} onChange={handleTeacherChange} required>
            <option value="">--Select Teacher--</option>
            <option value="Mr. Smith">Mr. Smith</option>
            <option value="Ms. Johnson">Ms. Johnson</option>
            <option value="Mr. Brown">Mr. Brown</option>
            <option value="Mrs. Wilson">Mrs. Wilson</option>
            <option value="Mr. Lee">Mr. Lee</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="section">Section:</label>
          <input
            type="text"
            id="section"
            value={section}
            onChange={handleSectionChange}
            placeholder="Enter Section"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="file">Upload File:</label>
          <input type="file" id="file" onChange={handleFileChange} required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AssignmentUpload;
