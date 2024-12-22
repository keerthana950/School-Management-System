import React, { useState } from 'react';
import './ReqForLeave.css'; // Import a CSS file for styling

const ReqForLeave = () => {
  const [days, setDays] = useState('');
  const [reason, setReason] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request sent");
    // Here you can add functionality to send the data to the server if needed
    // Clear the form after submission
    setDays('');
    setReason('');
    setContactNumber('');
  };

  return (
    <div className="req-for-leave-container">
      <h1>Request For Leave</h1>
      <form onSubmit={handleSubmit} className="req-for-leave-form">
        <div className="form-group">
          <label htmlFor="days">Number of Days:</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Parent's Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ReqForLeave;
