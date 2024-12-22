
// import React, { useState } from 'react';
// import './AdminTeachers.css';

// function AdminTeachers() {
//   const [teachers, setTeachers] = useState([
//     { name: 'John Doe', id: 'T001', subject: 'Mathematics', className: 'Class A', phone: '123-456-7890' },
//     { name: 'Jane Smith', id: 'T002', subject: 'Science', className: 'Class B', phone: '098-765-4321' },
//     { name: 'Alice Johnson', id: 'T003', subject: 'History', className: 'Class C', phone: '456-789-0123' },
//   ]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [newTeacher, setNewTeacher] = useState({
//     name: '',
//     id: '',
//     subject: '',
//     className: '',
//   });

//   const handleAddTeacherClick = () => {
//     setFormVisible(!formVisible);
//   };

//   const handleChange = (e) => {
//     setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setTeachers([...teachers, { ...newTeacher, phone: 'N/A' }]);
//     setNewTeacher({ name: '', id: '', subject: '', className: '' });
//     setFormVisible(false);
//   };

//   return (
//     <div className="admin-teachers-container">
//       <div className="header">
//         <h1>Teachers</h1>
//         <button onClick={handleAddTeacherClick}>{formVisible ? 'Cancel' : 'Add Teacher'}</button>
//       </div>

//       {formVisible && (
//         <div className="modal-overlay" onClick={() => setFormVisible(false)}>
//           <div className="teacher-form-modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Add New Teacher</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name of the Teacher"
//                 value={newTeacher.name}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="id"
//                 placeholder="Teacher ID"
//                 value={newTeacher.id}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 value={newTeacher.subject}
//                 onChange={handleChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="className"
//                 placeholder="Class Name"
//                 value={newTeacher.className}
//                 onChange={handleChange}
//                 required
//               />
//               <button type="submit">Add Teacher</button>
//             </form>
//           </div>
//         </div>
//       )}

//       <table className="teachers-table">
//         <thead>
//           <tr>
//             <th>Teacher Name</th>
//             <th>Teacher ID</th>
//             <th>Subjects</th>
//             <th>Classes</th>
//             <th>Phone Number</th>
//           </tr>
//         </thead>
//         <tbody>
//           {teachers.map((teacher, index) => (
//             <tr key={index}>
//               <td>{teacher.name}</td>
//               <td>{teacher.id}</td>
//               <td>{teacher.subject}</td>
//               <td>{teacher.className}</td>
//               <td>{teacher.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default AdminTeachers;
import React, { useState } from 'react';
import './AdminTeachers.css';

function AdminTeachers() {
  const [teachers, setTeachers] = useState([
    { name: 'John Doe', id: '5701', subject: 'Mathematics', className: 'Class A', phone: '93461983773' },
    { name: 'Jane Smith', id: '5702', subject: 'Science', className: 'Class B', phone: '9812875319' },
    { name: 'Alice Johnson', id: '5703', subject: 'History', className: 'Class C', phone: '9501284190' },
  ]);
  const [formVisible, setFormVisible] = useState(false);
  const [newTeacher, setNewTeacher] = useState({
    name: '',
    id: '',
    subject: '',
    className: '',
  });

  const handleAddTeacherClick = () => {
    setFormVisible(!formVisible);
  };

  const handleChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeachers([...teachers, { ...newTeacher, phone: 'N/A' }]);
    setNewTeacher({ name: '', id: '', subject: '', className: '' });
    setFormVisible(false);
  };

  return (
    <div className="admin-teachers-container">
      <div className="header">
        <h1>Teachers</h1>
        <button onClick={handleAddTeacherClick}>{formVisible ? 'Cancel' : 'Add Teacher'}</button>
      </div>

      {formVisible && (
        <div className="modal-overlay" onClick={() => setFormVisible(false)}>
          <div className="teacher-form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setFormVisible(false)}>×</button>
            <h2>Add New Teacher</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name of the Teacher"
                value={newTeacher.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="id"
                placeholder="Teacher ID"
                value={newTeacher.id}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={newTeacher.subject}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="className"
                placeholder="Class Name"
                value={newTeacher.className}
                onChange={handleChange}
                required
              />
              <button type="submit">Add Teacher</button>
            </form>
          </div>
        </div>
      )}

      <table className="teachers-table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Teacher ID</th>
            <th>Subjects</th>
            <th>Classes</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{teacher.name}</td>
              <td>{teacher.id}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.className}</td>
              <td>{teacher.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTeachers;

