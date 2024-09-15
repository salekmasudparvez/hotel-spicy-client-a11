import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Navitem = ({name,to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isPending ? " font-semibold lg:border-b-2 border  lg:border-l-0 lg:border-b-[#5A95CE] lg:border-r-0 border-t-0 lg:bg-white bg-gray-200 lg:w-fit p-2 w-full  text-[#1a1a1a]" : isActive ? "font-semibold lg:border-b-2 lg:border-b-[#5A95CE] border  lg:border-l-0 lg:border-r-0 border-t-0 lg:bg-white bg-gray-200 lg:w-fit p-2 w-full text-[#000000] transition-colors duration-500" : "hover:text-[#515151] font-semibold lg:w-fit p-2 w-full lg:hover hover:bg-gray-200 transition-colors duration-500"
            }
        >
            {name}
        </NavLink>
    );
};
Navitem.propTypes = {
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
export default Navitem;