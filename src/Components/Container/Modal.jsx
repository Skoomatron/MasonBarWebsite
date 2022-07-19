import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import moment from 'moment';




const SharedModal = (props) => {

  const selectedData = props.state.filtered;
  console.log(selectedData[0])
  const currentYear = moment().year();

  return (
    <Modal show={props.state.showModal} onHide={props.selectable}>
      <Modal.Header>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {console.log(props, 'prps') }
        {console.log(selectedData, 'selected')}
        Event Title: {selectedData.eventTitle} <br></br>
        Event Date: {selectedData.month} {selectedData.day} {currentYear} <br></br>
        Event Start Time: {selectedData.start} <br></br>
        Event End Time: {selectedData.end} <br></br>
        Event Description: {selectedData.eventDescription} <br></br>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" name="eventModal" onClick={props.selectable}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SharedModal;