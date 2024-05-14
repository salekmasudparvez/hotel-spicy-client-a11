
import { PropTypes } from 'prop-types';
import { BsCheckCircle, BsExclamationTriangle } from 'react-icons/bs';
import { FaLuggageCart, FaRegCommentAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";



const RoomCard = ({ room }) => {
    const { RoomImages, title, PricePerNight, Features, Availability, _id, DiscountOffer } = room
    // const { user } = useAuth();


    const navigateList = useNavigate()
    const handleNavigate = (id) => {
        navigateList(`/rooms/${id}`)

    }


    return (
        <div className="flex flex-col w-fit border items-center shadow-2xl justify-center rounded-2xl max-w-sm mx-auto">
            <div onClick={() => handleNavigate(_id)} className="relative bg-transparent  rounded-2xl z-0]">
                <div className="w-[250px] md:w-[300px] md:h-[300px] h-[250px] object-cover"><img className=" w-[250px] md:w-[300px] md:h-[300px] h-[250px] rounded-2xl " src={RoomImages} /></div>
                {Availability ?
                    <div className=" absolute top-0  left-0 text-white badge badge-success gap-2">
                        <BsCheckCircle /> Available
                    </div> :
                    <div className="absolute top-0 left-0 text-white badge badge-error gap-2">
                        <BsExclamationTriangle /> Unavailable
                    </div>
                }
                <div>
                    <div className=" absolute top-0  right-0 text-white badge badge-info gap-2">
                        <FaRegCommentAlt /> Reviews({1})
                    </div>
                </div>
            </div>

            <div className={`w-56 z-10 -mt-24 overflow-hidden bg-opacity-60 bg-white ${DiscountOffer&& " border-2 border-yellow-400"} rounded-lg shadow-lg md:w-64 dark:bg-gray-800`}>
                {DiscountOffer && <div className="badge badge-neutral text-yellow-400">Discount : {DiscountOffer} %</div>}
                <h3 onClick={() => handleNavigate(_id)} className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>
                <h3 onClick={() => handleNavigate(_id)} className="py-2 bg-opacity-60 bg-neutral-300 space-x-2 font-medium tracking-wide text-center text-gray-800 text-sm dark:text-white">{Features.map((feature, idx) => <span className="bg-gray-300" key={idx}>{feature},</span>)}</h3>

                <div className="flex bg-opacity-60 items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    {DiscountOffer?<p onClick={() => handleNavigate(_id)} className="font-bold text-gray-800 dark:text-gray-200"><span className='line-through'>${PricePerNight}</span> <span>${ PricePerNight-PricePerNight*(DiscountOffer/100)}</span></p>
                    :<span onClick={() => handleNavigate(_id)} className="font-bold text-gray-800 dark:text-gray-200">${PricePerNight}</span>}
                    <Link to={`/rooms/${_id}`} className={`btn rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Book <FaLuggageCart /></Link>
                </div>
            </div>


        </div>


    );
};
RoomCard.propTypes = {
    room: PropTypes.object
}
export default RoomCard;