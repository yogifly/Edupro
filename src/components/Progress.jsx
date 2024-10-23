import React from 'react';
import './Progress.css'; // Import the CSS file for styling

const Progress = ({ steps, currentStep }) => {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div
            className={`dot ${index <= currentStep ? 'completed' : ''}`}
          ></div>
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Progress;
