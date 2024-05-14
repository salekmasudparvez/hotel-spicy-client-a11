import { useEffect } from "react";
import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";
import { Helmet } from "react-helmet";

const Home = () => {
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
            {/* <Map/> */}
            <Review />
            <Newsletter />
            {/* offers */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Deluxe Queen Room</h3>
                    <div><img src="" /></div>
                </div>
            </dialog>

        </div>
    );
};

export default Home;