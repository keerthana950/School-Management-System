
import React, { useState } from 'react';
import './AdminClasses.css';

function AdminClasses() {
  const [classes, setClasses] = useState([
    { className: 'Class 1A', capacity: 30, supervisor: 'Keerthana' },
    { className: 'Class 2A', capacity: 25, supervisor: 'Shreya' },
    { className: 'Class 3A', capacity: 26, supervisor: 'vikranth' },
    { className: 'Class 4A', capacity: 35, supervisor: 'Manasa' },
    { className: 'Class 5A', capacity: 30, supervisor: 'Charan Teja' },
    { className: 'Class 6A', capacity: 27, supervisor: 'Pujitha' },
    { className: 'Class 7A', capacity: 22, supervisor: 'Sree' },
    { className: 'Class 8A', capacity: 32, supervisor: 'Abi' },
    { className: 'Class 9A', capacity: 39, supervisor: 'Charitha' },
    { className: 'Class 10A', capacity: 23, supervisor: 'Maanya' },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    className: '',
    supervisor: '',
    capacity: '',
  });
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const classIndex = classes.findIndex((c) => c.className === formData.className);
    if (classIndex === -1) {
      alert('Class does not exist');
    } else {
      const updatedClasses = [...classes];
      updatedClasses[classIndex] = {
        ...updatedClasses[classIndex],
        supervisor: formData.supervisor,
        capacity: formData.capacity,
      };
      setClasses(updatedClasses);
      setShowForm(false);
    }
  };

  return (
    <div className="classes-content">
      <div className="classes-header">
        <h2>All Classes</h2>
        <button onClick={() => setShowForm(true)}>Update Supervisor</button>
      </div>

      <table className="classes-table">
        <thead>
          <tr>
            <th>ClassName</th>
            <th>Capacity</th>
            <th>Supervisor</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classData, index) => (
            <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{classData.className}</td>
              <td>{classData.capacity}</td>
              <td>{classData.supervisor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setShowForm(false)}>X</button>
            <form className="update-form" onSubmit={handleUpdate}>
              <label>
                Class Name:
                <input type="text" name="className" value={formData.className} onChange={handleInputChange} required />
              </label>
              <label>
                Supervisor:
                <input type="text" name="supervisor" value={formData.supervisor} onChange={handleInputChange} required />
              </label>
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminClasses;

