
import { PropTypes } from 'prop-types';

const RoomCard = ({room}) => {
    const{RoomImages,RoomDescription,PricePerNight,Features}=room
    return (
        <div className="flex flex-col w-fit border items-center shadow-2xl justify-center rounded-2xl max-w-sm mx-auto">
            <div className=" bg-transparent object-cover rounded-2xl ]"><img className='w-[250px] md:w-[300px] rounded-2xl object-cover h-64' src={RoomImages}  /></div>

            <div className="w-56 -mt-24 overflow-hidden bg-opacity-60 bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{RoomDescription}</h3>
                <h3 className="py-2 bg-opacity-60 bg-neutral-300 space-x-2 font-medium tracking-wide text-center text-gray-800 text-sm dark:text-white">{Features.map((feature,idx)=><span className="bg-gray-300" key={idx}>{feature},</span>)}</h3>

                <div className="flex bg-opacity-60 items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">${PricePerNight}</span>
                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-500 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Book now</button>
                </div>
            </div>
        </div>
    );
};
RoomCard.propTypes={
    room:PropTypes.object
}
export default RoomCard;