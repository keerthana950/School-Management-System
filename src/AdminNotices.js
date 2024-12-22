import React, { useState } from 'react';
import './AdminNotices.css';

function AdminNotices() {
  const [notices, setNotices] = useState([
    { text: 'Workshop "Science And Technology will be held soon"', date: 'Dated: 28 Oct 2024' },
    { text: 'Annual Sports Day will be conducted next month', date: 'Dated: 15 Oct 2024' },
  ]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [newNotice, setNewNotice] = useState({ text: '', date: '' });

  const handleAddNoticeClick = () => {
    setFormVisible(true);
  };

  const handleFormClose = () => {
    setFormVisible(false);
    setNewNotice({ text: '', date: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNotice({ ...newNotice, [name]: value });
  };

  const handleAddNewNotice = () => {
    if (newNotice.text && newNotice.date) {
      setNotices([...notices, { text: newNotice.text, date: `Dated: ${newNotice.date}` }]);
      handleFormClose(); // Close form and reset input fields
    }
  };

  return (
    <div className="admin-notices-container">
      <div className="header">
        <h2>Notices</h2>
        <button className="add-notice-button" onClick={handleAddNoticeClick}>Add a Notice</button>
      </div>

      <div className="notices-grid">
        {notices.map((notice, index) => (
          <div key={index} className="notice-card">
            <p>{notice.text}</p>
            <p className="notice-date">{notice.date}</p>
          </div>
        ))}
      </div>

      {isFormVisible && (
        <div className="notice-form-overlay">
          <div className="notice-form">
            <h3>Add a New Notice</h3>
            <input
              type="text"
              name="text"
              placeholder="Enter notice text"
              value={newNotice.text}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="date"
              value={newNotice.date}
              onChange={handleInputChange}
            />
            <button className="submit-button" onClick={handleAddNewNotice}>Add Notice</button>
            <button className="close-button" onClick={handleFormClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminNotices;
