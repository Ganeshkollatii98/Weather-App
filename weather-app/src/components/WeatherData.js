
import { useEffect } from 'react';
import AOS from "aos";
import { Link } from "react-router-dom"
import { state } from "../index"
import Forecast from './Forecast';
import {changeResultStatus} from '../Actions/Action'
var WeatherData = (props) => {
    
    useEffect(() => {
        
        
        AOS.init(
            {
                duration: 1000
            }

        );
        
        console.log("Weather Data STATE:",state.getState())
        console.log("name of sity:",state.getState().weather.name)
        console.log("temp:",state.getState().weather.main.temp)
        console.log("humidity:",state.getState().weather.main.humidity)
        console.log("status:",state.getState().weather.weather[0].main)
        console.log("speed:",state.getState().weather.wind.speed)
    }, []);
    const handleGoToBackBtn=()=>{
        state.dispatch(changeResultStatus(false))
    }
    return (
       <>
        <div className="tracking-wide bg-gray-200 flex  flex-col items-center ">
            <div className=" font-sans text-xl sm:w-8/12 w-10/12" data-aos="fade-up" data-aos-delay="400">

                <div className=" mt-12" data-aos="fade-up" data-aos-delay="600">
                    
                        <button onClick={handleGoToBackBtn} className="  capitalize  w-auto p-2 rounded-xl text-white bg-indigo-900 transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110 hover:animate-bounce">
                            check for another place
                        </button>
                </div>
                {/* Location */}
                <div className="mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="800">
                    Location: {state.getState().weather.name}
                </div>
                {/* Weather Container */}

                <div data-aos="fade-up" data-aos-delay="1100" className="bg-gray-300 font-semibold p-8 rounded-md shadow-2xl w-auto h-auto mt-2 ">
                    <h1 className="underline text-2xl">Today's Weather</h1>
                    <div className="capitalize  flex flex-col mt-4 mb-5 space-y-2">
                        <span>current temprature:{state.getState().weather.main.temp}C</span>
                        <span>humidity: {state.getState().weather.main.humidity}%</span>
                        <span>precipitation: {state.getState().weather.wind.speed}m</span>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" className="w-16 ml-8 mb-5" alt="temprature-logo"></img>
                    </div>
                    <div>
                        current status: {state.getState().weather.weather[0].main}
                    </div>
                </div>


            </div>
        </div>
         <Forecast/>
      </>
    );

}

export default WeatherData;