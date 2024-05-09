import Banner from "../../Components/Banner";
import Newsletter from "../../Components/Newsletter";
import Review from "../../Components/Review";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-300px)] bg-[#F3F4F5] md:px-10 px-6 py-16">
            <Banner></Banner>
            {/* <Map/> */}
            <Review/>
            <Newsletter/>
        </div>
    );
};

export default Home;