
import { PropTypes } from 'prop-types';
import { FaLuggageCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const RoomsList = ({ room }) => {
    const { RoomImages, title, PricePerNight, Availability, DiscountOffer, _id } = room
    const navigateList = useNavigate()

    const handleNavigate = (id) => {
        navigateList(`/rooms/${id}`)

    }
    return (
        <>
            {DiscountOffer ?
                <tr className=" border-opacity-20 border-2 border-yellow-400  text-center hover:bg-neutral-300 ">
                    <td onClick={() => handleNavigate(_id)} className="p-3 ">
                        <div className="avatar">
                            <div className="w-24 mask mask-hexagon">
                                <img src={RoomImages} />
                            </div>
                        </div>
                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3">
                        <p>{title}</p>
                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3 ">
                        <p>{Availability ? "Yes" : "No"}</p>

                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3">
                        <p className="text-gray-400"><span className='line-through'>${PricePerNight}</span> <span>${ PricePerNight-PricePerNight*(DiscountOffer/100)}</span></p>
                    </td>
                    <td className="">
                        <a onClick={() => handleNavigate(_id)} className={`btn rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Book <FaLuggageCart /></a>
                    </td>
                </tr> :
                <tr className="border-b border-opacity-20 border-gray-700  text-center hover:bg-neutral-300 ">
                    <td onClick={() => handleNavigate(_id)} className="p-3 ">
                        <div className="avatar">
                            <div className="w-24 mask mask-hexagon">
                                <img src={RoomImages} />
                            </div>
                        </div>
                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3">
                        <p>{title}</p>
                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3 ">
                        <p>{Availability ? "Yes" : "No"}</p>

                    </td>
                    <td onClick={() => handleNavigate(_id)} className="p-3">
                        <p className="text-gray-400">{PricePerNight}$</p>
                    </td>
                    <td className="">
                        <a onClick={() => handleNavigate(_id)} className={`btn rounded-sm btn-md btn-outline ${!Availability && "btn-disabled"}`}>Book <FaLuggageCart /></a>
                    </td>
                </tr>
            }
        </>
    );
};

RoomsList.propTypes = {
    room: PropTypes.object
}

export default RoomsList;
