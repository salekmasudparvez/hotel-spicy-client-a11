
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

            <a  className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                <span className="mx-1">read more</span>
                <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    );
};
FeturesRoomCard.propTypes={
    feture:PropTypes.object
}

export default FeturesRoomCard;