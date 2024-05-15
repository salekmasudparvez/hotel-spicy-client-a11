import ReviewCard from "./ReviewCard";
import {useEffect,useState} from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const Review = () => {
    const [reviews, setReviews]= useState([])

    useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://hotel-server-kappa.vercel.app/review')
      setReviews(data)
    }
    getData()
  }, [])

//   console.log(reviews);


    return (
        <div>
            <div><h1 data-aos="zoom-in"  data-aos-duration="1000" className="text-4xl font-semibold text-neutral-600 text-center py-10">WHAT CUSTOMERS SAY</h1></div>
            {/* <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                {reviews.map((reviewPer,idx)=><ReviewCard key={idx} reviewPer={reviewPer}></ReviewCard>)}
            </div> */}
            <div className="carousel space-x-3 rounded-box">
                {reviews.map((reviewPer,idx)=><ReviewCard key={idx} reviewPer={reviewPer}></ReviewCard>)}
            </div>
        </div>
    );
};

export default Review;