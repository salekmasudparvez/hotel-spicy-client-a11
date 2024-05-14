import { Link } from "react-router-dom";
import FeturesRoomCard from "./FeturesRoomCard";
import { useQuery } from "@tanstack/react-query";


const FeturesRoom = () => {

    const { isPending, data:fetures } = useQuery({
        queryKey: ['fetures'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/fetures')
            return res.json()
        }
    })
    if (isPending) {
        return <div className="w-full flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-lg text-accent"></span>
        </div>
    }
    console.log(fetures);


    return (
        <section>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Fetures</span></h1>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                  {fetures.map((feture, idx)=><FeturesRoomCard key={idx} feture={feture}></FeturesRoomCard>)}
                </div>
                <div className="py-4 flex justify-center"><Link to='/rooms' className="btn btn-md tracking-widest font-bold font-sans btn-outline py-0">Book Now </Link></div>
            </div>
        </section>
    );
};

export default FeturesRoom;