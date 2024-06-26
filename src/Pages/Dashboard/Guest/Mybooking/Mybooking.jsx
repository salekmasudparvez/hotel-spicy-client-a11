import { useQuery } from "@tanstack/react-query";
import PulseLoader from "react-spinners/PulseLoader"
import MybookingList from "./MybookingList";
import { useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../../../Hook/useAuth";



const Mybooking = () => {
    const { user } = useAuth()
    const[MyData,setMyData]=useState(false)

    const { isPending, data: mybooking, refetch } = useQuery({
        queryKey: ['roomsdata', user?.email,MyData],
        queryFn: async () => {
            const res = await fetch(`https://hotel-server-kappa.vercel.app/payment/${user?.email}`)
            return res.json()
        }
    })
   
    
    if (isPending) {
        return <div className="flex justify-center items-center h-[calc(100vh-300px)] w-full border">
            <PulseLoader color="#36d7b7" />
        </div>
    }

    return (
        <div className="overflow-x-auto md:px-6 pt-14 w-full overscroll-y-auto h-[calc(100vh-56px)]">
             <Helmet>
                <meta charSet="utf-8" />
                <title>Hotel Spicy || My Booking</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <table className="table text-center">
                {/* head */}
                <thead >
                    <tr>
                       
                        <th>Photo Of Room</th>
                        <th>Name of Room</th>
                        <th>Date Of Booking</th>
                        <th>Cancellation</th>
                    </tr>
                </thead>
                <tbody >
                    {/* row 1 */}
                    {mybooking && mybooking?.map((booking, idx) => <MybookingList refetch={refetch} setMyData={setMyData} MyData={MyData} booking={booking} key={idx}></MybookingList>)}
                </tbody>
               
            </table>
        </div>
    );
};

export default Mybooking;