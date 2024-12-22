import React from 'react';
import './RequestForLeave.css';

const RequestForLeave = () => {
  return (
    <div className="request-for-leave-container">
      <h2>Request for Leave</h2>
      <form>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="reason">Reason:</label>
          <textarea id="reason" name="reason" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
    </div>
  );
};

export default RequestForLeave;
