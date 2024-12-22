// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function ParentLogin() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate('/parent-dashboard');
//   };

//   return (
//     <div>
//       <h2>parent Login</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <button type="button" onClick={handleLogin}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default ParentLogin;
import React, { useState } from 'react';
import './ParentLogin.css';
import { useNavigate } from 'react-router-dom';

function ParentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateUsername = (input) => {
    if (!/^\d*$/.test(input)) {
      alert('Invalid username: Only numbers are allowed');
      return false;
    }
    if (input.length > 8) {
      alert('Username cannot be more than 8 numbers');
      return false;
    }
    return true;
  };

  const validatePassword = (input) => {
    if (!/[A-Z]/.test(input)) {
      alert('Password must contain at least one capital letter');
      return false;
    }
    if (!/[!@#$%^&*]/.test(input)) {
      alert('Password must contain at least one special character');
      return false;
    }
    return true;
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    if (validateUsername(value)) {
      setUsername(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateUsername(username) && validatePassword(password)) {
      alert('Login successful!');
      navigate('/parent-dashboard');
    }
  };

  return (
    <div className="parent-login-container">
      <h1>Welcome Back</h1>
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default ParentLogin;

