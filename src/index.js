import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './components/app/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
