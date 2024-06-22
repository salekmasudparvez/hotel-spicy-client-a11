import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Banner = () => {
    return (
        <div className='w-full'>
        <div className="relative"><img className="w-full  h-[500px]" src="https://i.postimg.cc/fWFHJSkt/banner.webp" alt="Hotel/mp4" />
        
         <div className="absolute top-0 bg-opacity-60 text-center flex flex-col gap-3 items-center justify-center bg-black text-white h-full">
            <h1 data-aos="zoom-in"  data-aos-duration="1000" className="md:w-3/5 md:text-6xl text-2xl font-bold">We compare hotel prices from 100s of sites</h1>
            <h1 data-aos="zoom-in"  data-aos-delay="300" data-aos-duration="1000" className="text-xl md:w-3/5 font-semibold">We’ll do the searching. You do the saving.</h1>
            <p data-aos="zoom-in"  data-aos-delay="400"  data-aos-duration="1000" className="text-base md:w-3/5 font-light">The platform operates by aggregating hotel and accommodation listings from various booking sites, allowing users to easily compare prices and availability across multiple platforms. Users can search for accommodations based on their destination, travel dates, and preferences, and then sort and filter results according to factors such as price, location, and user ratings.</p>
        </div>
        </div>
       
      </div>
    );
};

export default Banner;