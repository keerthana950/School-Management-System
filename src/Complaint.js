import React, { useState } from 'react';
import './Complaint.css';
const Complaint = () => {
  const [complaintType, setComplaintType] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [proof, setProof] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been forwarded to the administrative office. They will contact you shortly.");
    setComplaintType('');
    setContactNumber('');
    setEmail('');
    setProof('');
  };
  return (
    <div className="complaint-container">
      <h2>Lodge a Complaint</h2>
      <form onSubmit={handleSubmit} className="complaint-form">
        <div className="form-group">
          <label>Type of the Complaint:</label>
          <input
            type="text"
            value={complaintType}
            onChange={(e) => setComplaintType(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Proof (if any):</label>
          <input
            type="file"
            onChange={(e) => setProof(e.target.files[0])}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};
export default Complaint;
