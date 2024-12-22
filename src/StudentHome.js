
// import React from 'react';
// import './StudentHome.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faQuestionCircle, faClipboardList, faClipboardCheck, faFutbol } from '@fortawesome/free-solid-svg-icons';
// const StudentHome = () => {
//   return (
//     <div className="student-home-container">
//       <div className="boxes-container">
//         <div className="box" style={{ backgroundColor: '#ffcccb' }}>
//           <FontAwesomeIcon icon={faQuestionCircle} className="box-icon" />
//           <p>Open Queries</p>
//         </div>
//         <div className="box" style={{ backgroundColor: '#add8e6' }}>
//           <FontAwesomeIcon icon={faClipboardList} className="box-icon" />
//           <p>Assignments</p>
//         </div>
//         <div className="box" style={{ backgroundColor: '#90ee90' }}>
//           <FontAwesomeIcon icon={faClipboardCheck} className="box-icon" />
//           <p>Projects</p>
//         </div>
//         <div className="box" style={{ backgroundColor: '#ffffe0' }}>
//           <FontAwesomeIcon icon={faFutbol} className="box-icon" />
//           <p>Sports</p>
//         </div>
//       </div>
//       <div className="profile-card">
//         <img src="https://tse4.mm.bing.net/th?id=OIP.Yaficbwe3N2MjD2Sg0J9OgHaHa&pid=Api&P=0&h=220" alt="Profile" className="profile-photo" />
//         <p>Name: Keerthana</p>
//         <p>Student ID: s001</p>
//         <p>Class: Class2A</p>
//       </div>
//     </div>
//   );
// };

// export default StudentHome;
import React from 'react';
import './StudentHome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faClipboardList, faClipboardCheck, faFutbol } from '@fortawesome/free-solid-svg-icons';
import Progress from 'C:/reactproject2/my-project/src/precentage.png';
import Percentage from 'C:/reactproject2/my-project/src/progress.png'
const StudentHome = () => {
  return (
    <div className="student-home-container">
      <div className="boxes-container">
        <div className="box" style={{ backgroundColor: '#ffcccb' }}>
          <FontAwesomeIcon icon={faQuestionCircle} className="box-icon" />
          <p>Open Queries</p>
        </div>
        <div className="box" style={{ backgroundColor: '#add8e6' }}>
          <FontAwesomeIcon icon={faClipboardList} className="box-icon" />
          <p>Assignments</p>
        </div>
        <div className="box" style={{ backgroundColor: '#90ee90' }}>
          <FontAwesomeIcon icon={faClipboardCheck} className="box-icon" />
          <p>Projects</p>
        </div>
        <div className="box" style={{ backgroundColor: '#ffffe0' }}>
          <FontAwesomeIcon icon={faFutbol} className="box-icon" />
          <p>Sports</p>
        </div>
      </div>
      {/* <div className="profile-card">
        <img src="https://tse4.mm.bing.net/th?id=OIP.Yaficbwe3N2MjD2Sg0J9OgHaHa&pid=Api&P=0&h=220" alt="Profile" className="profile-photo" />
        <p>Name: Keerthana</p>
        <p>Student ID: s001</p>
        <p>Class: Class2A</p>
      </div> */}
      <div className="images-section">
        <div className="image-container">
          <h4>Students Progress</h4>
          <img src={Progress} alt="Students Progress" className="image" />
        </div>
        <div className="image-container">
          <img src={Percentage} alt="Another Image" className="image" />
        </div>
      </div>
    </div>
  );
};

export default StudentHome;

