import Button from 'react-bootstrap/Button';
import React from 'react';

const Buttons = (props) => {

  return (
    //warning only defines the styling, not an actual warning
    <Button onClick={props.clickHandler} name={props.name} variant="warning">{props.name2}</Button>
  )
}

export default EventButtons;