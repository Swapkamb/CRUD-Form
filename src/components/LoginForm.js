import React, { useState } from 'react';


const LoginForm = ({ onLogin }) => {
  debugger;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== '' && password.trim() !== '') {
      //console.log("Username:"+username +" "+ "Password:"+password);
      onLogin();
    }
    else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <div >
        <label className="labelText">
          Username:
          <input type="text" className="inputfilled" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label className="labelText">
          Password:
          <input type="password" className="inputfilled" maxLength="8" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button className="Loginbtn" type="submit" onClick={handleLoginSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
