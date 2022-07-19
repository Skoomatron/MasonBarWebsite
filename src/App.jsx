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
      text: 'this is test data',
      images: ['dummy data', 'dummy data 2'],
      events: [],
      showModal: false,
      day: '',
      filtered: {},
    }
    // this.filterEvents = this.filterEvents.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  async filterEvents(string) {
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

  }


  getEvents() {
    axios.get('/events')
    .then((success) => {
      console.log(success)
      this.setState({events: success.data})
    })
    .catch((error) => {
      console.log('there was an error getting events with ', error)
    })
  }

  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="Mason Bar Logo"></img>
        <h1>Welcome</h1>
        {/* <Welcome filterEvents={this.filterEvents} state={this.state}/> */}
        {/* <Events state={this.state} selectable={this.selectEvent}/> */}
        <Container state={this.state} selectable={this.selectEvent} selectable={this.selectEvent}/>
      </div>

    );
  }
}

export default App;
