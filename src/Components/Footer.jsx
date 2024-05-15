import Logo from '../assets/logo/logo-Final.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#0A1121] text-white">
            <aside>
                  <img className='w-[150px] bg-gray-200 object-contain rounded-badge bg-opacity-60' src={Logo} alt="Trivago" />
                <p>Hotel Spicy Industries Ltd.<br />Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Booking</a>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Hotel Spicy Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;