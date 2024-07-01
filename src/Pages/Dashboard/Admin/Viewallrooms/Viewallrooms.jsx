import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hook/useAuth";
import axios from "axios";
import ViewAllroomsCard from "./ViewAllroomsRow";


const Viewallrooms = () => {
    const { user } = useAuth();

    const { data } = useQuery({
        queryKey: ['viewallrooms', user?.email,],
        queryFn: async () => {
            const res = await axios.get(`https://hotel-server-kappa.vercel.app/adminrooms?email=${user.email}&status=${data}`)
            return res.data
        }
    })
    return (
        <div className="w-full p-3 md:p-6 h-screen overflow-y-auto ">
            <div className="py-4 px-2 bg-sky-200 rounded-xl flex flex-col md:flex-row justify-between w-full md:gap-2 gap-4 items-center ">
                <label className="input input-bordered flex items-center rounded-full  gap-2">
                    <input type="text" className="grow input-xs" placeholder="Search by name" />
                    <a >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </a>
                </label>
                <div className="md:border-none border md:w-auto w-full md:mx-0 mx-4">
                    <select className="select rounded select-bordered focus:outline-none select-sm md:select-md max-w-sm">
                        <option className=" text-gray-400" disabled selected>Filter</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                    </select>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr className="hover">
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default Viewallrooms;
