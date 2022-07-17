import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Components/Welcome.jsx";
import axios from 'axios';

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

    })
    .catch((error) => {
      console.alert('Failed to post new data with error : ' + error);
    })
  }

  render() {
    return (
      <div>
        <h1>Mason Bar</h1>
        <Welcome clickHandler={this.clickHandler}/>
      </div>

    );
  }
}

export default App;
