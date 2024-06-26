
import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AllroomsRow = ({ session, idx, refetch, setloading, setStatus }) => {

    const { title, description, status, _id, RoomImages } = session || {};
    setStatus(status)
    const [open, setOpen] = useState(false)
    const [openFeedBack, setOpenFeedBack] = useState(false)
    const [openDelete, setOpenDelete] = useState(false);

    const fee = useRef(null)
    const feedBack = useRef(null)
    const reason = useRef(null)
    // const [status, setStatus] = useState('')

    const handleSessionStatus = async (_id, status, sessionFee) => {
        //console.log(_id, status, sessionFee)
        setloading(true);
        let updateDoc = { id: _id, status: status }
        if (status === "rejected") {
            if (!feedBack.current.value || !reason.current.value) {
                setloading(false);
                return toast.error('Please give your feedback')
            }
            updateDoc = { id: _id, status: status, feedBackPart: { reason: reason.current.value, feedback: feedBack.current.value } }

        }

        if (status === "approved") {
            updateDoc = { id: _id, status: status, sessionObject: session, fee: sessionFee }
        }


        await axios.patch('https://server-study.vercel.app/allsessionsstatus', updateDoc)
            .then(res => {
                console.log(res)
                refetch()
                setloading(false)
            })
    }
    const handleDelete = async (_id, Status) => {
        if (Status !== 'approved') {
            return toast.error('Something went wrong')
        }
        setloading(true);
        try {
            await axios.delete(`https://server-study.vercel.app/deleteSession/${_id}`)
                .then(res => {
                    console.log(res)
                    refetch()
                    setloading(false)
                })
        } catch (error) {
            toast.error(error);
            setloading(false)
        }
    }

    return (
        <>
            <tr className=''>
                <th className='place-content-center  h-full'>{idx + 1}</th>
                <th className="lg:flex hidden place-content-center h-full ">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24">
                            <img src={RoomImages} />
                        </div>
                    </div>
                </th>

                <td className='place-content-center  h-full'>{title}</td>
                <td className=" lg:flex  hidden"><p>{description}</p></td>

                <td className=' h-full '>
                    {status === "pending" && <div className='flex text-xl rounded-full gap-1 items-center justify-center'>
                        <button onClick={() => setOpen(true)} className='text-green-500 rounded-full border btn btn-xs bg-white '><Icon icon="icon-park-solid:correct" /></button>
                        <button onClick={() => setOpenFeedBack(true)} className='text-red-500 rounded-full border btn btn-xs bg-white'><Icon icon="charm:cross" /></button>
                    </div>
                    }
                    {status === "approved" &&
                        <div className=' justify-center join items-start flex-row '>
                            <Link to={`/dashboard/admin/allstudysessionupdate/${_id}`} className='btn join-item btn-xs'><Icon icon="tabler:edit"></Icon>Update</Link>
                            <button onClick={() => setOpenDelete(true)} className='btn btn-xs join-item'><Icon icon="material-symbols:delete-outline"></Icon> Delete</button>
                        </div>
                    }

                    {status === "rejected" &&
                        <button className='flex bg-error items-center whitespace-nowrap text-center mx-auto rounded-full px-2 py-1 text-white font-medium border border-red-500'>
                            <span><Icon className='text-white text-xl' icon="charm:cross" /></span>Rejected
                        </button>}
                </td>

            </tr>
            {/* approval */}
            <div className={`absolute top-0 w-full px-3 min-h-[calc(100vh-200px)]  ${open ? 'flex' : 'hidden'} backdrop-blur-md justify-center items-center`}>
                <div className="flex flex-col lg:max-w-xl items-center md:max-w-lg max-w-md w-full gap-2 p-6 rounded-md shadow-md bg-gray-200 text-second">
                    <h2 className="text-xl font-semibold leading-tight text-center tracking-wide">Session Fee</h2>
                    <input ref={fee} name="fee" type="number" defaultValue="0" placeholder="Type here" className="input w-full max-w-xs" />
                    <div className="flex justify-center  gap-3 mt-6 flex-row-reverse">
                        <button onClick={() => setOpen(false)} className="btn hover:text-black rounded-sm shadow-sm bg-red-400 text-gray-100">Cancel</button>
                        <button onClick={() => handleSessionStatus(_id, "approved", fee.current.value)} className="btn hover:text-black rounded-sm shadow-sm bg-first text-white">Confirm Approval</button>
                    </div>
                </div>
            </div>
            {/* reject */}
            <div className={`absolute top-0 w-full px-3 min-h-[calc(100vh-200px)]  ${openFeedBack ? 'flex' : 'hidden'} backdrop-blur-md justify-center items-center`}>
                <div className="flex flex-col lg:max-w-xl items-center md:max-w-lg max-w-md w-full gap-2 p-6 rounded-md shadow-md bg-gray-200 text-second">
                    <h2 className="text-xl font-semibold leading-tight text-center tracking-wide">Feedback</h2>
                    <input ref={reason} name="feedBack" type="text" placeholder="Rejection's reason" className="input w-full max-w-xs" />
                    <input ref={feedBack} name="feedBack" type="text" placeholder="Feedback" className="input w-full max-w-xs" />
                    <div className="flex justify-center  gap-3 mt-6 flex-row-reverse">
                        <button onClick={() => setOpenFeedBack(false)} className="btn hover:text-black rounded-sm shadow-sm bg-red-400 text-gray-100">Cancel</button>
                        <button onClick={() => handleSessionStatus(_id, "rejected")} className="btn hover:text-black rounded-sm shadow-sm bg-first text-white">Reject Approval</button>
                    </div>
                </div>
            </div>
            {/* delete */}
            <div className={`absolute top-0 w-full px-3 min-h-[calc(100vh-200px)]  ${openDelete ? 'flex' : 'hidden'} backdrop-blur-md justify-center items-center`}>
                <div className="flex flex-col lg:max-w-xl items-center md:max-w-lg max-w-md w-full gap-2 p-6 rounded-md shadow-md bg-gray-200 text-second">
                    <h2 className="text-xl font-semibold leading-tight text-center tracking-wide">Are you sure?</h2>
                    <p className='text-center'>You won&apos;t be able to revert this!</p>
                    <div className="flex justify-center  gap-3 mt-6 flex-row-reverse">
                        <button onClick={() => setOpenDelete(false)} className="btn hover:text-black rounded-sm shadow-sm bg-red-400 text-gray-100">Cancel</button>
                        <button onClick={() => handleDelete(_id, status)} className="btn hover:text-black rounded-sm shadow-sm bg-first text-white">Yes,delete it !</button>
                    </div>
                </div>
            </div>
        </>
    );
};
AllroomsRow.propTypes = {
    session: PropTypes.obj,
    idx: PropTypes.number,
    refetch: PropTypes.func,
    setloading: PropTypes.func,
    setStatus: PropTypes.func,
}
export default AllroomsRow;