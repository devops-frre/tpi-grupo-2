import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

window.ApiUrl = 'http://localhost:5501/api/';

ReactDOM.render(<App />, document.getElementById('app'));
