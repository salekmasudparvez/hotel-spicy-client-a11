
import { PropTypes } from 'prop-types';
import { BsCheckCircle, BsExclamationTriangle } from 'react-icons/bs';
import { FaLuggageCart, FaRegCommentAlt } from 'react-icons/fa';
import {  useNavigate } from 'react-router-dom';

const RoomCard = ({ room }) => {
    const { RoomImages, title, PricePerNight, Features, Availability ,_id} = room
    const navigateList = useNavigate()
    const handleNavigate=(id)=>{
        navigateList(`/rooms/${id}`)
        
    }
    console.log(room);
    return (
        <div to={`${_id}`} className="flex flex-col w-fit border items-center shadow-2xl justify-center rounded-2xl max-w-sm mx-auto">
            <div onClick={()=>handleNavigate(_id)} className="relative bg-transparent object-cover rounded-2xl z-0]"><img className=' w-[250px] md:w-[300px] rounded-2xl object-cover h-64' src={RoomImages} />
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
                    </div>:
                </div>
            </div>

            <div onClick={()=>handleNavigate(_id)} className="w-56 z-10 -mt-24 overflow-hidden bg-opacity-60 bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>
                <h3 className="py-2 bg-opacity-60 bg-neutral-300 space-x-2 font-medium tracking-wide text-center text-gray-800 text-sm dark:text-white">{Features.map((feature, idx) => <span className="bg-gray-300" key={idx}>{feature},</span>)}</h3>

                <div className="flex bg-opacity-60 items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">${PricePerNight}</span>
                    <a className={`btn rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Book <FaLuggageCart /></a>
                </div>
            </div>
        </div>
    );
};
RoomCard.propTypes = {
    room: PropTypes.object
}
export default RoomCard;