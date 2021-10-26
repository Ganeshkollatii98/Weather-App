import React, { Component ,useEffect} from 'react';
import Forecast from './Forecast';
import WeatherData from './WeatherData';
import AOS from "aos";
import "aos/dist/aos.css"
class About extends Component {

    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 1000
        });
    }
    render() {

        return (
            <div className="font-sans items-center  h-full flex sm:flex flex-col ">
                {/* Weather Logo */}

                <img src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" alt="app- logo" data-aos="fade-up" className="mt-12 w-4/12 sm:1/12 md:w-1/12 lg:w-1/12  "></img>

                {/* About Section */}
                <div className="flex flex-col items-center w-11/12 mt-4 " >
                    <p className="text-3xl font-medium " data-aos-delay="200" data-aos="fade-up">About</p>
                    <p className="md:text-xl md:font-semibold mb-1 mt-2" data-aos-delay="400" data-aos="fade-up"><span className="font-bold ">Made By: </span>Ganesh Kollati</p>
                    <p className="text-sm text-center md:text-xl md:font-semibold" data-aos="fade-up" data-aos-delay="600">The WeatherMan Project is a web-app for displaying the weather details from all around the world.</p>
                </div>
                {/* Resources used */}
                <div className="w-11/12 lg:w-10/12 mt-4 lg:mt-8 text-xs lg:text-sm  " data-aos="fade-up" >
                    <p className="font-semibold" data-aos="fade-up" data-aos-delay="900">Resources Used:</p>
                    <ul className="list-disc ml-12 mt-2 space-y-1">
                        <li data-aos="fade-up" data-aos-delay="1000">Open Weather Maps API: For getting the weather details</li>
                        <li data-aos="fade-up" data-aos-delay="1100">Chart.js: For displaying the charts</li>
                        <li data-aos="fade-up" data-aos-delay="1200">AOS: For animation on scroll</li>

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