import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import SharedModal from '../Container/Modal.jsx';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";


const localizer = momentLocalizer(moment);

const DateParser = (array, props) => {
  const events = [];
  array.forEach((event, index) => {

    let temp = {};
    let numMonth = moment().month(event.month).format("M");
    let currentYear = moment().year();
    let parsedDate = numMonth + '/' + event.day + '/' + currentYear;

    temp.start = parsedDate;
    temp.end = parsedDate;
    temp.title = event.eventTitle;
    temp.resource = event._id;

    events.push(temp);
  })
  return events;
}

const MasonCalendar = (props) => {

  const events = DateParser(props.state.events, props);

  return (
    <div className="calendar-container">
    <SharedModal state={props.state} selectable={props.selectable}/>
    <Calendar
      defaultDate={moment().toDate()}
      defaultView="month"
      localizer={localizer}
      events={events}
      resizable
      // selectable
      onDoubleClickEvent={props.selectable}
      // onSelectSlot={props.selectable}
      // onSelectEvent={props.selectable}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
  )
}

export default MasonCalendar;