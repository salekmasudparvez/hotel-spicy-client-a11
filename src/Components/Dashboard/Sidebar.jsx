import { Link, NavLink } from "react-router-dom";
import useRole from "../../Hook/useRole";
import { FaUsers } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import useAuth from "../../Hook/useAuth";



const Sidebar = () => {
    const [role,isLoading]= useRole()
    const {LogOutUser}= useAuth()

    return (
    <div className="menu bg-base-200 flex flex-col justify-between text-base-content min-h-screen h-full w-fit p-4">
       
        {/* Sidebar content here */}
         <div className="flex flex-col whitespace-nowrap gap-3">
             <h1 className="text-xl font-bold text-center whitespace-nowrap p-3">{role==="host" && "Host Pannel"}</h1>
         {
            role==="host"&&
            <>
           
            <a><NavLink end className={({isActive})=>isActive?"bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center":"px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard" ><span className="text-xl"><FaUsers /></span>All users</NavLink></a>
            <a><NavLink end className={({isActive})=>isActive?"bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center":"px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/allrooms" ><span className="text-xl"><IoHomeOutline /></span>All Rooms</NavLink></a>
            <a><NavLink end className={({isActive})=>isActive?"bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center":"px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/balance" ><span className="text-xl"><FaMoneyCheckDollar /></span>Balance</NavLink></a>
            </>
         }
         </div>
         <div className="flex flex-col justify-center items-center ">
            <Link to="/" className="btn rounded-sm py-1 border btn-block"><IoMdArrowRoundBack /> Home</Link>
            <a onClick={LogOutUser} className="btn rounded-sm py-1 border btn-block"><MdLogout /> Logout</a>
            
         </div>
    </div>
    );
};

export default Sidebar;