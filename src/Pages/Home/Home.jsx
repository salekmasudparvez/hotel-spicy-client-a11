import { useEffect } from "react";
import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MapPart from "../../Components/MapPart";



const Home = () => {
    const navigateNew = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('my_modal_4').showModal()
        }, 1000);
    }, [])
    return (
        <div className=" md:px-10 px-6 py-16">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome to Hotel Spicy || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Banner></Banner>
            <FeturesRoom />
            <MapPart/>
            <Review />
            <Newsletter />
            {/* offers */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="my_modal_4" className="modal rounded-sm">
                <div className="modal-box rounded-sm">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle border-none outline-none btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Deluxe Queen Room</h3>
                    <div onClick={()=> navigateNew('/rooms')}>
                        <img className="relative" src="https://i.postimg.cc/Y2TfwP8J/deluxe-queen-standard.jpgnpm " />
                        <div  className="bg-white absolute top-1/2 left-1/2 p-4 rounded-sm -rotate-45"><h1 className="text-3xl font-bold text-yellow-500"> Discout 50%</h1></div>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Home;