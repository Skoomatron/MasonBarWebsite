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
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.selectEvent = this.selectEvent.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  selectEvent() {
    console.log('clicked at app level')
  }

  clickHandler() {
    console.log('clicked');
    axios.post('/welcome', {test: this.state.text})
    .then((success) => {
      console.log('great success!')
    })
    .catch((error) => {
      console.alert('Failed to post new data with error : ' + error);
    })
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
        {/* <Welcome clickHandler={this.clickHandler} state={this.state}/> */}
        {/* <Events state={this.state} selectable={this.selectEvent}/> */}
        <Container state={this.state} selectable={this.selectEvent}/>
      </div>

    );
  }
}

export default App;
