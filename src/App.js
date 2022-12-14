import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Page from './Page';
import Dashboard from './Dashboard';
import CreateMapping from './CreateMapping';
import Logout from './Logout';
import VisualResource from './VisualResource';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({ isLoggedIn: false });

  const setLoggedIn = (data) => {
    setIsLoggedIn({ isLoggedIn: data });
  };

  const userLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn({ isLoggedIn: false })
  }

  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <Header isLoggedIn={isLoggedIn} loggedOut={userLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="logout" element={<Logout setLoggedIn={setLoggedIn}/>} />
          <Route path="signup" element={<Signup isLoggedIn={isLoggedIn}/>}/>
          <Route path="dashboard" element={<Dashboard setLoggedIn={setLoggedIn}/>} />
          <Route path="resource" element={<CreateMapping/>} />
          <Route path="vresource" element={<VisualResource/>} />
          <Route path="Page" element={<Page isLoggedIn={isLoggedIn} />} />
        </Routes>

        <br></br>


      </div>
    </BrowserRouter>

  );
}

export default App;
