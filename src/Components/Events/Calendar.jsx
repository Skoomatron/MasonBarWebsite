import React from 'react';
import Calendar from 'react-calendar';

const MasonCalendar = () => {

  const setDate = new Date();

  return (
    <div className="app">
      <h1 className="header">Event Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={setDate}/>
      </div>
      <div className="text-center">
          Selected date: {setDate.toDateString()}
      </div>
    </div>
  )
}

export default MasonCalendar;