import React, { Component } from 'react';
import Forecast from './Forecast';
import WeatherData from './WeatherData';

var WeatherSearchResults = () => {

    return (
        <div>
             <WeatherData/>
            <Forecast />
        </div>
    
    )
}

export default WeatherSearchResults;