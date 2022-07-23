import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';
import Events from '../Events/Events.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import Menu from '../Menu/Menu.jsx';
import Contact from '../Contact/Contact.jsx';
import Sidebar from '../Welcome/Sidebar.jsx';

const Container = (props) => {

  return (
    <Tabs
        defaultActiveKey="welcome"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="welcome" title="Welcome">
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Sidebar state={props.state}/>
            <div className="welcomeContainer">
              <Welcome className="content" state={props.state}/>
            </div>

          </div>
        </Tab>
        <Tab eventKey="event" title="Upcoming Events">
          <Events
            state={props.state}
            selectable={props.selectable}/>
        </Tab>
        <Tab eventKey="menu" title="Menu">
          <Menu state={props.state}/>
        </Tab>
        <Tab eventKey="contact" title="Contact Us!">
          <Contact />
        </Tab>
      </Tabs>
  )
}

export default Container;