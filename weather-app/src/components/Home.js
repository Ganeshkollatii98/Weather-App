

import React from 'react';
import SearchUi from './SearchUi';
import WeatherData from './WeatherData';
import WeatherSearchResults from './WeatherSearchResults';

class Home extends React.Component {
    render() {
        return (
           <div className="">
              <SearchUi/>
              <WeatherSearchResults/>
           </div>   
        );
    }
}

export default Home;

