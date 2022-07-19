import React from 'react';
import logo from '../../../Assets/TheMasonBar_Logo3.svg';


const Contact = () => {

  return (
    <div className="contact">
      <img src={logo} alt="Mason Bar Logo"></img>
      <div className="contactContent">
        Proprietors: Aepril & Daniel Scayola
        <br></br>
        Phone Number: (828) 390-4333
        <br></br>
        Email:
        <br></br>
        <a href="mailto:masonbar@internet.com">masonbar@internet.com</a>
        <br></br>
        Address:
        <br></br>
        46 Valley River Ave.
        <br></br>
        Murphy, NC 28906
      </div>
    </div>
  )
}

export default Contact;