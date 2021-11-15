import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react"
import { change404PageStatus } from "../Actions/Action"
import { state } from "../index"

class Page_404 extends React.Component {
    constructor(){
        super()
        this.state={
            crossIconStatus:false
        }
    }
    handleCrossIcon = (event) => {
        console.log("clicked cross mark", event.target.classList)
        this.setState({
            crossIconStatus:true
        })


    }
    handleToGoBackHereLink = () => {
        state.dispatch(change404PageStatus(false))
    }
    render() {
          
        return (
            <div className="flex flex-col items-center relative top-10">
                <div className="w-11/12 ">
                    {this.state.crossIconStatus ? <div></div> :
                        <div className="flex justify-between items-center p-3 border border-red-200 rounded shadow-xl bg-red-200" >
                            <p className="font-bold text-red-800 "> Seems Like You have enetered a wrong location</p>
                            <img className="w-3 h-3" onClick={this.handleCrossIcon} src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="cross-mark"></img>
                        </div>}
                    <p className="my-2 font-bold text-gray-500 tracking-wide">Opps!</p>
                    <div>
                        <p className="tracking-wide font-semibold">Please check the spelling of the location and try again<Link to="/" className="text-blue-600 hover:underline" onClick={this.handleToGoBackHereLink}> here</Link>.</p>
                    </div>
                </div>

            </div>
        );
    }

}

export default Page_404;