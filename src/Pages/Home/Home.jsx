import Banner from "../../Components/Banner";
import FeturesRoom from "../../Components/FeturesRoom";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-300px)] md:px-10 px-6 py-16">
            <Banner></Banner>
            <FeturesRoom/>
            {/* <Map/> */}
            <Review/>
            <Newsletter/>
            
        </div>
    );
};

export default Home;