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
                        <img src="https://miro.medium.com/max/512/1*hiZL1BonvYRL5hlzxops3A.png"
                            alt="logo" className="w-3/12 rounded-full m-2"
                        ></img>

                    </div>
                    <div className="">
                        <ul className="flex space-x-4 text-3xl">
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