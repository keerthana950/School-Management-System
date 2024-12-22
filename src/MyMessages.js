// MyMessages.js
import React, { useState } from 'react';
import './MyMessages.css';

const MyMessages = () => {
  const [selectedDate, setSelectedDate] = useState('');

  // Sample messages with dates
  const messages = [
    { text: "Exam schedule has been updated.", date: "2024-10-20" },
    { text: "PTA meeting is scheduled for next week.", date: "2024-10-18" },
    { text: "School will remain closed for Diwali.", date: "2024-11-01" },
    { text: "New assignment uploaded in your portal.", date: "2024-10-29" },
    { text: "Library books are due for return.", date: "2024-10-25" }
  ];

  // Handle date selection change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  // Filter messages based on selected date
  const filteredMessages = selectedDate
    ? messages.filter((message) => message.date === selectedDate)
    : messages;

  return (
    <div className="messages-container">
      <h2 className="messages-heading">My Messages</h2>
      <div className="filter-container">
        <label htmlFor="date-filter">Filter by Date:</label>
        <select id="date-filter" onChange={handleDateChange}>
          <option value="">All Dates</option>
          {[...new Set(messages.map((msg) => msg.date))].map((date) => (
            <option key={date} value={date}>{date}</option>
          ))}
        </select>
      </div>
      <div className="messages-list">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message, index) => (
            <div key={index} className="message-box">
              <p className="message-text">{message.text}</p>
              <p className="message-date">{message.date}</p>
            </div>
          ))
        ) : (
          <p className="no-messages">No messages for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default MyMessages;
