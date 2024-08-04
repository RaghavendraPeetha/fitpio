import React from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faCog, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="right">
        <div className="header-icons">
          <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
          <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
          <div className="icon"><FontAwesomeIcon icon={faBell} /></div>
        </div>
        <div className="profile-pic">
          <img src='https://images.unsplash.com/photo-1575439462433-8e1969065df7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8OTQ1MjQ5NHx8ZW58MHx8fHx8' alt='user' />
        </div>
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <FontAwesomeIcon icon={faBars} className="menu-bars" />
        <FontAwesomeIcon icon={faTimes} className="menu-times" />
      </label>
      <div className="mobile-menu">
        <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
        <div className="icon"><FontAwesomeIcon icon={faCog} /></div>
        <div className="icon"><FontAwesomeIcon icon={faBell} /></div>
      </div>
    </div>
  )
}

export default Header

