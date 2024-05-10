import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";


const Routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/rooms',
            element:<Rooms/>
        },        
        {
            path:'/rooms/:id',
            element:<RoomDetails/>,
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
      ]
    },
  ]);

export default Routes;