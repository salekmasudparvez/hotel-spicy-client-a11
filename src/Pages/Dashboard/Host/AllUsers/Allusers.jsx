import { CiSearch } from "react-icons/ci";
import UserRow from "./UserRow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../../../Hook/useAuth";
import { useRef, useState } from "react";



const AllUsers = () => {
    const search = useRef()
    const { user } = useAuth();
    const [inputSearch, setinputSearch] = useState()
    const handleSearch = async (e) => {
        e.preventDefault()
        const searchInput = e.target.search.value;
        setinputSearch(searchInput)
        console.log(e.target)
        
    }

    const [loadingUpdate, setloadingUpdate] = useState(false)
    const { refetch, isLoading, data: allusers } = useQuery({
        queryKey: ['allusers', inputSearch],
        queryFn: async () => {
            if (inputSearch) {
                let url = `https://hotel-server-kappa.vercel.app/allusers?search=${inputSearch}`
                if(/.+@.+\..+/.test(inputSearch)) {
                    url=`https://hotel-server-kappa.vercel.app/allusers?email=${inputSearch}`
                }
                const res = await axios.get(url);
                const data = res.data;
                console.log(data);
                return data;
            }
            const res = await axios.get('https://hotel-server-kappa.vercel.app/allusers');
            const data = res.data;
            return data;
        }
    });
    if (!user || isLoading || loadingUpdate) {
        return (<div className="flex justify-center items-center w-full min-h-screen">
           <span className="loading loading-spinner loading-lg"></span>
        </div>)
    }

    return (
        <div className="w-full min-h-screen">
            {/* NAV */}
            <div className="flex justify-evenly flex-row-reverse w-full items-center h-16 border-b lg:shadow-md">
                <div>
                    <h1 className="text-xl md:block hidden font-bold whitespace-nowrap text-sky-500 text-first">All Users</h1>
                </div>
                <fieldset className=" space-y-1 text-gray-700">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <form onSubmit={handleSearch} className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="submit" title="search" className="">
                            <CiSearch />
                            </button>
                        </span>
                        <input ref={search} type="search" name="search" placeholder="Search name or email" className="px-2 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-50 text-gray-600 focus:bg-gray-200" />

                    </form>
                </fieldset>
            </div>
            {/* BODY */}
            <div className="overflow-x-auto overflow-y-auto">
                <table className="table h-[calc(100vh-64px)]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Serial
                            </th>
                            <th>Name</th>
                            <th className="lg:block hidden">Email</th>
                            <th>Role</th>
                            <th>Update role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row  */}
                        {allusers?.map((user, idx) => <UserRow key={idx} user={user} setloadingUpdate={setloadingUpdate} refetch={refetch} idx={idx} />)}

                    </tbody>



                </table>
            </div>

        </div>
    );
};

export default AllUsers;

