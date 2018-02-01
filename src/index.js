import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {getRandomJoke} from 'one-liner-joke';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
