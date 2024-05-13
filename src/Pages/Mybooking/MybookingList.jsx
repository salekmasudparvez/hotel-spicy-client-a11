
import Swal from 'sweetalert2';

import { FaRegEdit } from "react-icons/fa";



const MybookingList = ({ booking,setMyData, MyData}) => {
    const { image, bookTitle, bookingDate, bookingID, clientEmail, _id } = booking;
    
    


    const handleDelete = async (id) => {
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

                fetch(`http://localhost:5000/mybooking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your file has been Cancelled.",
                                icon: "success"
                            });
                            setMyData(!MyData)
                            
                        }
                    })
            }
        });


    }
    //update
    const handleUpdateDate = (e) => {
        e.preventDefault();

        console.log('update');



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
                    <a onClick={() => handleDelete(_id)} className="btn btn-error btn-outline btn-xs">Cancel</a>
                </td>
            </tr>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_2" className="modal bg-neutral-200 p-3">
                <form className="flex flex-col p-4 gap-3" onSubmit={handleUpdateDate}>
                    <h1 className="text-3xl font-bold text-center">Update Your Date</h1>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="date" name="date" className="grow" required />
                    </label>
                    <button type="submit" className="btn btn-square rounded-sm btn-block" >Update</button>
                </form>
                <form method="dialog" className="modal-backdrop ">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default MybookingList;