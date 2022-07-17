import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Components/Welcome.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log('clicked');

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
