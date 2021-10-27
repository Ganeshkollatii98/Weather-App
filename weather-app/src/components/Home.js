import React, { Component } from 'react';
import AOS from "aos";
import { state } from '../index'
import WeatherData from './WeatherData';
import { insertWeather, change404PageStatus,insertForecast, changeResultStatus } from '../Actions/Action'


const API_Key = "f5e6dffd4e0cd8179e88918f4e11a0e6"

class SearchUi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            WeatherData: "",
            city: "",
            result: false,
            page_404: false
        }
    }


    componentDidMount() {
        //Animation on scroll initilization
        AOS.init({ duration: 1000 });

        console.log("componentDidMount in Search UI", state.getState())


    }
    handleUserInput = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    // Fetch Weather Data from API 
    handleSearchButton = () => {
        state.subscribe(() => {
            this.forceUpdate();
        })
        const city = this.state.city;
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`
        const URL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_Key}`
        fetch(URL).then((responce) => {
            if (responce.status >= 400) {
                state.dispatch(change404PageStatus(true))
            }
            return responce.json();
        }).then(responce => {
            this.setState({
                result: true
            })
            state.dispatch(insertWeather({ responce }))
            state.dispatch(changeResultStatus(true))
        })

        // Forecast Data Fetch
        fetch(URL2).then((responce) => {
            return responce.json();
        }).then(responce => {
            state.dispatch(insertForecast(responce))
        })
        // this.forceUpdate()
    }




    render() {
        const { foundResult,page404Status } = state.getState()
        console.log(foundResult,page404Status)
        console.log("weather STATE",state.getState())
        return (
            <>
                
                {foundResult === true ? <WeatherData /> :
                    <div className="font-sans flex flex-col items-center h-full sm:flex">

                        <img data-aos="fade-up" src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" alt="app- logo" className="mt-12 w-4/12 lg:w-2/12 md:w-3/12  sm:w-4/12  m-5 "></img>

                        <div className="capitalize font-bold mb-2" data-aos="fade-up" data-aos-delay="200">
                            the weatherMan project
                        </div>
                        <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
                            <span className="text-sm font-medium " >Get weather details form all over the world</span>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600">
                            <input type="text" onChange={this.handleUserInput} placeholder="Enter a location" className="outline-none border-black p-1 pl-2 border-2 text-indigo-900 font-bold rounded-lg placeholder-gray-500  focus:outline-none  focus:border-purple-900 transition duration-500 transform hover:scale-105 hover:border-blue-900  "></input>
                            <button type="submit" onClick={this.handleSearchButton} className="capitalize ml-4 w-auto p-2 rounded-xl text-white bg-indigo-900 transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110" >check weather</button>
                        </div>
                    </div>



                }
            </>


        );
    }
}



export default SearchUi;




