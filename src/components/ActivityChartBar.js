import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/ActivityChartBar.css'; 

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
  datasets: [
    {
      label: 'Activity',
      data: [5000, 7000, 6000, 8000, 10000, 11000, 13000, 9000, 8000, 12000, 14000, 13000, 10000, 12000, 15000],
      backgroundColor: 'blue',
      borderRadius: 20, 
      borderSkipped: false, 
      barPercentage: 0.8,
      categoryPercentage: 0.8,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0, 
      max: 15000, 
      grace: '50%', 
      grid: {
        display: true,
        color: '#E5E5E5', 
      },
      ticks: {
        // stepSize: 5000, 
        callback: function(value) {
          return value % 1000 === 0 && value!==0 ? (value / 1000) + 'k' : value;
        },
        padding: 10, 
        color: '#7D7D7D', 
        font: {
          size: 14, 
        },
        autoSkip: false, 
      },
      border: {
        display: false, 
      },
    },
    x: {
      grid: {
        display: false, 
      },
      border: {
        display: false, 
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};



const ActivityChartBar = () => (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
);

export default ActivityChartBar;
