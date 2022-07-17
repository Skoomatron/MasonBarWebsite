import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Components/Welcome.jsx";
import axios from 'axios';
import logo from '../Assets/TheMasonBar_Logo3.svg';
import Navigation from './Components/Navigation.jsx';
import Menu from './Components/Menu.jsx';
import Events from './Components/Events.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'this is test data',
    }
    this.clickHandler = this.clickHandler.bind(this);
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

  render() {
    return (
      <div>
        <img class="logo" src={logo} alt="Mason Bar Logo"></img>
        <h1>Welcome</h1>
        <Navigation/>
        <Welcome clickHandler={this.clickHandler}/>
        <Events/>
      </div>

    );
  }
}

export default App;
