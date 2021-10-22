import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './Store';
import { provider } from 'react-redux'
import './index.css';
import App from './Components/App';

// const store = configureStore();
// console.log("STORE", store.getState())
ReactDOM.render(
  <provider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </provider>,
  document.getElementById('root')
);
