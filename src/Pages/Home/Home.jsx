import { useEffect } from "react";
import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import MapPart from "../../Components/MapPart";
import 'react-responsive-modal/styles.css';

const Home = () => {
    const navigateNew = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('my_modal_7').showModal()
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
            <MapPart />
            <Review />
            <Newsletter />
            {/* offers */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_7" className="modal">
                <div onClick={() => navigateNew('/rooms')} className="relative modal-box bg-no-repeat bg-cover bg-center min-h-[200px] bg-[url('https://i.postimg.cc/Y2TfwP8J/deluxe-queen-standard.jpg')]">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn bg-white btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-white text-lg">Deluxe Queen Room</h3>

                    <div className="bg-white absolute top-1/3 left-1/3 md:p-4 p2 rounded-sm -rotate-45"><h1 className="md:text-3xl text-xl font-bold text-yellow-500"> Discout 50%</h1></div>

                </div>
            </dialog>


        </div>
    );
};

export default Home;