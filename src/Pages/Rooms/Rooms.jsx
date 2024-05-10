import axios from "axios";
import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";


const Rooms = () => {
    const [rooms, setRooms]= useState([])

    useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('http://localhost:5000/rooms')
      setRooms(data)
    }
    getData()
  }, []);
//   console.log(rooms);
    return (
        <div>
            <div className="md:py-14 py-6 space-y-3 text-center">
                <h1 className="text-5xl font-bold ">Find Rooms</h1>
                <p>You can find a room easily with price range and easy to book .So don&lsquo;t wait.</p>
            </div>
            <div className="border">
                
            </div>
            <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
                {rooms.map((room,idx)=><RoomCard room={room} key={idx}></RoomCard>)}
            </div>
        </div>
    );
};

export default Rooms;