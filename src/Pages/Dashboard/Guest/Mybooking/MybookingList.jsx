
import Swal from 'sweetalert2';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { PropTypes } from 'prop-types';
import toast from 'react-hot-toast';
import { differenceInDays, isSameDay, parseISO } from 'date-fns';


const MybookingList = ({ booking, setMyData, MyData,refetch }) => {
    const { imageUrl, roomName, bookingDate, bookingID } = booking || {};


    const handleDelete = async (bookingID) => {
        const today = new Date()
        const dateToCompare = parseISO(bookingDate);
        const daysDifference = differenceInDays(dateToCompare,today );
        const isSame = isSameDay(dateToCompare,today)
        if (daysDifference > 1 || isSame===false ) {
            toast.error('Cancellation date expired');
            return
        }

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.patch(`https://hotel-server-kappa.vercel.app/cancelBooking`,{bookingID})
                    .then(response => {
                        const data = response.data;
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your file has been Cancelled.",
                                icon: "success"
                            });
                            axios.patch(`https://hotel-server-kappa.vercel.app/updateTrue/${bookingID}`, { Availability: true })
                            setMyData(!MyData);
                            refetch()

                        }
                    })
                    .catch(error => {
                        // console.error('Error:', error);
                    });
            }
        });


    }
    //update
    const handleUpdateDate = (e) => {
        e.preventDefault();
        const updatedDate = e.target.date.value;
        axios.patch(`https://hotel-server-kappa.vercel.app/paymentDate`, { updatedDate, bookingID: bookingID })
            .then(response => {
                const data = response.data;
                if (data.modifiedCount > 0) {
                    toast.success('Date update successfully!');
                    setMyData(!MyData);
                }

            })
            .catch(error => {
                // console.error('Error:', error);

            });

    }
    return (
        <>
            <tr className="hover:bg-neutral-200">

                <td >
                    <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {roomName}

                </td>
                <td >
                    <div className="flex gap-2 text-center items-center justify-center" >{bookingDate}<span onClick={() => document.getElementById('my_modal_2').showModal()} className="text-xl  btn btn-xs rounded-sm "> <FaRegEdit /></span></div>
                </td>
                <td >
                    <a onClick={() => handleDelete(bookingID)} className="btn btn-error btn-outline btn-xs">Cancel</a>
                </td>
            </tr>
            {/* update date */}
            <dialog id="my_modal_2" className="modal bg-neutral-400 p-3">
                <div className='w-7/12 max-w-5xl modal-box'>
                    <form className="flex flex-col p-4 gap-3" onSubmit={handleUpdateDate}>
                        <h1 className="text-3xl font-bold text-center">Update Your Date</h1>
                        <label className="input input-bordered flex items-center gap-2">
                            <input defaultValue={bookingDate} type="date" name="date" className="grow" required />
                        </label>
                        <button type="submit" className="btn btn-square rounded-sm btn-block" >Update</button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop ">
                    <button>close</button>
                </form>
            </dialog>

        </>
    );
};

MybookingList.propTypes = {
    booking: PropTypes.object,
    setMyData: PropTypes.func,
    MyData: PropTypes.func
}

export default MybookingList;