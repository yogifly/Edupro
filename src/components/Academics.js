import React, { useState } from 'react';
import './Academics.css';





const Academics = () => {
  // State variables for zooming
  const [eventScale, setEventScale] = useState(1);
  const [scheduleScale, setScheduleScale] = useState(1);

  
  const zoomIn = () => {
    setEventScale(eventScale + 0.1);
  };

  const zoomOut = () => {
    if (eventScale > 1) {
      setEventScale(eventScale - 0.1);
    }
  };

  const zoomInSchedule = () => {
    setScheduleScale(scheduleScale + 0.1);
  };

  const zoomOutSchedule = () => {
    if (scheduleScale > 1) {
      setScheduleScale(scheduleScale - 0.1);
    }
  };

  return (
    <div>
        <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br /> 
      <br /><br /><br />
      <br /><br /><br />
      {/* Image Section */}
      <section className="image-section">
        <img
          src="360_F_91469952_ZThAYcO8L6IjoT2M1tvyKBNR8ivvMEEm.jpg"
          alt="Top Banner"
          style={{ width: '1550px', height: '400px' }}
        />
        <h1>Upcoming Events And Timetable of The Students</h1>
      </section>

      <section className="content-section">
        <div className="upcoming-events">
          <h2>Upcoming Events and Holidays (October - December 2024)</h2>
          <img
            id="event-image"
            src="images/event.jpeg"
            alt="Upcoming Events"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              transform: `scale(${eventScale})`,
            }}
          />
          <div className="zoom-buttons">
            <button onClick={zoomIn}>Zoom In</button>
            <button onClick={zoomOut}>Zoom Out</button>
          </div>
        </div>
      </section>

      {/* Daily Schedule Section */}
      <section className="content-section">
        <div className="daily-schedule">
          <h2>DAILY SCHEDULE</h2>
          <img
            id="schedule-image"
            src="images/timetable.jpeg"
            alt="Daily Schedule"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              transform: `scale(${scheduleScale})`,
            }}
          />
          <div className="zoom-buttons">
            <button onClick={zoomInSchedule}>Zoom In</button>
            <button onClick={zoomOutSchedule}>Zoom Out</button>
          </div>
        </div>
      </section>

      {/* Lunch Timetable Section */}
      <section className="content-section">
        <div className="lunch-timetable">
          <h2>LUNCH TIMETABLE</h2>
          <img
            id="lunch-image"
            src="images/lunch.jpeg"
            alt="Lunch Timetable"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              transform: `scale(${scheduleScale})`,
            }}
          />
          <div className="zoom-buttons">
            <button onClick={zoomInSchedule}>Zoom In</button>
            <button onClick={zoomOutSchedule}>Zoom Out</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
