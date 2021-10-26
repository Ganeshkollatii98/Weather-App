import React, { Component } from 'react';
import Forecast from './Forecast';
import WeatherData from './WeatherData';

class About extends Component {
    render() {
        return (
            <div className="font-sans items-center  h-full flex sm:flex flex-col ">
                {/* Weather Logo */}

                <img src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" alt="app- logo" className="mt-12 w-3/12 md:w-3/12 lg:w-2/12 m-5 "></img>

                {/* About Section */}
                <div className="flex flex-col items-center w-11/12 ">
                    <p className="text-xl font-medium">About</p>
                    <p className="md:text-xl md:font-semibold"><span className="font-bold ">Made By: </span>Ganesh Kollati</p>
                    <p className="text-sm text-center md:text-xl md:font-semibold">The WeatherMan Project is a web-app for displaying the weather details from all around the world.</p>
                </div>
                {/* Resources used */}
                <div className="w-11/12 lg:w-8/12 mt-8 text-sm md:text-xl">
                      <p className="font-semibold">Resources Used:</p>
                       <ul className="list-disc ml-12">
                           <li>Open Weather Maps API: For getting the weather details</li>
                           <li>Chart.js: For displaying the charts</li>
                           <li>AOS: For animation on scroll</li>
                           
                       </ul>
                </div>

            </div>
        );
    }
}

export default About;
// var About=()=> {
//   return (
//     <div className="">
//       Home
//     </div>
//   );
// }

// export default About;