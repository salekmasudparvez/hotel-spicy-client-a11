import axios from "axios";
import useAuth from "../../../../Hook/useAuth";
import Fileupload from "./Fileupload";
import { toast } from 'react-hot-toast';
import { useState } from "react";


const Upload = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const handleUpload = async (event) => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const RoomTitle = form.RoomTitle.value;
        const price = form.price.value;
        const roomDescription = form.roomDescription.value;
        const roomSize = form.roomSize.value;
        const image = event.target.image.files[0];
        const fetures = form.fetures.value.split(',');
        const discount = form.discount.value;
        if (!name || !email) {
            setLoading(false);
            return toast.error('Something went wrong')
        }
        if (!RoomTitle) {
            setLoading(false);
            return toast.error('Please provide a Room Title')
        }
        if (!price || price < 0) {
            setLoading(false);
            if (!price) {
                return toast.error('Please provide a Price')
            }
            if (price < 0) {
                return toast.error('Price should be positive value')
            }
        }
        if (!roomDescription) {
            setLoading(false);
            return toast.error('Please provide a Room Description')
        }
        if (!roomSize) {
            setLoading(false);
            return toast.error('Please provide a Room Size')
        }
        if (!image) {
            setLoading(false);
            return toast.error('Please upload an image')
        }
        if (!fetures.length) {
            setLoading(false);
            return toast.error('Please provide at least one Feature')
        }
        const formData = new FormData()
        formData.append('image', image)
        try {
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
                }`,

                formData
            )
            const newRoomData = {
                reviewCount: "0",
                title: RoomTitle,
                description: roomDescription,
                PricePerNight: price,
                RoomSize: roomSize,
                Availability: true,
                RoomImages: data.data.display_url,
                DiscountOffer: discount || 0,
                Features: [
                    fetures
                ],
                adminEmail: user.email,
                status: "pending"
            }
          const uploadRooms =  await axios.post('https://hotel-server-kappa.vercel.app/addroom', newRoomData)
          .then(res=>{
            toast.success('Room added successfully')
            form.reset()
          })
           setLoading(false)
            
        } catch (error) {
           toast.error(error.message)
            setLoading(false)
        }

    }

    return (
        <section className="p-6 w-full h-screen overflow-y-auto  text-gray-900">
            <form onSubmit={handleUpload} className="bg-gray-300 rounded-xl space-y-6 py-6" >
                <div className=" flex  flex-col-reverse mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-2xl">Personal Inormation</p>
                            <p className="text-xs">Here will some admin personal infromation</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full  lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm">Admin's name</label>
                                <input id="name" readOnly type="text" value={user?.displayName} placeholder="Admin's name" className="w-full p-2 rounded-md focus:outline-none  text-gray-900  border-gray-800" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" readOnly type="email" name="email" value={user?.email} placeholder="Email" className="w-full p-2 rounded-md focus:outline-none text-gray-900  border-gray-700" />
                            </div>


                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-300">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium text-2xl">Room information</p>
                            <p className="text-xs">Please enter room's details</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Room's title</label>
                                <input id="username" type="text" placeholder="RoomTitle" name="RoomTitle" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-gray-400 border-gray-700" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Price per night</label>
                                <input id="website" type="number" placeholder="price" name="price" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-gray-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Room's description</label>
                                <textarea id="bio" name="roomDescription" placeholder="Enter your room description" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-gray-400 border-gray-700"></textarea>
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Room's Photo</label>

                                <Fileupload />
                            </div>
                            <div className="col-span-full ">
                                <label htmlFor="roomSize" className="text-sm">Room's size</label>
                                <input id="roomSize" type="text" placeholder="example: 20 sqm" name="roomSize" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                                <label htmlFor="Discount" className="text-sm">Discount</label>
                                <input id="Discount" type="number" placeholder="example:10" name="discount" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm">Fetures</label>
                                <input id="address" type="text" placeholder="example:Spacious living , Private terrace,Garden view..." name="fetures" className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700" />
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div className="w-full flex justify-center">
                    <button class="btn rounded hover:bg-sky-500 mx-auto ">
                        {loading && <span className={`loading loading-spinner`}></span>} <span className="tracking-widest">Submit</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Upload;