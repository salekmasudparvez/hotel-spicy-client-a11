import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Error from "../Pages/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Profile from "../Pages/Profile/Profile";
import AllUsers from "../Pages/Dashboard/Host/AllUsers/Allusers";
import Allrooms from "../Pages/Dashboard/Host/Alrooms/Allrooms";
import Balance from "../Pages/Dashboard/Host/Balance/Balance";
import HostRoutes from "../PrivateRoutes/HostRoutes";
import Mybooking from "../Pages/Dashboard/Guest/Mybooking/Mybooking";
import SingUpAdmin from "../Pages/Singup/SingUpAdmin";
import Upload from "../Pages/Dashboard/Admin/Upload/Upload";
import Viewallrooms from "../Pages/Dashboard/Admin/Viewallrooms/Viewallrooms";




const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/profile',
            element:<PrivateRoutes><Profile/></PrivateRoutes>
        },
        {
            path:'/rooms',
            element:<Rooms/>,
            loader:()=>fetch('https://hotel-server-kappa.vercel.app/roomsCount')
        },        
        {
            path:'/rooms/:id',
            element: <RoomDetails/> ,
            loader:({params})=>fetch(`https://hotel-server-kappa.vercel.app/rooms/${params.id}`)
        },        
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/aboutus',
            element:<AboutUs/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/singup',
            element:<Singup/>
        },
        {
            path:'/singup/admin',
            element:<SingUpAdmin/>
        },
        
      ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout/>,
        children:[
            // host
            {
                path:'/dashboard',
                element:<HostRoutes><AllUsers/></HostRoutes>
            },
            {
                path:'/dashboard/allrooms',
                element:<HostRoutes><Allrooms/></HostRoutes>
            },
            {
                path:'/dashboard/balance',
                element:<HostRoutes><Balance/></HostRoutes>
            },
            //guest
            {
                path:'/dashboard/guest',
                element:<Mybooking/>
            },
            //admin
            {
                path:'/dashboard/admin',
                element:<Upload/>
            },
            {
                path:'/dashboard/admin/allrooms',
                element:<Viewallrooms/>
            },
           

        ]
    }
  ]);

export default Routes;