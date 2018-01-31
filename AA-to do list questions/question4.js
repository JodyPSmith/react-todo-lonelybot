import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

// Every 1 second, change the number being rendered to a new random number. 
// HINT
// Store the number that you want to be shown in the state.
// You will need to put a call to setInterval in the componentDidMount method of your App class.

// Question 3
// Now, instead of displaying a single random number, you will display a list of numbers. A new number gets added to the list every 2 seconds. 
// Use the concat array method instead of the push array method.
// HINT
// Store the list of numbers in the state as an array. When you render the numbers, you will call the map function of that array.

// Add an input box and a button to the page. When you click the number, whatever is in the input box gets added to the list.
// HINTS
// You will need to use the ref property

// To get the value of an input box, use the .value property



class App extends Component {
  constructor() {
    super();
    this.state = {counter : []}
  }

  componentDidMount = () => {
    setInterval(this.randoNumber, 3000)
  }

  clicked = () => {
    this.setState({counter : this.state.counter.concat(this.inptBox.value)});
  }

  randoNumber = () => {
    var rando = Math.floor(Math.random() * 100);
    this.setState({counter : this.state.counter.concat(rando)})
  }

  render() {
    return (
      (<div>
        <input ref={(inp) => this.inptBox = inp }/>
        {console.log(this.inp)}
        <button onClick = {this.clicked}> Click Me! </button>
        {this.state.counter.map(x => (<li> {x} </li>))}
      </div>)
    );
  }
}

export default App;
