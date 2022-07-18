import React from 'react';
import MasonCalendar from './Calendar.jsx';

const Events = (props) => {

  return (
    <div>
      <MasonCalendar state={props.state} selectable={props.selectable}/>
    </div>
  )
}

export default Events;