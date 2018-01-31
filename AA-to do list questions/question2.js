import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Every 1 second, change the number being rendered to a new random number. 
// HINT
// Store the number that you want to be shown in the state.
// You will need to put a call to setInterval in the componentDidMount method of your App class.


class App extends Component {
  constructor () {
    super();
    this.state = {}
  }

  componentDidMount = () => {
    setInterval(this.randoTimer, 1000)
  }

  randoTimer = () => {
    var rando = Math.floor(Math.random() * 100);
    this.setState({counter : rando});
    return rando;
  }

  render() {
    return (
      (<div> {this.state.counter} </div>)
    );
  }
}

export default App;
