import { useEffect } from "react";
import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";
import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";
import MapPart from "../../Components/MapPart";
import 'react-responsive-modal/styles.css';

const Home = () => {
    // const navigateNew = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('modalBackground').classList.remove('hidden');     
        }, 1000);
    }, [])
    return (
        <div className=" md:px-10 px-6 py-16 ">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome to Hotel Spicy || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <FeturesRoom />
            <MapPart />
            <Review />
            <Newsletter />


            <div id="modalBackground" className="fixed top-0 left-0 right-0 w-full h-full bg-gray-900 bg-opacity-50 flex hidden justify-center items-center ">
               
                <div className="bg-white w-1/2 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Modal Title</h2>
                        {/* <!-- Close button --> */}
                        <button onClick={()=> document.getElementById('modalBackground').classList.add('hidden') } className="text-gray-500 hover:text-gray-700">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    
                </div>
            </div>


        </div>
    );
};

export default Home;