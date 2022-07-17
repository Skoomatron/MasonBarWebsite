import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const MasonCalendar = () => {

  const myEventsList = [
    {
      start: new Date(),
      end: new Date(),
      title: "This is a sample event"
    },
    {
      start: '07/21/2022',
      end: '07/21/2022',
      title: "Festivities Start at 11:00am"
    }
];

  return (
    <div class="calendar-container">
    <Calendar
      defaultDate={moment().toDate()}
      defaultView="month"
      localizer={localizer}
      events={myEventsList}
      resizable
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  )
}

export default MasonCalendar;