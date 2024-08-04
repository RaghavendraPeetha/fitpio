import React from 'react';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faWallet, faClipboardList, faChartBar, faHouseUser, faCartShopping, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <FontAwesomeIcon icon={faMedal} className='logo' />
      </div>
      <div className="sidebar-icons">
        <div className="sidebar-icon active"><FontAwesomeIcon icon={faHouseUser} /></div>
        <div className="sidebar-icon"><FontAwesomeIcon icon={faChartBar} /></div>
        <div className="sidebar-icon"><FontAwesomeIcon icon={faClipboardList} /></div>
        <div className="sidebar-icon"><FontAwesomeIcon icon={faWallet} /></div>
        <div className="sidebar-icon"><FontAwesomeIcon icon={faCartShopping} /></div>
      </div>
      <div className="sidebar-icon logout-container"><FontAwesomeIcon icon={faRightFromBracket} /></div>
    </div>
  )
}

export default Sidebar

