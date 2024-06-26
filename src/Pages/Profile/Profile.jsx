
import { FaCamera } from "react-icons/fa";
import SyncLoader from 'react-spinners/ClipLoader';
import { MdEmail } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAuth from "../../Hook/useAuth";

const Profile = () => {
    const { user } = useAuth();
    //console.log(user)
    const { isLoading, data:userDb } = useQuery({
        queryKey: ['user', user?.email],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/user/${user.email}`)
            return res.data
        }
    })
    const {
        coverPhotoURL,
        email,
        name,
        photoURL,
        role
    } = userDb || {}

    if (!user || isLoading) {
        return (
            <div className="min-h-screen w-full flex justify-center items-center">
                <SyncLoader
                    height="100"
                    width="100"
                    color="#36d7b7"
                />

            </div>
        )
    }

   
    return (
        <div>
            <div className="relative " >
                <img className="  w-full max-h-[200px] object-cover" src={coverPhotoURL} alt="cover" />
                <div className="avatar absolute -bottom-24 flex md:justify-start md:ml-32 justify-center w-full">
                    <div className=" relative w-48 rounded-full">
                        <img className='border' src={photoURL} />

                        <a className='text-3xl btn border-none hover:text-gray-400 absolute bottom-0 rounded-b-full text-white bg-gray-500 bg-opacity-70 flex justify-center cursor-pointer items-center w-full '><FaCamera /> </a>

                    </div>
                </div>

                <a className='gap-2 cursor-pointer btn border-none rounded-none hover:text-black p-2 text-lg  absolute bottom-0 right-0 text-white bg-gray-500 bg-opacity-70 flex justify-center items-center  '> <span>Upload Cover Image</span> <FaCamera /> </a>

            </div>
            <div className="bg-white min-h-28 flex md:flex-row flex-col">
                <div className="md:w-[30%] w-full md:h-[150px] h-[100px]"></div>
                <div className="w-full md:w-[70%] flex md:justify-between md:p-6 md:flex-row justify-center flex-col md:items-start items-center">
                    <h1 className="font-bold text-2xl font-serif ">{name}</h1>
                    <p className='flex gap-2 justify-center items-center'><MdEmail />Email: {email}</p>
                </div>
            </div>
            <div>
                <div className="border-2 border-gray-500 border-opacity-50 p-5">

                    <h1 className="text-xl font-medium">Purchess History</h1>

                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Room&apos; image</th>
                                    <th>Room&apos; name</th>
                                    <th>Transition ID</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Hart Hagerty</div>
                                                <div className="text-sm opacity-50">United States</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>

                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                                <tr>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Yancy Tear</div>
                                                <div className="text-sm opacity-50">Brazil</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Wyman-Ledner
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>

                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;