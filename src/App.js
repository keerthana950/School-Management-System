import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import School from './School';
import AdminLogin from './AdminLogin';
import StudentLogin from './StudentLogin';
import TeacherLogin from './TeacherLogin';
import ParentLogin from './ParentLogin';
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';
// import TeacherDashboard from './TeacherDashboard';
import TeacherDashboard from './TeacherDashboard';
import ParentDashboard from './ParentDashboard';
import About from './About'; 
import Contact from './Contact'; 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/school" element={<School />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/teacher-login" element={<TeacherLogin />} />
        <Route path="/parent-login" element={<ParentLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        <Route path="/" element={<School />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
</Routes>
    </Router>
  );
}

export default App;
