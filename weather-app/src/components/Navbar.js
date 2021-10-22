import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Home from './Home';
import About from './About';
class Navbar extends Component {
    render() {
        return (

            <div className="flex flex-row items-center justify-around font-mono  bg-gray-700">
                <div className="flex ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_q0EprVAP9ZK02w7AuzgcIiRivSzoWLxTuA&usqp=CAU"
                        alt="logo" className="w-3/12 rounded-2xl m-2"
                    ></img>
                    
                </div>
                <div className="">
                    <ul className="hidden sm:flex space-x-4 text-3xl">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                </div>
                <div className="w-4/12 h-screen bg-red-300">
                    <ul className="sm:hidden space-x-4 text-3xl">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                    </ul>
                </div>

            </div>

        );
    }
}

export default Navbar;