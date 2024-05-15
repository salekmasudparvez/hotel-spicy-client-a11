
import {  useState } from "react";
import RoomCard from "./RoomCard";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaArrowAltCircleUp, FaArrowCircleDown, FaBars, FaFilter } from "react-icons/fa";
import RoomsList from "../../Components/RoomsList";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";



const Rooms = () => {
    const [layout, setLayout] = useState('grid')
    //pagination
    const [itemPerPage, setItemPerPage] = useState(6);
    const { count } = useLoaderData();
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    const [currentPage, setCurrentPage] = useState(0);
    const [filterPrice, SetFilterPrice] = useState(1);
    const [hprice, sethprice] = useState(1000);
    const [lprice, setlprice] = useState(0)

    const [isChange, setisChange] = useState(false)

    //    console.log(lowPrice, highPrice);
    const handlePerPage = (e) => {
        const customItemPerPage = parseInt(e.target.value);
        setItemPerPage(customItemPerPage);
        setCurrentPage(0)
    }
    const handlePriceRange = (e) => {
        e.preventDefault();
        const highValue = e.target.high.value;
        const lowValue = e.target.low.value;
        sethprice(highValue);
        setlprice(lowValue);
        setisChange(true);

        // console.log(lowValue, typeof highValue);
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
        queryKey: ['roomsdata', currentPage, itemPerPage, isChange, filterPrice, lprice, hprice],
        queryFn: async () => {
            let url = `https://hotel-server-kappa.vercel.app/rooms?page=${currentPage}&size=${itemPerPage}&sort=${filterPrice}`;
            if (isChange) {
                url += `&lprice=${lprice}&hprice=${hprice}`;
            }

            try {
                const res = await fetch(url);
                return res.json();
            } catch (error) {
                // console.error('Error fetching room data:', error);
                // throw error; // Rethrow the error to be caught by React Query
            }
        }
    });



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
            <div className="border flex flex-col md:flex-row gap-2 justify-between md:items-center items-start border-neutral-300">
                <div className="flex justify-between items-center md:w-1/2 w-full">
                    <div>
                        <details className="dropdown rounded-sm bg-neutral-200 ">
                            <summary className="m-1 btn bg-transparent"><FaFilter />Price</summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li onClick={() => SetFilterPrice(1)} className="border"><a>Price low to hight <FaArrowAltCircleUp /></a></li>
                                <li onClick={() => SetFilterPrice(-1)} className="border"><a>Price hight to low <FaArrowCircleDown /></a></li>
                            </ul>
                        </details>
                    </div>
                    <div className=" flex border-2 gap-2 justify-center items-center">
                        <h1>View</h1>
                        <div className="join rounded-sm">
                            <a onClick={() => setLayout('grid')} className={`join-item btn ${layout === 'grid' ? "btn-active" : ""} `} ><BsGrid3X3GapFill /></a>
                            <a onClick={() => setLayout('list')} className={`join-item btn ${layout === 'list' ? "btn-active" : ""} `} ><FaBars /></a>

                        </div>
                    </div>
                </div>
                <form onSubmit={handlePriceRange} className="join justify-center border border-black items-center md:px-2">
                    <h1 className="flex justify-center btn-sm md:btn-md  btn items-center md:gap-2 text-base font-semibold join-item"><FaFilter />Price Range:</h1>
                    <input name="low" type="text" className="join-item w-12 p-1" required placeholder="Low" />
                    <input name="high" type="text" className="join-item w-12 p-1" required placeholder="High" />
                    <button type="submit" className="join-item btn btn-sm btn-outline">Filter</button>
                </form>

            </div>
            {layout === 'grid' ?
                <div className="grid gap-4 place-items-center md:grid-cols-2 lg:grid-cols-3 grid-cols-1" >
                    {roomsdata?.map((room, idx) => <RoomCard room={room} idx={idx} key={idx}></RoomCard>)}
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
            <div className='flex flex-col md:flex-row py-10 gap-7 justify-center items-center'>
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