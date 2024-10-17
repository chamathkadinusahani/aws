import React from 'react';
import './Events.css';

function Events() {
  return (
    <div className="events-section">
      <h2>Events</h2>
      <div className="events-grid">
        <div className="event-item">
          <img src="9f4e077ed4387b0a2a29847f30b0de82.jpg" alt="Event 1" />
        </div>
        <div className="event-item">
          <img src="0b806c02cdaac66cd4b849830f7038ed.jpg" alt="Event 2" />
        </div>
        <div className="event-item">
          <img src="4e0526cb7a11860e4771ddf6d98a39d6.jpg" alt="Event 3" />
        </div>
      </div>
    </div>
  );
}

export default Events;
