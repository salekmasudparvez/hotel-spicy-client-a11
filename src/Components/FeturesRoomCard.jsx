
import { PropTypes } from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const FeturesRoomCard = ({feture}) => {
    const {feature,feature_description,image}=feture

    return (
        <div data-aos="zoom-in"  data-aos-duration="1000"  data-aos-delay="500" className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl dark:bg-gray-800">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <img className="h-6" src={image}  />
            </span>

            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">{feature}</h1>

            <p className="text-gray-500 dark:text-gray-300">
               {feature_description}
            </p>           
        </div>
    );
};
FeturesRoomCard.propTypes={
    feture:PropTypes.object
}

export default FeturesRoomCard;