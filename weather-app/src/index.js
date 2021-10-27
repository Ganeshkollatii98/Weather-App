import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { WeatherData } from "./Reducers/Reducer"
import './index.css';
import App from './components/App';

export const state = createStore(WeatherData);

// console.log("STATE BEFORE", state.getState())

// state.dispatch(insertWeather([1, 2, 3, 4, 5]))

// console.log("STATE AFTER", state.getState())
ReactDOM.render(
  <React.StrictMode>
    <App store={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);


