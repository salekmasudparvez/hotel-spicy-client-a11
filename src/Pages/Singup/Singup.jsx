import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { Helmet } from "react-helmet";
import { toast } from 'react-hot-toast';
import axios from "axios";
import { useState } from "react";

const Singup = () => {
    const {creatUserGoogle,creatUserPassword,updateUserProfile,setUser} = useAuth();
    const [loading,setLoading]=useState(false)
    const handleSingup=async(e)=>{
        e.preventDefault();
        setLoading(true)
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photo = "https://i.ibb.co/t3n0XR7/240.jpg";
        const password = e.target.password.value;
        try {
            const result = await creatUserPassword(email,password)
            console.log(photo)
             await updateUserProfile(name,photo);
             toast.success("Sing up successful")
            //  console.log(result.user.email);
            const loggedUser = {email:result.user?.email}
             
             setLoading(false)
             
        } catch (error) {
        //    console.log(error);
           toast.error('Invaild email or password') 
           setLoading(false)
        }

    }
    if(loading){
        return ( <div className="min-h-screen w-full flex justify-center items-center">
           <span className="loading loading-spinner loading-lg"></span></div>)
     }
    return (
        <div className="bg-[url('https://clipart-library.com/new_gallery/9-92768_grass-png-hd-nature-clipart-transparent-background.png')] bg-no-repeat md:py-14 py-6 bg-cover bg-center">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sing up now </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="w-full max-w-md mx-auto p-4 rounded-md shadow sm:p-8 bg-gray-900 bg-opacity-60  text-gray-100">
                <form onSubmit={handleSingup} className="space-y-4 py-4">
                  
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-sm">Name</label>
                            <input type="name" name="name" id="name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-900 focus:border-violet-400" />
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-900 focus:border-violet-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a className="text-xs hover:underline text-gray-400">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-900 focus:border-violet-400" />
                        </div>
                   
                    <button type="submit" className="btn btn-block btn-info font-semibold rounded-md bg-[#2563EB] text-white ">Sign up</button>
                </form>

                <p className="text-sm text-center text-gray-400">Don&lsquo;t have an account?
                    <Link to="/login" className="btn btn-link">Log in here</Link>
                </p>

                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400" />
                    <p className="px-3 text-gray-400">OR</p>
                    <hr className="w-full text-gray-400" />
                </div>

                <div  className=" space-y-4 bg-white rounded-md">
                    <button onClick={creatUserGoogle} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md btn btn-outline hover:bg-[#2563EB]">
                        <img className="w-5 h-5 object-cover" src="https://i.postimg.cc/N0MYZzYC/google-g-icon-prev-ui-1.png" alt="" />
                        <p>Sing up with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Singup;