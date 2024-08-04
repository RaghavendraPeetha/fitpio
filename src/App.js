import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className='sidebar-container'>
      <Sidebar />
      </div>
      <div className="main-content">
        <div className='header-container'>
        <Header />
        </div>
        <div className='dashboard-container'>
        <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
