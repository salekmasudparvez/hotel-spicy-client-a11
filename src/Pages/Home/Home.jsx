
import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";
import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";
import MapPart from "../../Components/MapPart";
import { useEffect } from "react";
import { MdDiscount } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate =useNavigate()
    useEffect(()=>{
     setTimeout(() => {
        document.getElementById('my_modal_3').showModal()
     }, 1000);
    },[])
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
           
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box rounded relative">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-2xl text-sky-500">Deluxe Queen Room</h3>
                    <p className="py-4 rotate-45 absolute top-10 right-0 text-2xl text-white font-bold text-center my-6 bg-yellow-500 whitespace-nowrap flex items-center gap-2">Get 50% Discount <MdDiscount /></p>
                    <img onClick={()=>navigate('/rooms/6643708cea8afddffee1967d')} src="https://i.postimg.cc/Y2TfwP8J/deluxe-queen-standard.jpg" alt="room" />
                </div>
            </dialog>
        </div>
    );
};

export default Home;