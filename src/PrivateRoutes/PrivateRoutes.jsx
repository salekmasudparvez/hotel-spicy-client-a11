import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";


const PrivateRoutes = ({children}) => {
    const {user, loading}=useAuth();
    if(loading){
        return <div className="w-full flex justify-center items-center mb-10">
       <span className="loading loading-spinner loading-lg text-accent"></span>
    </div>
    }

    if(user){
        return <>
        {children}
        </>
    }
        return <Navigate to='/singup' replace={true}></Navigate>
    
};

export default PrivateRoutes;