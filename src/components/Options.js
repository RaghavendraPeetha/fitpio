import React from 'react';
import '../styles/Options.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

const enterIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-chevron-right enter-icon" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
  </svg>
);

const Options = () => {
  return (
    <div className="options">
      <div className="option">
        <div className="left-cnr">
          <div className="icon-container goals-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-crosshair" viewBox="0 0 16 16">
              <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7 7 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7 7 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7 7 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7 7 0 0 0 8.5 1.018zm-6.48 7A6 6 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6 6 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6 6 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6 6 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
            </svg>
          </div>
          <h1>Goals</h1>
        </div>
        <div className="enter">
          {enterIcon}
        </div>
      </div>

      <div className="option">
        <div className="left-cnr">
          <div className="icon-container dishes-icon">
            <FontAwesomeIcon icon={faBurger} className="burger" />
          </div>
          <h1>Popular Dishes</h1>
        </div>
        <div className="enter">
          {enterIcon}
        </div>
      </div>

      <div className="option">
        <div className="left-cnr">
          <div className="icon-container menus-icon">
            <img src="https://cdn-icons-png.freepik.com/256/1980/1980788.png?semt=ais_hybrid" className="menu" alt="menu"/>
          </div>
          <h1>Menus</h1>
        </div>
        <div className="enter">
          {enterIcon}
        </div>
      </div>
    </div>
  );
};

export default Options;
