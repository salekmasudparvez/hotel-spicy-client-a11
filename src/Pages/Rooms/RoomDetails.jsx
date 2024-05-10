import { FaLuggageCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const data = useLoaderData();
    
    const { RoomImages, title,description, PricePerNight, Features, Availability,RoomSize, _id } = data
    console.log(_id);
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
                        <div> <a className={`btn rounded-sm btn-outline ${!Availability && "btn-disabled"}`}>Book <FaLuggageCart /></a></div>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default RoomDetails;