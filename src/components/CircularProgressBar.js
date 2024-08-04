import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        strokeWidth={12}
        styles={{
          root: {},
          path: {
            stroke: 'blue',
            strokeLinecap: 'round', 
            // strokeWidth: 10, 
          },
          trail: {
            stroke: `rgba(62, 152, 199, ${percentage / 100})`,
            strokeLinecap: 'round',
            // strokeWidth: 10, 
          },
          text: {
            fill: 'white', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            dominantBaseline: 'middle', 
            textAnchor: 'middle', 
            transform: 'translateY(-10%)', 
            transformOrigin: 'center',
          },
          background: {
            fill: '#3e98c7',
          },
        }}
      />
    </div>

  );
};

export default CircularProgressBar;
