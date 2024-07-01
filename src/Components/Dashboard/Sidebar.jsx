import { Link, NavLink } from "react-router-dom";
import useRole from "../../Hook/useRole";
import { FaUsers } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import useAuth from "../../Hook/useAuth";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { BsBookmarkFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import { AiFillFolder } from "react-icons/ai";




const Sidebar = () => {
    const [role, isLoading] = useRole();
    const [open, setopen] = useState(false);
    console.log(open)

    const { LogOutUser } = useAuth()
    const hostSideBarLink = <>

        <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard" ><span className="text-xl"><FaUsers /></span>All users</NavLink></a>
        <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/allrooms" ><span className="text-xl"><IoHomeOutline /></span>All Rooms</NavLink></a>
        <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/balance" ><span className="text-xl"><FaMoneyCheckDollar /></span>Balance</NavLink></a>
    </>
    const guestSideBarLink =<>
     <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/guest" ><span className="text-xl"><BsBookmarkFill /></span>My booking</NavLink></a>
    </>
    const adminSideBarLink =<>
     <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/admin" ><span className="text-xl"><FaUpload /></span>Upload</NavLink></a>
     <a><NavLink end className={({ isActive }) => isActive ? "bg-base-100 px-3 py-2 rounded whitespace-nowrap text-gray-700 flex boder text-left gap-2 items-center" : "px-3 hover:bg-gray-100 border whitespace-nowrap py-2 flex rounded text-second text-left md:w-full gap-2 items-center"} to="/dashboard/admin/allrooms" ><span className="text-xl"><AiFillFolder /></span>All rooms</NavLink></a>
    

     

    </>
    return (
        <div>
            <div className="lg:hidden block pl-3 pt-3 pr-2 h-fit">
                <div className="btn btn-circle z-20 absolute top-3 left-4"> 
                        <FaBars  
                        onClick={()=>setopen(true)}
                        className={ `text-2xl ${open ? "hidden":"block"}`}
                        />   
                        <RxCross1
                        onClick={()=>setopen(false)}
                        className={ `text-2xl ${open ? "block":"hidden"}`}
                        />
                </div>
                <div
                    
                    className={`absolute top-14 left-2 menu menu-sm dropdown-content ${open?"flex":"hidden"} bg-base-100 rounded-box z-20 mt-3 w-52 p-2 shadow`}>
                    {
                        role === "host" && hostSideBarLink
                    }
                    {
                        role==="guest" && guestSideBarLink
                    }
                    {
                        role==="admin" && adminSideBarLink
                    }
                    <Link to="/" className=" rounded-sm py-1 border flex gap-2 items-center justify-start px-3"><IoMdArrowRoundBack /> Home</Link>
                    <a onClick={LogOutUser} className="btn rounded-sm py-1 border btn-block"><MdLogout /> Logout</a>
                </div>
            </div>
            <div className="menu bg-base-200 lg:flex hidden flex-col justify-between text-base-content min-h-screen h-full w-fit p-4">

                {/* Sidebar content here */}
                <div className="flex flex-col whitespace-nowrap gap-3">
                    <h1 className="text-xl font-bold text-center whitespace-nowrap p-3">
                        {role === "host" && "Host Pannel"}
                        {role === "admin" && "Admin Pannel"}
                        {role === "guest" && "Dashboard"}
                        </h1>
                    {
                        role === "host" && hostSideBarLink
                    }
                    {
                        role==="guest" && guestSideBarLink
                    }
                    {
                        role==="admin" && adminSideBarLink
                    }
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <Link to="/" className="btn rounded-sm py-1 border btn-block"><IoMdArrowRoundBack /> Home</Link>
                    <a onClick={LogOutUser} className="btn rounded-sm py-1 border btn-block"><MdLogout /> Logout</a>

                </div>
            </div>
        </div>

    );
};

export default Sidebar;