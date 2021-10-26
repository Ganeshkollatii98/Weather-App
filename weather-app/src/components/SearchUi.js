import { useEffect} from 'react';
import AOS from "aos";

var SearchUi = () => {
    useEffect(() => {
        AOS.init(
            {
                duration:1000
            }
        );
        
      }, []);
    
    return (
        <div className=" hidden font-sans flex flex-col items-center h-full sm:flex  ">
            
                <img data-aos="fade-up" src="https://cdn-icons-png.flaticon.com/512/1163/1163763.png" alt="app- logo" className="mt-12 w-4/12 lg:w-2/12 md:w-3/12  sm:w-4/12  m-5 "></img>
            
            <div className="capitalize font-bold mb-2" data-aos="fade-up" data-aos-delay="200">
                the weatherMan project
            </div>
            <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
                <span className="text-sm font-medium " >Get weather details form all over the world</span>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
                <input type="text" placeholder="Enter a location" className="outline-none border-black p-1 pl-2 border-2 text-indigo-900 font-bold rounded-lg placeholder-gray-500  focus:outline-none  focus:border-purple-900 transition duration-500 transform hover:scale-105 hover:border-blue-900  "></input>
                <button type="submit" className="capitalize ml-4 w-auto p-2 rounded-xl text-white bg-indigo-900 transition duration-500 ease-in-out  hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110" >check weather</button>
            </div>
        </div>

    );

}

export default SearchUi;