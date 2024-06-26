import { FaLuggageCart } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import axios from "axios";
import ReviewPopup from "../Mybooking/ReviewPopup";
import SpacificReviewCard from "../../Components/SpacificReviewCard";
import SyncLoader from "react-spinners/ClipLoader";
import { useQuery } from "@tanstack/react-query";
//import Swal from 'sweetalert2'


const RoomDetails = () => {

    const data = useLoaderData();
    const { user } = useAuth();
    const navigateList = useNavigate();
    
  
    const { RoomImages, title, description, PricePerNight, Features, Availability, RoomSize, DiscountOffer, _id } = data;

    // const handleMyBooking =  e => {
    //     e.preventDefault()
    //     // if (user?.email === buyer?.email){return toast.error('Action not permitted!')}

    //     const clientEmail = e.target.email.value;
    //     const name = e.target.name.value;
    //     const bookingDate = e.target.date.value;
    //     const bookTitle = title;
    //     const image = RoomImages;
    //     const currentDate = new Date()

    //     const bookingID = _id;
    //     const Availability = false
    //     const newBooking = {
    //         clientEmail,
    //         name,
    //         bookingDate,
    //         bookingID,
    //         Availability,
    //         bookTitle,
    //         image,
    //         currentDate,

    //     }
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "question",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, Book it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //              axios.post('https://hotel-server-kappa.vercel.app/mybooking', newBooking)
    //              axios.patch(`https://hotel-server-kappa.vercel.app/rooms/${_id}`, { Availability: false })
    //              document.getElementById('my_modal_1').showModal();
    //             console.log(result.isConfirmed);
               
    //         }
    //       });
    // }
    const handleMyBooking =(event)=>{
        event.preventDefault()
        const getRoomData = {
            title,
            customerName:user.displayName,
            customerEmail:user.email,
            amount:PricePerNight - PricePerNight * (DiscountOffer / 100),
        }
        axios.post('http://localhost:5000/create-payment',getRoomData)
        .then(res=>{
            const redirectUrl = res.data.paymentUrl
            if(redirectUrl){
                window.location.replace(redirectUrl)
            }
        })
    }
    //reviews 
    const handleReview = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const name = e.target.name.value;
        const rating = e.target.ratings.value;
        const image = user?.photoURL || "https://vectorified.com/images/unknown-person-icon-12.png";
        const postDate = new Date()
        const BookingIdForReview = _id;
        const currentReview = {
            name,
            image,
            rating,
            postDate,
            comment,
            BookingIdForReview,
        }

        axios.post('https://hotel-server-kappa.vercel.app/myreview', currentReview)
            .then(response => {
                const data = response.data;
                if(data){    
                    navigateList(`/rooms`)}
            })
            
    }
    const{isLoading:reviewLoading,data:reviews}=useQuery({
        queryKey:['reviews',_id],
        queryFn:async()=>{
            const response = await axios.get(`http://localhost:5000/review?id=${_id}`)
            const data = response.data
            return data
        }
    })

     if(!user || reviewLoading){
        return ( <div className="min-h-screen w-full flex justify-center items-center"><SyncLoader height="100"
            width="100" color="#36d7b7" /></div>)
     }
    return (
        <section className=" text-gray-900">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
                    <img src={RoomImages} className="object-cover rounded-md  w-full h-64  sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl">{title}</h3>
                        <p>{description}</p>
                        <span className="text-xs text-gray-400">Sit Availability :{Availability ? "Yes" : "No"}</span>
                        <div className="flex justify-between"><div> <span className="font-medium">Price Per Night</span> :
                            {DiscountOffer ? <p className="font-bold text-gray-800 dark:text-gray-200"><span className='line-through'>${PricePerNight}</span> <span>${PricePerNight - PricePerNight * (DiscountOffer / 100)}</span></p>
                                : <span className="font-bold text-gray-800 dark:text-gray-200">${PricePerNight}</span>} </div><p> <span className="font-medium">Room Size</span> :{RoomSize}</p> </div>
                        <div className="space-x-4">Fetures:{Features.map((feture, idx) => <span key={idx}>{feture},</span>)}</div>
                        {user ? 
                        <form onSubmit={handleMyBooking}>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" name="name" placeholder="Username" value={user?.displayName || "unknown"} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="email" className="grow" placeholder="Unknown mail" value={user?.email || "unknown email"} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="date" name="date" className="grow" required />
                            </label>
                            <button type="submit" className={`btn btn-block rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Confirm Book <FaLuggageCart /></button>
                        </form> : <div className=" flex flex-col my-3 gap-3">
                            <div>
                                <h1 className="text-xl font-bold text-center">Please Log in or Sing up for Booking</h1>
                            </div>
                            <div className="space-x-3">
                                <Link to='/login' className="btn rounded-sm md:btn-md btn-sm btn-outline">Log in</Link>
                                <Link to='/singup' className="btn rounded-sm md:btn-md btn-sm  btn-outline">Sing up</Link>
                            </div>
                        </div>}
                    </div>
                </a>

            </div>
            {/* review of per card */}
            <div className="py-6">
                <div><h1 className="text-4xl font-bold text-center py-5">Review of this room</h1></div>
                {reviews?.length>=1 ?
                <div className="grid py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {reviews?.map((perRev,idx)=><SpacificReviewCard key={idx} perRev={perRev}></SpacificReviewCard>)}
                </div>:
                <div className="h-32 flex justify-center items-center bg-white"><h1 className="text-4xl text-bold text-gray-400 text-center">No reviews Yet</h1></div>
                }
            </div>
            {/* review modal */}
            <dialog id="my_modal_1" className="modal p-0">
                <div>
                    <ReviewPopup handleReview={handleReview} />

                </div>
            </dialog>
        </section>
    );
};

export default RoomDetails;