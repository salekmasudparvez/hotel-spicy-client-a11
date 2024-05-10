import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaBars, FaFilter } from "react-icons/fa";
import RoomsList from "../../Components/RoomsList";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [layout, setLayout] = useState('grid')

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:5000/rooms')
            setRooms(data)
        }
        getData()
    }, []);
    //   console.log(rooms);
    return (
        <div className="md:mx-10 mx-2 ">
            <div className="md:py-14 py-6 space-y-3 text-center">
                <h1 className="text-5xl font-bold ">Find Rooms</h1>
                <p>You can find a room easily with price range and easy to book .So don&lsquo;t wait.</p>
            </div>
            <div className="border flex justify-between items-center border-neutral-300">
                <div>
                    <details className="dropdown rounded-sm bg-neutral-200 ">
                        <summary className="m-1 btn bg-transparent"><FaFilter />Price</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li className="border"><a>Price low to hight <FaArrowAltCircleUp /></a></li>
                            <li className="border"><a>Price hight to low <FaArrowCircleDown /></a></li>
                        </ul>
                    </details>
                </div>
                <div className="flex gap-2 justify-center items-center">
                    <h1>View</h1>
                    <div className="join rounded-sm">
                        <a onClick={() => setLayout('grid')} className={`join-item btn ${layout === 'grid' ? "btn-active" : ""} `} ><BsGrid3X3GapFill /></a>
                        <a onClick={() => setLayout('list')} className={`join-item btn ${layout === 'list' ? "btn-active" : ""} `} ><FaBars /></a>

                    </div>
                </div>
            </div>
            {layout === 'grid' ?
                <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1" >
                    {rooms.map((room, idx) => <RoomCard room={room} key={idx}></RoomCard>)}
                </div>
                :
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead >
                            <tr className="text-left">
                                <th className="p-3">Invoice #</th>
                                <th className="p-3">Client</th>
                                <th className="p-3">Issued</th>
                                <th className="p-3">Due</th>
                                <th className="p-3 text-right">Amount</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                           {rooms.map((room,idx)=><RoomsList key={idx} room={room}></RoomsList>)}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Rooms;