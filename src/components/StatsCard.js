import React from 'react';
import '../styles/StatsCard.css';


const getLogo = (title) => {
  switch (title) {
    case 'Total Orders':
      return 'stats-icon logo-orders';
    case 'Total Delivered':
      return 'stats-icon logo-delivered';
    case 'Total Cancelled':
      return 'stats-icon logo-cancelled';
    case 'Total Revenue':
      return 'stats-icon';
    default:
      return '';
  }
};


const getSign = (title) => {
  switch (title) {
    case 'Total Orders':
      return 'stats-sign sign-orders';
    case 'Total Delivered':
      return 'stats-sign sign-delivered';
    case 'Total Cancelled':
      return 'stats-sign sign-cancelled';
    case 'Total Revenue':
      return 'stats-sign';
    default:
      return '';
  }
};

const StatsCard = ({ stat }) => {
  return (  
    <div className="stats-card">
      <div className='top-section'>
      <div className={`stat-sign-container ${stat.background}`}>
        <div className={stat.title==='Total Revenue' ? 'revenue': 'icon-cnr'}>
          <div className={getLogo(stat.title)}>{stat.logo}</div>
          <div className={getSign(stat.title)}>{stat.sign}</div>
        </div>
      </div>
      <h3 className="stats-title">{stat.title}</h3>
      </div>
      <div className="stats-info">
        <div className="stats-value">{stat.value}</div>
        <div className={`stats-rate ${stat.status}`}>{stat.rate}</div>
      </div>
    </div>
  )
}

export default StatsCard

