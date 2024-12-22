
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.css';
function Main() {
  const navigate = useNavigate();
  return (
    <div className="main-container main-background">
      <div className="image-section"> {} </div>
      <div className="content-section">
        <div className="header">
          <img src="https://tse1.mm.bing.net/th?id=OIP.70nt6T8DNnH8mwOO15cUEwHaEw&pid=Api&P=0&h=220" alt="SchoolSphere Logo" className="logo" />
          <h1>SchoolSphere</h1>
        </div>
        <p>"Where minds expand and dreams unfold"</p>
        <div className="button-section">
          <button onClick={() => navigate('/admin-login')}>
            <img src="https://tse3.mm.bing.net/th?id=OIP._R4XgIfrkq4ZFFF55wxhWQHaHa&pid=Api&P=0&h=220" alt="Admin Icon" />
            Admin Login
          </button>
          <button onClick={() => navigate('/student-login')}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.9Yv1tO837FCgbxMfYOqDBgHaEv&pid=Api&P=0&h=220" alt="Student Icon" />
            Student Login
          </button>
          <button onClick={() => navigate('/teacher-login')}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.enXSKxeFCZizKQsisrSyTQHaGf&pid=Api&P=0&h=220" alt="Teacher Icon" />
            Teacher Login
          </button>
          <button onClick={() => navigate('/parent-login')}>
            <img src="https://tse1.mm.bing.net/th?id=OIP.CjcgziU0kd2DsoGuCe6EbAHaHa&pid=Api&P=0&h=220" alt="Parent Icon" />
            Parent Login
          </button>
        </div>

        <div className="more-info">
          <p className="theme1">Want to know more about us?</p>
          <button onClick={() => navigate('/school')}>Click Here</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
