import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo-Final.png'
import { FaBars } from 'react-icons/fa';
const Navbar = () => {

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/rooms'>Rooms</Link></li>
        <li><Link to='/myBookings'>My Bookings</Link></li>
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
                    <Link to='/login' className="btn rounded-sm md:btn-md btn-sm btn-outline">Log in</Link>
                    <Link to='/singup' className="btn rounded-sm md:btn-md btn-sm  btn-outline">Sign up</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;