import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
// Holy shit... I wrote this. like it even made sense for the whole thing.

class Todo extends Component {
  constructor () {
    super ();
    this.state = { list : []}
  }

  addToList = () => {
    this.setState({list : this.state.list.concat(this.inptBut.value)})
    this.inptBut.value = "";
  }

  deleteList = () => {
    this.setState({list : []});
  }

  render() {
    return (
      <div>
        <input ref={(x) => {this.inptBut = x}}/>
        <button onClick={this.addToList}>Add to List</button>
        <button onClick={this.deleteList}>Delete them</button>
        {this.state.list.map((x) => (<li> {x} </li>))}
      </div>
    );
  }
}

class App extends Component {

  // this calls the class and puts it in a tag, need to wrap the class name in < Class /> and surrounding divs.
  render () {
    return (
    <div><Todo/> <Todo/></div>
    );
  }
}

export default App;
