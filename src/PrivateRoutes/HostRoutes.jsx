import { Navigate } from "react-router-dom";
import useRole from "../Hook/useRole";
import useAuth from "../Hook/useAuth";



const HostRoutes = ({children}) => {
    const {user}=useAuth()
    const [role,isLoading]= useRole()
    if(isLoading || !user){
        return <div className="w-full flex justify-center items-center mb-10">
       <span className="loading loading-spinner loading-lg text-accent"></span>
    </div>
    }

    if(role==="host"){
        return <>
        {children}
        </>
    }
        return <Navigate to='/singup' replace={true}></Navigate>
    
};

export default HostRoutes;
