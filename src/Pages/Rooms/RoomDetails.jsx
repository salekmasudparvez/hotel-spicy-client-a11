import { FaLuggageCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";


const RoomDetails = () => {
    const data = useLoaderData();
    const { user } = useAuth();
    const { RoomImages, title, description, PricePerNight, Features, Availability, RoomSize } = data

    const handleBoking = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const date = e.target.date.value;
        console.log(email, name, date);
    }
    const {isPending}=useQuery({
       queryKey:['mybooking'],
       queryFn:()=>fetch('')
    })


    return (
        <section className=" text-gray-900">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full lg:grid lg:grid-cols-12">
                    <img src={RoomImages} className="object-cover rounded-md  w-full h-64  sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl">{title}</h3>
                        <p>{description}</p>
                        <span className="text-xs text-gray-400">Sit Availability :{Availability ? "Yes" : "No"}</span>
                        <div className="flex justify-between"><p> <span className="font-medium">Price Per Night</span> :{PricePerNight} $</p><p> <span className="font-medium">Room Size</span> :{RoomSize}</p> </div>
                        <div className="space-x-4">Fetures:{Features.map((feture, idx) => <span key={idx}>{feture},</span>)}</div>
                        <form onSubmit={handleBoking}>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow" name="name" placeholder="Username" value={user?.displayName} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                <input type="text" name="email" className="grow" placeholder="Email" value={user?.email} />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="date" name="date" className="grow" required />
                            </label>
                            <button type="submit" className={`btn btn-block rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Confirm Book <FaLuggageCart /></button>
                        </form>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default RoomDetails;