
// import React, { useState } from 'react';
// import './AdminDashboard.css'; 

// function BookAppointment() {
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [reason, setReason] = useState('');
//   const [notes, setNotes] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Appointment booked for ${date} at ${time}.`);
//   };

//   return (
//     <div className="appointment-container">
//       <h2>Book an Appointment</h2>
//       <p>Please fill in the details below to book an appointment with the school admin.</p>

//       <form onSubmit={handleSubmit} className="appointment-form">
//         <label>
//           <span>Date:</span>
//           <input 
//             type="date" 
//             value={date} 
//             onChange={(e) => setDate(e.target.value)} 
//             required 
//           />
//         </label>

//         <label>
//           <span>Time:</span>
//           <input 
//             type="time" 
//             value={time} 
//             onChange={(e) => setTime(e.target.value)} 
//             required 
//           />
//         </label>

//         <label>
//           <span>Reason for Appointment:</span>
//           <select value={reason} onChange={(e) => setReason(e.target.value)} required>
//             <option value="">Select reason</option>
//             <option value="Performance Review">Performance Review</option>
//             <option value="Disciplinary Discussion">Disciplinary Discussion</option>
//             <option value="General Inquiry">General Inquiry</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>

//         <label>
//           <span>Additional Notes:</span>
//           <textarea 
//             value={notes} 
//             onChange={(e) => setNotes(e.target.value)} 
//             placeholder="Any additional information..." 
//           />
//         </label>

//         <button type="submit" className="appointment-submit-button">Book Appointment</button>
//       </form>
//     </div>
//   );
// }

// export default BookAppointment;

import React, { useState } from 'react';
import './AdminDashboard.css';

function BookAppointment() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${date} at ${time}.`);
  };

  return (
    <div className="appointment-container-wrapper">
      <div className="appointment-container">
        <h2>Book an Appointment</h2>
        <p>Please fill in the details below to book an appointment with the school admin.</p>
        
        <form onSubmit={handleSubmit} className="appointment-form">
          <label>
            <span>Date:</span>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </label>

          <label>
            <span>Time:</span>
            <input 
              type="time" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required 
            />
          </label>

          <label>
            <span>Reason for Appointment:</span>
            <select value={reason} onChange={(e) => setReason(e.target.value)} required>
              <option value="">Select reason</option>
              <option value="Performance Review">Performance Review</option>
              <option value="Disciplinary Discussion">Disciplinary Discussion</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            <span>Additional Notes:</span>
            <textarea 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              placeholder="Any additional information..." 
            />
          </label>

          <button type="submit" className="appointment-submit-button">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;

