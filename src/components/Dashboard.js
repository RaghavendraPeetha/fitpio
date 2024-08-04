import React from 'react';
import StatsCard from './StatsCard';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import '../styles/Dashboard.css';
import CircularProgressBar from './CircularProgressBar';
import ActivityChartBar from './ActivityChartBar';
import Options from './Options';

const stats = [
  { 
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket2-fill" viewBox="0 0 16 16">
      <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
    </svg>,
    sign: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
  </svg>,
    title: 'Total Orders', value: '75', rate: '▲ 3%', status: 'increased', background:'ordered'
  },
  { 
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
    </svg>,
    sign: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>,
    title: 'Total Delivered', value: '70', rate: '▼ 3%', status: 'decreased', background:'delivered' 
  },
  { 
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2M5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0z"/>
    </svg>,
    sign: <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
  </svg>,
    title: 'Total Cancelled', value: '05', rate: '▲ 3%', status: 'increased', background:'cancelled' 
  },
  { 
    logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"/>
      <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z"/>
      <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z"/>
      <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567"/>
    </svg>,
    sign: "",
    title: 'Total Revenue', value: '$12k', rate: '▼ 3%', status: 'decreased', background:'profit' 
  }
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div>
        <h1 className='heading'>Dashboard</h1>
      </div>
      <div className="stats-section">
        <div className='stats'>
          {stats.map((stat, index) => (
            <StatsCard key={index} stat={stat} />
          ))}
        </div>
        <div className="stats-profit">
          <div className='stats-description'>
          <h3>Net Profit</h3>
          <p className='profit-number'>$ 6759.25</p>
          <p className='profit-trend'>▲ 3%</p>
          </div>
          <div className='stats-progress-bar'>
          <CircularProgressBar percentage={70} />
          <p className='goal-status'>Goal <br/> Completed</p>
          <p>*The values here can be changed anytime.</p>
          </div>
        </div>
      </div>
      <div className="chart-section">
        <div className='activity'>
          <div className='head'>
            <h3 className='heading'>Activity</h3>
            <div className='dropdown'>
              <select>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>
          <ActivityChartBar />
        </div>
        <div className='orders-container'>
          <Options/>
        </div>
      </div>
      <div className='bottom-container'>
      <RecentOrders />
      <CustomerFeedback />
      </div>
    </div>
  )
}

export default Dashboard


