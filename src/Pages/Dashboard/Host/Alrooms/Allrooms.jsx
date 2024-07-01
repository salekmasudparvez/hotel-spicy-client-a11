import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAuth from '../../../../Hook/useAuth';
import AllroomsRow from './AllroomsRow';

const Allrooms = () => {
    const { user } = useAuth();
    const [loading, setloading] = useState(false)
    const [tabIndex, setTabIndex] = useState(0);
    const [Status,setStatus]=useState("");

    const { isLoading, refetch, data: allStudySessions } = useQuery({
        queryKey: ['allrooms', tabIndex],
        queryFn: async () => {
            const res = await axios.get(`https://hotel-server-kappa.vercel.app/allrooms?id=${tabIndex}`)
            const data = res.data;
            // console.log(data, tabIndex)
            return data;
        }
    })



    if (!user || isLoading || loading) {
        return (<div className="flex justify-center items-center w-full min-h-screen">
           <span className="loading loading-spinner loading-lg"></span>
        </div>)
    }
    const table = <>
        <div className="  w-full">
            <table className="table ">
                {/* head */}
                <thead className='sticky top-16 bg-white'>
                    <tr >
                        <th>No.</th>
                        <th className="lg:block hidden">Image</th>
                        <th>Title</th>
                        <th className="lg:block hidden">Room&apos;s Drescription</th>
                        <th> {Status==="approved"?<><span className='text-sky-500'>Update</span> / <span className='text-red-500'>Delete</span></>:<><span className='text-green-500'>Approved</span> / <span className='text-red-500'>Reject</span></>}</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {/* row */}
                    {allStudySessions?.map((session, idx) => <AllroomsRow key={idx} idx={idx} refetch={refetch} setloading={setloading} session={session} setStatus={setStatus} />)}

                </tbody>
            </table>
        </div>
    </>

    return (<div
        className='px-3 overflow-y-auto max-h-screen bg-white w-full relative overflow-x-auto'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
           <div className='backdrop-blur py-5 bg-white z-10 sticky top-0 '>
            <TabList className="md:text-lg text-sm whitespace-nowrap flex justify-center ga">
                <Tab>Pending </Tab>
                <Tab>Rejected </Tab>
                <Tab>Approved </Tab>
            </TabList>
           </div>
            
            <TabPanel>
                {table}
            </TabPanel>
            <TabPanel>
                {table}
            </TabPanel>
            <TabPanel>
                {table}
            </TabPanel>
        </Tabs>
    </div>
    );
};

export default Allrooms;