import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './greetings';
import registerServiceWorker from './registerServiceWorker';

setInterval(App.tick, 1000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
