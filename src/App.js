import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/login';
import Admin from './components/admin';
import Upload from './components/upload';
import Database from './components/database';
import Users from './components/users';
import Side from './components/side';
import Search from './components/search';
import Confirm from './components/confirm';
import Header from './components/header';
import Verify from './components/verify';

function App() {
  useEffect(() => {
    // Check if local storage flag is set
    const clearLocalStorageFlag = localStorage.getItem('clearLocalStorageFlag');
    if (!clearLocalStorageFlag) {
      // Clear local storage
      localStorage.clear();
      // Set flag in local storage
      localStorage.setItem('clearLocalStorageFlag', 'true');
    }
  }, []);

  const location = useLocation();
  const isLogin = ['/upload', '/', '/verify'].includes(location.pathname);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/confirm" element={<Confirm />} />
        <Route exact path="/database" element={<Database />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/side" element={<Side />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
