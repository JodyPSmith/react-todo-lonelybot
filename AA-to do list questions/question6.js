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

// Right now, a random element gets added to the list every 2 seconds. Make it stop.

// Also, add a button. When you click on the button, it clears the list entirely.

// Clear the input box every time you add an item the list.
// HINT
// Clearing the input box has to be done AFTER the state has been set. Don't forget that the state is not immediately set when you call setState.

class App extends Component {
  constructor () {
    super();
    this.state = { list : []}
  }

addToList = () => {
  //the inptBut is created by the input box in render
  this.setState({list : this.state.list.concat(this.inptBut.value)})
  this.inptBut.value = "";
}

clearList = () => {
  this.setState({list : []});
}

  render() {
    return (
      <div>
        <input ref={(x) => {this.inptBut = x}}/>
        <button onClick={this.addToList}>Add to List</button>
        <button onClick={this.clearList}>Delete List</button>
        {this.state.list.map(x => (<li> {x} </li>))}
      </div>
    );
  }
}

export default App;
