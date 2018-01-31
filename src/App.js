import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//LonelyBot
class Botsy extends Component {
  constructor () {
    super();
    this.state = []
    this.botname = "";
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { chat: [] };
    this.name = "Bob : ";
    this.botname = "Droidella"
    
  }

  componentDidMount = () => {
    this.initHello();
  }

  addName = () => {
    this.name = this.nameBox.value + " : ";
    console.log(this.name);
  }

  addMessage = () => {
    this.setState({ chat: this.state.chat.concat(this.inptBox.value) });
    this.inptBox.value = "";
    setTimeout(this.botMessage, 1000);
  }



  initHello = () => {
    var n = 1;
    var initResponses = ["Yo, how's it going", "Hi There", "Welcome to the Mad house", "Is that a banana in your pocket or are you just happy to see me"];
    n = Math.floor(Math.random() * initResponses.length);
    this.setState({ chat: this.state.chat.concat(initResponses[n]) })
  }

  botMessage = () => {
    var r = 1;
    var responses = ["tell me more", "you don't say", "I was just thinking that", "huh huh", "please go on...", "GTFO!"];
    r = Math.floor(Math.random() * responses.length);
    this.setState({ chat: this.state.chat.concat(responses[r]) })
  }

  cleanHouse = () => {
    this.setState({ chat: [] });
  }

  render() {
    return (
      <div>
        <div className="mainTitle">Got No Friends Chat</div>
        <div id="chatwindow">
          <input ref={(name) => { this.nameBox = name }} placeholder="enter your name here.." />
          <button className="buttons" onClick={this.addName}  >Apply</button>
        </div>
        <div className="regDiv">
          <input ref={(x) => { this.inptBox = x }} />
          <button className="buttons" onClick={this.addMessage}>Send</button>
          <button className="buttons" onClick={this.cleanHouse}>Clear Chat</button>
        </div>
        <div className="regDiv">
          {this.state.chat.map((x) => <li id="list"> {this.name + x} </li>)}
        </div>
      </div>
    );
  }
}

export default App;
