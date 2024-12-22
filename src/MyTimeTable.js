// import React from 'react';
// import './MyTimeTable.css'; 
// function MyTimeTable() {
//   const timetableData = [
//     { day: 'Monday', class: 'Math', time: '9:00 AM - 10:00 AM' },
//     { day: 'Monday', class: 'Science', time: '10:15 AM - 11:15 AM' },
//     { day: 'Tuesday', class: 'English', time: '9:00 AM - 10:00 AM' },
//     { day: 'Tuesday', class: 'History', time: '10:15 AM - 11:15 AM' },
//     { day: 'Wednesday', class: 'Art', time: '9:00 AM - 10:00 AM' },
//     { day: 'Wednesday', class: 'Physical Education', time: '10:15 AM - 11:15 AM' }
//   ];

//   return (
//     <div className="timetable-container">
//       <h2>My Time Table</h2>
//       <table className="timetable">
//         <thead>
//           <tr>
//             <th>Day</th>
//             <th>Class</th>
//             <th>Time</th>
//           </tr>
//         </thead>
//         <tbody>
//           {timetableData.map((entry, index) => (
//             <tr key={index}>
//               <td>{entry.day}</td>
//               <td>{entry.class}</td>
//               <td>{entry.time}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default MyTimeTable;
import React from 'react';
import './MyTimeTable.css'; // Make sure to style it accordingly

function MyTimeTable() {
  // Sample timetable data
  const timetableData = [
    { time: '8:00 AM - 9:00 AM', mon: 'Math', tue: 'English', wed: 'Science', thu: 'History', fri: 'Geography', sat: 'Physical Ed.' },
    { time: '9:00 AM - 10:00 AM', mon: 'Physics', tue: 'Chemistry', wed: 'Biology', thu: 'Art', fri: 'Computer Science', sat: 'Music' },
    { time: '10:00 AM - 11:00 AM', mon: 'Literature', tue: 'Math', wed: 'English', thu: 'Math', fri: 'Physics', sat: 'Chemistry' },
    { time: '11:00 AM - 12:00 PM', mon: 'Geography', tue: 'History', wed: 'Math', thu: 'Science', fri: 'English', sat: 'Art' },
    { time: '12:00 PM - 1:00 PM', mon: 'Biology', tue: 'Computer Science', wed: 'Physical Ed.', thu: 'Chemistry', fri: 'History', sat: 'Math' },
    { time: '1:00 PM - 2:00 PM', mon: 'Chemistry', tue: 'Geography', wed: 'English', thu: 'Physics', fri: 'Literature', sat: 'Science' },
    { time: '2:00 PM - 3:00 PM', mon: 'History', tue: 'Art', wed: 'Math', thu: 'Computer Science', fri: 'Biology', sat: 'Physical Ed.' },
    { time: '3:00 PM - 4:00 PM', mon: 'English', tue: 'Science', wed: 'History', thu: 'Math', fri: 'Geography', sat: 'Chemistry' },
  ];

  return (
    <div className="timetable-container">
      <h2>My Time Table</h2>
      <table className="timetable">
        <thead>
          <tr>
            <th>Time</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {timetableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.time}</td>
              <td>{entry.mon}</td>
              <td>{entry.tue}</td>
              <td>{entry.wed}</td>
              <td>{entry.thu}</td>
              <td>{entry.fri}</td>
              <td>{entry.sat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyTimeTable;
