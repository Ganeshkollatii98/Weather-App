import React, { useEffect} from 'react';
import AOS from "aos";
var Forecast = () => {
    useEffect(() => {
        
        AOS.init(
            {
                duration: 1000
            }
        );

       

    }, []);

    return (
        <div className="tracking-wide bg-gray-200 flex  flex-col items-center" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col items-center font-sans text-xl lg:w-10/12 sm:w-10/12 w-10/12" data-aos="fade-up" data-aos-delay="800">
                <div data-aos="fade-up" data-aos-delay="1000">
                    <h1 className="text-3xl underline uppercase mt-12">
                        Forecast
                    </h1>
                </div>

                {/* display Forecast */}
                <div data-aos="fade-up" data-aos-delay="1200" className="flex flex-col items-center lg:flex-row lg:items-center lg:flex-wrap lg:justify-evenly sm:my-3 mt-8 ">
                    <div className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-11/12 md:w-11/12 lg:w-5/12  lg:flex-wrap h-auto p-4 bg-gray-300  m-4">
                        {/* Forcast Date */}
                        <h1 className="underline text-xl">24/10 Forecast</h1>
                        {/* Forecast weather data */}
                        <div className="flex flex-col items-center">
                            <img src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1635010178~hmac=a05e0a4d18945e240876740f74d83a96" className="w-16 mt-5 mb-5 " alt="temprature-logo"></img>
                            <div className="capitalize flex flex-col justify-around space-y-2">
                                <span>maximum temprature: 31.14 c</span>
                                <span>minimum temprature: 32.14 c</span>
                                <span className="text-center">humidity: 31%</span>
                                <span className="text-center"> precipitation: 4.27 mm</span>
                            </div>

                        </div>
                    </div>

                       {/* secomd */}
                       <div  className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-11/12 md:w-11/12 lg:w-5/12  lg:flex-wrap h-auto p-4 bg-gray-300  m-4">
                        {/* Forcast Date */}
                        <h1 className="underline text-xl">24/10 Forecast</h1>
                        {/* Forecast weather data */}
                        <div className="flex flex-col items-center">
                            <img src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1635010178~hmac=a05e0a4d18945e240876740f74d83a96" className="w-16 mt-5 mb-5 " alt="temprature-logo"></img>
                            <div className="capitalize flex flex-col justify-around space-y-2">
                                <span>maximum temprature: 31.14 c</span>
                                <span>minimum temprature: 32.14 c</span>
                                <span className="text-center">humidity: 31%</span>
                                <span className="text-center"> precipitation: 4.27 mm</span>
                            </div>

                        </div>
                    </div>

                    {/* third */}
                    <div className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-11/12 md:w-11/12 lg:w-5/12  lg:flex-wrap h-auto p-4 bg-gray-300  m-4">
                        {/* Forcast Date */}
                        <h1 className="underline text-xl">24/10 Forecast</h1>
                        {/* Forecast weather data */}
                        <div className="flex flex-col items-center">
                            <img src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1635010178~hmac=a05e0a4d18945e240876740f74d83a96" className="w-16 mt-5 mb-5 " alt="temprature-logo"></img>
                            <div className="capitalize flex flex-col justify-around space-y-2">
                                <span>maximum temprature: 31.14 c</span>
                                <span>minimum temprature: 32.14 c</span>
                                <span className="text-center">humidity: 31%</span>
                                <span className="text-center"> precipitation: 4.27 mm</span>
                            </div>

                        </div>
                    </div>
                    {/* fourth */}
                    <div className="flex flex-col items-center rounded-xl shadow-lg hover:shadow-2xl w-full sm:w-11/12 md:w-11/12 lg:w-5/12  lg:flex-wrap h-auto p-4 bg-gray-300  m-4">
                        {/* Forcast Date */}
                        <h1 className="underline text-xl">24/10 Forecast</h1>
                        {/* Forecast weather data */}
                        <div className="flex flex-col items-center">
                            <img src="https://cdn-icons.flaticon.com/png/128/3406/premium/3406981.png?token=exp=1635010178~hmac=a05e0a4d18945e240876740f74d83a96" className="w-16 mt-5 mb-5 " alt="temprature-logo"></img>
                            <div className="capitalize flex flex-col justify-around space-y-2">
                                <span>maximum temprature: 31.14 c</span>
                                <span>minimum temprature: 32.14 c</span>
                                <span className="text-center">humidity: 31%</span>
                                <span className="text-center"> precipitation: 4.27 mm</span>
                            </div>

                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    );

}

export default Forecast;