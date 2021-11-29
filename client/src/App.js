import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/search" element={<h2>Results</h2>} />
        <Route path="/game" element={<h2>Game</h2>} />
        <Route path="/profile" element={<h2>User</h2>} />
        <Route path="/login" element={<h2>Login</h2>} />
        <Route path="/signup" element={<h2>Join</h2>} />
      </Routes>
    </div>
  );
};

export default App;
