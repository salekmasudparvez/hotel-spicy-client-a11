import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className="bg-[#F3F4F5] min-h-[calc(100vh-300px)]">
        <Outlet />
        </div>
        <Footer/>
            
        </>
    );
};

export default MainLayout;