import React, { useState, useEffect } from 'react';
import './PhotoSwap.css'; // Add custom styles for layout

const PhotoSwap = ({ photos, interval = 3000 }) => { // Default interval set to 3000ms (3 seconds)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next photo
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Function to handle moving to the previous photo
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  // Effect to automatically change the photo at the specified interval
  useEffect(() => {
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer); // Clear the interval on component unmount
  }, [interval]);

  return (
    <div className="photo-swap-container">
      <button className="prev-button" onClick={handlePrevious}>
        Previous
      </button>
      
      <div className="photo-display">
        <img src={photos[currentIndex]} alt="Current Photo" className="photo" />
      </div>

      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PhotoSwap;
