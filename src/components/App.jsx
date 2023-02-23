import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/NavBar';
import Properties from './Properties/Properties';
import AddProperty from './AddProperty/AddProperty';

import './app.css';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const [userID, setUserID] = useState("")

  const handleLogin = (response) => {
    setUserID(response.id)
  }

  const handleLogout = () => {
    window.FB.logout()
    setUserID("")
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar onLogin = {handleLogin} userID = {userID} onLogout = {handleLogout}/>
        <Routes>
          <Route path = "/" element={<Properties userID={userID} />} />
          <Route path="AddProperty" element={<AddProperty/>} />
        </Routes>
      </div>  
    </BrowserRouter>  
  );
}

export default App;
