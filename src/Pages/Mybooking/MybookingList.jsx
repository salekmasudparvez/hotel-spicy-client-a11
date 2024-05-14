
import Swal from 'sweetalert2';
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import { PropTypes } from 'prop-types';
import useAuth from '../../Hook/useAuth';
import toast from 'react-hot-toast';

const MybookingList = ({ booking, setMyData, MyData }) => {
    const { user } = useAuth()
    const { image, bookTitle, bookingDate, bookingID, _id ,  currentDate, } = booking || {};


    const handleDelete = async (id, bookingID, currentDate) => {
        const today = new Date()
        const bookingDateConvert = new Date(currentDate)
        const diffrentdays =bookingDateConvert.getDate() - today.getDate(); 
        const diffrentMonths =bookingDateConvert.getMonth() - today.getMonth(); 
        const diffrentYears =bookingDateConvert.getFullYear() - today.getFullYear(); 
        if(diffrentdays> 1|| diffrentMonths!==0 || diffrentYears!==0){
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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/mybooking/${id}`)
                    .then(response => {
                        const data = response.data;
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your file has been Cancelled.",
                                icon: "success"
                            });
                            axios.patch(`http://localhost:5000/updateTrue/${bookingID}`, { Availability: true })
                            setMyData(!MyData);

                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }
        });


    }
    //update
    const handleUpdateDate = (e) => {
        e.preventDefault();
        const id = _id;
        const updatedDate = e.target.date.value;
        axios.patch(`http://localhost:5000/updateDate/${id}`, { updatedDate })
            .then(response => {
                const data = response.data;
                if (data.modifiedCount > 0) {
                    toast.success('Date update successfully!');
                    setMyData(!MyData);
                }

            })
            .catch(error => {
                console.error('Error:', error);

            });

    }
    return (
        <>
            <tr className="hover:bg-neutral-200">

                <td >
                    <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {bookTitle}

                </td>
                <td >
                    <div className="flex gap-2 text-center items-center justify-center" >{bookingDate}<span onClick={() => document.getElementById('my_modal_2').showModal()} className="text-xl  btn btn-xs rounded-sm "> <FaRegEdit /></span></div>
                </td>
                <td >
                    <a onClick={() => handleDelete(_id, bookingID, currentDate)} className="btn btn-error btn-outline btn-xs">Cancel</a>
                </td>
            </tr>
            {/* update date */}
            <dialog id="my_modal_2" className="modal bg-neutral-400 p-3">
                <div className='w-7/12 max-w-5xl modal-box'>
                    <form className="flex flex-col p-4 gap-3" onSubmit={handleUpdateDate}>
                        <h1 className="text-3xl font-bold text-center">Update Your Date</h1>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" name="date" className="grow" required />
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