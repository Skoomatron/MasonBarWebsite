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
    <div className="calendarContainer" style={{height: "90vh", width: "auto"}}>
    <SharedModal state={props.state} selectable={props.selectable}/>
    <Calendar
      defaultDate={moment().toDate()}
      defaultView="month"
      localizer={localizer}
      events={events}
      views
      resizable
      onDoubleClickEvent={props.selectable}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "500px" }}
    />
  </div>
  )
}

export default MasonCalendar;