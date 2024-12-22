// import React from 'react';
// import './TeacherProfile.css';

// const TeacherProfile = () => {
//   return (
//     <div className="teacher-profile-container">
//       <h2>Teacher Profile</h2>
//       <div className="profile-details">
//         <p><strong>Name:</strong> John Doe</p>
//         <p><strong>Email:</strong> john.doe@school.com</p>
//         <p><strong>Subject:</strong> Mathematics</p>
//       </div>
//     </div>
//   );
// };

// export default TeacherProfile;
import React from 'react';
import './TeacherProfile.css';

const TeacherProfile = () => {
  return (
    <div className="teacher-profile-container">
      <h2>Teacher Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Teacher ID:</strong> T12345</p> {/* Added Teacher ID */}
        <p><strong>Email:</strong> john.doe@school.com</p>
        <p><strong>Subject:</strong> Mathematics</p>
      </div>
    </div>
  );
};

export default TeacherProfile;

