import { Link } from "react-router-dom"
function Page_404() {
    var handleCrossIcon=(event)=>{
        console.log("clicked cross mark",event)
    }
    return (
        <div className="flex flex-col items-center relative top-10">
            <div className="w-11/12 ">
                <div className="flex justify-between items-center p-3 border border-red-200 rounded shadow-xl bg-red-200" >
                    <p className="font-bold text-red-800 "> Seems Like You have enetered a wrong location</p>
                    <img className="w-3 h-3" onClick={handleCrossIcon} src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="cross-mark"></img>
                </div>
                <p className="my-2 font-bold text-gray-500 tracking-wide">Opps!</p>
                <div>
                    <p className="tracking-wide font-semibold">Please check the spelling of the location and try again<Link to="/" className="text-blue-600 hover:underline"> here</Link>.</p>
                </div>
            </div>

        </div>
    );

}

export default Page_404;