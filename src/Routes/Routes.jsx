import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";


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
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/aboutus',
            element:<AboutUs/>
        },
      ]
    },
  ]);

export default Routes;