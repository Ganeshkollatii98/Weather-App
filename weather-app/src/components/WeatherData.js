
import { useEffect } from 'react';
import AOS from "aos";
import { Link } from "react-router-dom"
var WeatherData = () => {
    useEffect(() => {
        AOS.init(
            {
                duration: 1000
            }
        );

    }, []);
    return (
        <div className="tracking-wide bg-gray-200 flex  flex-col items-center ">
            <div className=" font-sans text-xl sm:w-8/12 w-10/12" data-aos="fade-up" data-aos-delay="400">

                <div className=" mt-12" data-aos="fade-up" data-aos-delay="600">
                    <Link to="/">
                        <button className="  capitalize  w-auto p-2 rounded-xl text-white bg-indigo-900 transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110 hover:animate-bounce">
                            check for another place
                        </button></Link>
                </div>
                {/* Location */}
                <div className="mt-4 text-gray-800" data-aos="fade-up" data-aos-delay="800">
                    Location: Bhimavaram
                </div>
                {/* Weather Container */}

                <div data-aos="fade-up" data-aos-delay="1100" className="bg-gray-300 font-semibold p-8 rounded-md shadow-2xl w-auto h-auto mt-2 ">
                    <h1 className="underline text-2xl">Today's Weather</h1>
                    <div className="capitalize  flex flex-col mt-4 mb-5 space-y-2">
                        <span>current temprature: 24.56C</span>
                        <span>humidity: 90%</span>
                        <span>precipitation: 2.02m</span>
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" className="w-16 ml-8 mb-5" alt="temprature-logo"></img>
                    </div>
                    <div>
                        current status: Rain
                    </div>
                </div>


            </div>
        </div>

    );

}

export default WeatherData;