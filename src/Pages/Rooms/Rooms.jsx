
import {  useState } from "react";
import RoomCard from "./RoomCard";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaBars, FaFilter } from "react-icons/fa";
import RoomsList from "../../Components/RoomsList";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";


const Rooms = () => {
    const [layout, setLayout] = useState('grid')
    //pagination
    const [itemPerPage, setItemPerPage] = useState(6);
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    const [currentPage, setCurrentPage] = useState(0);

    const handlePerPage = (e) => {
        const customItemPerPage = parseInt(e.target.value);
        setItemPerPage(customItemPerPage);
        setCurrentPage(0)
    }


    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    const { isPending, data: roomsdata } = useQuery({
        queryKey: ['roomsdata',currentPage,itemPerPage],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/rooms?page=${currentPage}&size=${itemPerPage}`)
            return res.json()
        }
    })
    if (isPending) {
        return <div className="w-full flex justify-center items-center my-10">
            <span className="loading loading-spinner loading-lg text-accent"></span>
        </div>
    }

    return (
        <div className="md:mx-10 mx-2 space-y-4">
              <Helmet>
                <meta charSet="utf-8" />
                <title>Hotel Spicy || Rooms</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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
                    {roomsdata?.map((room, idx) => <RoomCard room={room} key={idx}></RoomCard>)}
                </div>
                :
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs ">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead >
                            <tr className=" text-center">
                                <th className="p-3">Room&apos;s Image</th>
                                <th className="p-3">Name of Room</th>
                                <th className="p-3">Availability</th>
                                <th className="p-3">Price Per Night</th>

                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomsdata?.map((room, idx) => <RoomsList key={idx} room={room}></RoomsList>)}
                        </tbody>
                    </table>
                </div>
            }
            <div className='flex py-10 gap-7 justify-center items-center'>
                <div className='flex gap-6'>
                    <a className="btn btn-sm btn-primary" onClick={handlePrevPage}>Prev.</a>

                    {pages.map(page => <button
                        className={`btn btn-sm ${currentPage === page ? "bg-primary text-white" : ""}`}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >{page}</button>)}
                    <a className="btn btn-sm btn-primary" onClick={handleNextPage}>Next</a>
                </div>
                <div className="flex bg-neutral-300 p-2 rounded-md">
                    <div className="font-medium text-gray-500 font-serif">Item per page</div>
                    <select value={itemPerPage} onChange={handlePerPage} >
                        <option value="6">06</option>
                        <option value="9">09</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Rooms;