import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Home from './Home';
import About from './About';
class Navbar extends Component {
    render() {
        return (
            <>
                <div className="flex   flex-row items-center justify-around font-mono  bg-gray-700">
                    <div className="flex ">
                        <img src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png"
                            alt="logo" className="w-2/12 sm:w-1/12 sm:ml-4 ml-8 m-2"
                        ></img>

                    </div>
                    <div className="">
                        <ul className="flex justify-between space-x-4 text-3xl">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/about"><li>About</li></Link>
                        </ul>
                    </div>


                </div>


            </>
        );
    }
}

export default Navbar;