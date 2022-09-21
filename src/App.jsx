import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Components/Welcome/Welcome.jsx";
import axios from 'axios';
import logo from '../Assets/TheMasonBar_Logo3.svg';
import Menu from './Components/Menu/Menu.jsx';
import Container from './Components/Container/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      events: [],
      menu: [],
      welcome: '',
      showModal: false,
      day: '',
      filtered: {},
      classToggle: '',
    }
    this.filterEvents = this.filterEvents.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  filterEvents(string) {
    const filtered = this.state.events.filter((event) => {
      if (event.eventTitle === string) {
        return event;
      }
    });
    this.setState({filtered: filtered[0]})
  }

  async selectEvent() {
    const clickedTitle = event.target.innerHTML;
    if (clickedTitle !== 'Close') {
      this.filterEvents(clickedTitle);
    }
    this.setState({showModal: !this.state.showModal})
    clickedTitle = '';
  }

  async getAllData() {
    const promises = [
      axios.get('/events'),
      axios.get('/images'),
      axios.get('/welcome'),
      axios.get('/menu')
    ]

    await Promise.all(promises)
    .then((success) => {
      this.setState({
        events: success[0].data,
        images: success[1].data,
        welcome: success[2].data[0].welcomeMessage,
        menu: success[3].data
      })
    })
    .catch((error) => {
      console.log('there was an error getting events with ', error)
    })
  }

  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="Mason Bar Logo"></img>
        <Container state={this.state} selectable={this.selectEvent} selectable={this.selectEvent}/>
        <footer className="footer">Authored by Trevor Edwards (Last Updated: July 18th, 2022)</footer>
      </div>
    );
  }
}

export default App;
