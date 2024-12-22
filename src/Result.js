// import React from 'react';
// import './Result.css';

// function Result() {
//   const resultData = [
//     { examType: 'Midterm', subject: 'Math', marks: 45, maxMarks: 100, result: 'Average' },
//     { examType: 'Midterm', subject: 'Science', marks: 78, maxMarks: 100, result: 'Good' },
//     { examType: 'Midterm', subject: 'History', marks: 33, maxMarks: 100, result: 'Average' },
//     { examType: 'Midterm', subject: 'Geography', marks: 92, maxMarks: 100, result: 'Excellent' },
//     { examType: 'Midterm', subject: 'English', marks: 56, maxMarks: 100, result: 'Good' },
//   ];

//   return (
//     <div className="result-container">
//       <h2>Result</h2>
//       <table className="result-table">
//         <thead>
//           <tr>
//             <th>Exam Type</th>
//             <th>Subject Name</th>
//             <th>Marks Obtained</th>
//             <th>Maximum Marks</th>
//             <th>Result</th>
//           </tr>
//         </thead>
//         <tbody>
//           {resultData.map((item, index) => (
//             <tr key={index}>
//               <td>{item.examType}</td>
//               <td>{item.subject}</td>
//               <td className={item.marks < 50 ? 'low-marks' : ''}>{item.marks}</td>
//               <td>{item.maxMarks}</td>
//               <td>{item.result}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Result;
import React from 'react';
import './Result.css';
import LeftImage from 'C:/reactproject2/my-project/src/original_9.jpg';
import RightImage from 'C:/reactproject2/my-project/src/statisticsmarks.png'
function Result() {
  const resultData = [
    { examType: 'Midterm', subject: 'Math', marks: 45, maxMarks: 100, result: 'Average' },
    { examType: 'Midterm', subject: 'Science', marks: 78, maxMarks: 100, result: 'Good' },
    { examType: 'Midterm', subject: 'Social Science', marks: 33, maxMarks: 100, result: 'Average' },
    { examType: 'Midterm', subject: 'Hindi', marks: 92, maxMarks: 100, result: 'Excellent' },
    { examType: 'Midterm', subject: 'English', marks: 56, maxMarks: 100, result: 'Good' },
  ];

  return (
    <div className="result-container">
      <h2>Result</h2>
      <table className="result-table">
        <thead>
          <tr>
            <th>Exam Type</th>
            <th>Subject Name</th>
            <th>Marks Obtained</th>
            <th>Maximum Marks</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((item, index) => (
            <tr key={index}>
              <td>{item.examType}</td>
              <td>{item.subject}</td>
              <td className={item.marks < 50 ? 'low-marks' : ''}>{item.marks}</td>
              <td>{item.maxMarks}</td>
              <td>{item.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="image-container">
        <img src={LeftImage} alt="Left Side" className="left-image" />
        <img src={RightImage} alt="Right Side" className="right-image" />
      </div>
    </div>
  );
}

export default Result;

