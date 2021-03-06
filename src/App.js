import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import oneLinerJoke,{getRandomJoke} from 'one-liner-joke';
// var oneLinerJoke = require('one-liner-joke'); this converts to the above
// to fix, need to import one liner jokes to make her funny, DONE!!
// need to submit text on enter, 
// need to pass name somehow in a way that doesn't hide input first, make fredroideric very canadian with Eh and tabernac etc
// send a pic? would be very cool
// LonelyBot

// App asks for name before showing chat since 
class App extends Component {
  constructor() {
    super();
    this.state = { name: "Enter Name : " };
  }

  addName = () => {
    this.setState({ name: this.nameBox.value });
  }

  render() {
    return (
      <div>
        <div className="mainTitle">Got No Friends Chat</div>

        {this.state.name === "Enter Name : " ?
          <div id="chatwindow">
          Enter your name to Begin..<br/>
            <input ref={(name) => { this.nameBox = name }} placeholder="enter your name here.." />
            <button className="buttons" onClick={this.addName}  >Apply</button>
          </div> :
          <div>
            <div className="regDiv">
              <h1>Welcome To Sassy Droid chat {this.state.name} </h1>
              <h2>Things to try</h2>
              
                Ask "What's the time"<br/>
                Say ""bye", "goodbye" or "chow"<br/>
                Try "tell me a joke" or "make me laugh" (be warned, they are mostly bad or offensive)<br/>
                Be careful, Fredroideric is very Canadian<br/>
              
            </div>
            <div className="sidebyside"> <Chatbot botName="Droidella" name={this.state.name} /> <Chatbot botName="Fredroideric" name={this.state.name} trait={"canadian"} /></div>
          </div>
        }


      </div>)
  }


}

class Chatbot extends Component {
  constructor() {
    super();
    this.state = { chat: [] };
    this.name = ""
    this.wantstime = false;
    this.saidGoodbye = false;
    this.tellMeAJoke = false;
    this.traitTxt = "";
    this.num = 1;

  }

  componentDidMount = () => {
    this.initHello();
    this.name = this.props.name;
    this.trait = this.props.trait;
    console.log(this.props);
    console.log(this.trait);
    
  }

  addMessage = () => {
    this.setState({ chat: this.state.chat.concat({ text: this.inptBox.value, time: Date.now(), name: this.name }) });
    if (this.inptBox.value === "what's the time") {
      this.wantstime = true;
    } else if (this.inptBox.value === "bye" || this.inptBox.value === "goodbye" || this.inptBox.value === "chow") {
      this.saidGoodbye = true;
    } else if (this.inptBox.value === "tell me a joke" || this.inptBox.value === "make me laugh" || this.inptBox.value === "how's your humor?") {
      this.tellMeAJoke = true;
    }
    this.inptBox.value = "";
    setTimeout(this.botMessage, 1000);
  }

  initHello = () => {
    var n = 1;
    var initResponses = ["Yo, how's it going", "Hi There", "Welcome to the Mad house", "Is that a banana in your pocket or are you just happy to see me"];
    n = Math.floor(Math.random() * initResponses.length);
    this.setState({ chat: this.state.chat.concat({ text: initResponses[n], time: Date.now(), name: this.props.botName }) })

  }

  botMessage = () => {
    var nameNagging = ["You Should enter your name before we begin", "So what's your name", "what do they call you"]
    var responses = ["tell me more", "you don't say", "I was just thinking that", "huh huh", "please go on...", "GTFO!", "I'm not that sort of girl", "Did I mention I used to be a gymnast", "you should see what I can do with a golf ball and a hose pipe"];
    var goodbyes = ["don't let the door hit you on the way out", "I was bored with you anyway", "Oh, I didn't realise you were still there", "fine, I'll go back to talking to my cat", "See you later, have a good night", "But I haven't told you about my rash yet... OK, fine later."];
    var canadian = [" eh", " tabernac", " osti", "", " Oh and did I tell you how much I love Treaudeau", " and imagine adding maple syrup to that, eh", " osti tabernac", " câlice"];
    
    (this.props.trait === 'canadian' ? this.traitTxt = canadian[Math.floor(Math.random() * canadian.length)] : this.traitTxt = "");

    if (this.name === "Enter Name : ") {
      this.num = Math.floor(Math.random() * nameNagging.length);
      this.setState({ chat: this.state.chat.concat({ text: nameNagging[this.num], time: Date.now(), name: this.props.botName }) });
    } else if (this.wantstime === true) {
      this.num = Math.floor(Math.random() * responses.length);
      this.setState({ chat: this.state.chat.concat({ text: Date(), time: Date.now(), name: this.props.botName }) });
      this.wantstime = false;
    } else if (this.saidGoodbye === true) {
      this.num = Math.floor(Math.random() * goodbyes.length);
      this.setState({ chat: this.state.chat.concat({ text: goodbyes[this.num] + " " + this.name + this.traitTxt, time: Date.now(), name: this.props.botName }) });
      this.saidGoodbye = false;
    } else if (this.tellMeAJoke === true) {
      var joke = getRandomJoke();
      console.log(joke);
      this.setState({ chat: this.state.chat.concat({ text: joke.body + this.traitTxt, time: Date.now(), name: this.props.botName }) });
      this.tellMeAJoke = false;
    } else {
      this.num = Math.floor(Math.random() * responses.length);
      
      this.setState({ chat: this.state.chat.concat({ text: responses[this.num] + this.traitTxt, time: Date.now(), name: this.props.botName }) });
    }
  }

  cleanHouse = () => {
    this.setState({ chat: [] });
  }

  render() {
    return (
      <div>
        <div className="regDiv">
          <input ref={(x) => { this.inptBox = x }} />
          <button className="buttons" onClick={this.addMessage}>Send</button>
          <button className="buttons" onClick={this.cleanHouse}>Clear Chat</button>
        </div>
        <div className="chatter">
        <h2>You are talking to {this.props.botName}</h2>
          {this.state.chat.map((x) => <li id="list"> {x.name + " : " + x.text} </li>)}
        </div>
      </div>
    );
  }
}

export default App;
