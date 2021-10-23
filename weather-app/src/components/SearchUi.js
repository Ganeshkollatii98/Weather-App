import React, { Component } from 'react';

var SearchUi = () => {

    return (
        <div className="font-sans h-full flex flex-col items-center ">
            <div>
                <img src="https://miro.medium.com/max/512/1*hiZL1BonvYRL5hlzxops3A.png" alt="app- logo"></img>
            </div>
            <div className="capitalize font-bold mb-2">
                the weatherMan project
            </div>
            <div className="mb-8">
                <span className="text-sm font-medium ">Get weather details form all over the world</span>
            </div>
            <div>
                <input type="text" placeholder="Enter a location" className="outline-none border-black p-1 pl-2 border-2 text-indigo-900 font-bold rounded-lg placeholder-gray-500  focus:outline-none  focus:border-purple-900 transition duration-500 transform hover:scale-105 hover:border-blue-900  "></input>
                <button type="submit" className="capitalize ml-4 w-auto p-2 rounded-xl text-white bg-indigo-900 transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110" >check weather</button>
            </div>
        </div>

    );

}

export default SearchUi;