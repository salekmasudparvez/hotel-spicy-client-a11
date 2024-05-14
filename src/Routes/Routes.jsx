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
import Mybooking from "../Pages/Mybooking/Mybooking";
import Error from "../Pages/Error/Error";



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
            path:'/rooms',
            element:<Rooms/>,
            loader:()=>fetch('http://localhost:5000/roomsCount')
        },        
        {
            path:'/rooms/:id',
            element: <RoomDetails/> ,
            loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
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
            path:'/mybooking',
            element:<PrivateRoutes><Mybooking/></PrivateRoutes> ,
            
        }
      ]
    },
  ]);

export default Routes;