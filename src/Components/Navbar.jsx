import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-Final.png'
import { FaBars } from 'react-icons/fa';
import useAuth from '../Hook/useAuth';
const Navbar = () => {
    const {user,LogOutUser}=useAuth();
    

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rooms'>Rooms</Link></li>
        {user && <li><Link to='/mybooking'>My Bookings</Link></li>}
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <nav className='border-b border-b-neutral-300'>
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
                <div className="navbar-end gap-3 ">
                    {user ?
                        <>
                            <div className="avatar online">
                                <div className="w-14 rounded-full">
                                    <img src={user.photoURL?user.photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"} />
                                </div>
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
        </nav>
    );
};

export default Navbar;