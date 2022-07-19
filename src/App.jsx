import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Components/Welcome/Welcome.jsx";
import axios from 'axios';
import logo from '../Assets/TheMasonBar_Logo3.svg';
import Navigation from './Components/Navigation/Navigation.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Container from './Components/Container/Container.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [],
      events: [],
      welcome: '',
      showModal: false,
      day: '',
      filtered: {},
    }
    this.filterEvents = this.filterEvents.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
    this.getImages();
    this.getWelcome();
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
    console.log(clickedTitle, 'clickedTitle')
    const clickedTitle = event.target.innerHTML;
    if (clickedTitle !== 'Close') {
      this.filterEvents(clickedTitle);
    }
    this.setState({showModal: !this.state.showModal})
    clickedTitle = '';
    console.log(clickedTitle, 'clicked title after')

  }


  async getEvents() {
    await axios.get('/events')
    .then((success) => {
      this.setState({events: success.data})
    })
    .catch((error) => {
      console.log('there was an error getting events with ', error)
    })
  }

  async getImages() {
    await axios.get('/images')
    .then((success) => {
      this.setState({images: success.data})
    })
    .catch((error) => {
      console.log('there was an error getting events with ', error)
    })
  }

  async getWelcome() {
    await axios.get('/welcome')
    .then((success) => {
      this.setState({welcome: success.data[0].welcomeMessage})
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
      </div>

    );
  }
}

export default App;
