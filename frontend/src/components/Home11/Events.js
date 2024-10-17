import React, { useState, useEffect } from 'react';
import './Events.css';

function Events() {
  const images = [
    "1687259340-school-holis-6.jpg",
    "tuition-920.webp",
    "image_a4413c64dd.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="event-item">
        <img src={images[currentIndex]} alt={`Event ${currentIndex + 1}`} />
      </div>
    </div>
  );
}

export default Events;
