import React, { useState, useEffect } from 'react';
import './PhotoSwap.css';

const PhotoSwap = ({ photos, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the photo at the specified interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, interval);

    return () => clearInterval(timer); // Clear interval on unmount
  }, [interval]);

  return (
    <div className="photo-swap-container">
      <div className="photo-display">
        <img src={photos[currentIndex]} alt="Current Display" className="photo" />
      </div>
    </div>
  );
};

export default PhotoSwap;
