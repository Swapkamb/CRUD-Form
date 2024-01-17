
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserDetailsFrom from './components/UserDetailsForm';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    debugger;
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <h2>Welcome to the App!</h2>
          {/* Other components for authenticated users */}
          <UserDetailsFrom/>
        </div>
      )}
    </div>
  );
};

export default App;
