import { Link } from "react-router-dom"
function Page_404() {

    return (
        <div className="flex flex-col items-center ">
            <div className="w-10/12 ">
                <div className="border border-black" >
                    <p className="font-extrabold "> seems like you have enetered a wrong location</p>
                </div>
                <p>Opps!</p>
                <div>
                    <p>Please check the spelling of the location and try again<Link to="/"> here</Link></p>
                </div>
            </div>

        </div>
    );

}

export default Page_404;