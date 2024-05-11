import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";


const Login = () => {
    const {creatUserGoogle,signInWithPassword}=useAuth()
    const handleLogin=async(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('object',email,password);
        try {
            const result = await signInWithPassword(email,password)
        } catch (error) {
           console.log(error); 
        }
    }
    return (
        <section className=" text-gray-900">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="https://i.postimg.cc/6q9fWn33/login.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8  text-gray-900">
                    
                    <div className=" space-y-4">
                        <button onClick={creatUserGoogle} type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md btn btn-outline hover:bg-[#2563EB]">
                            <img className="w-5 h-5 object-cover" src="https://i.postimg.cc/N0MYZzYC/google-g-icon-prev-ui-1.png" alt="" />
                            <p>Login with Google</p>
                        </button>
                       
                        
                    </div>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full text-gray-400" />
                        <p className="px-3 text-gray-400">OR</p>
                        <hr className="w-full text-gray-400" />
                    </div>
                    <form onSubmit={handleLogin} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-900 focus:border-violet-400" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                    <a  className="text-xs hover:underline text-gray-400">Forgot password?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md border-gray-700  text-gray-900 focus:border-violet-400" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-block btn-info font-semibold rounded-md bg-[#2563EB] text-white ">Sign in</button>
                    </form>
                    
                    <p className="text-sm text-center text-gray-400">Don&lsquo;t have an account?
                        <Link to="/singup" className="btn btn-link">Sign up here</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;