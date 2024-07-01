import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-Final.png'
import { FaBars } from 'react-icons/fa';
import useAuth from '../Hook/useAuth';
import useRole from '../Hook/useRole';
const Navbar = () => {
    const { user, LogOutUser,loading } = useAuth();
    const [role,isLoading]=useRole();


    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rooms'>Rooms</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className='border-b w-full border-b-neutral-300'>
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn rounded-sm text-xl lg:hidden">
                            <FaBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'><img className='w-[144px] h-[50px] object-contain' src={Logo} alt="Trivago" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    {user ?
                        <>
                            <div className="avatar online dropdown dropdown-end dropdown-hover">
                                <div tabIndex={0} role="button" className="w-14 hover:border rounded-full">
                                    <img src={user.photoURL ? user.photoURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu rounded  bg-white border  z-[1] w-52 p-2 shadow ">
                                    <li className='border'><Link className='rounded-none' to="/profile">Profile</Link></li>
                                    {role==="host" && <li className='border'><Link className='rounded-none' to="/dashboard">Dashboard</Link></li>}
                                    {role==="guest" && <li className='border'><Link className='rounded-none' to="/dashboard/guest">Dashboard</Link></li>}
                                    {role==="admin" && <li className='border'><Link className='rounded-none' to="/dashboard/admin">Dashboard</Link></li>}
                                </ul>
                            </div>
                            <div>
                                <a onClick={LogOutUser} className="btn rounded-sm md:btn-md btn-sm btn-outline">Log out</a>
                            </div>
                        </> :
                        <>
                            <Link to='/login' className="btn rounded-sm md:btn-md btn-sm btn-outline">Log in</Link>
                            <Link to='/singup' className="btn rounded-sm md:btn-md btn-sm  btn-outline">Sing up</Link>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;