import axios from "axios";
import toast from "react-hot-toast";
import { FaRegEdit } from "react-icons/fa";


const MybookingList = ({booking}) => {
    const {image,bookTitle,date,bookingID }=booking;

    const handleUpdateDate = ()=>{
        console.log('update');
    }
    
    const handleDelete = async id => {
        try {
          const { data } = await axios.delete(`http://localhost:5000/mybooking/${id}`)
          console.log(data)
          toast.success('Delete Successful')
    
        } catch (err) {
          console.log(err.message)
          toast.error('Delete Unsuccessful')
        }
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
                   <div className="flex gap-2 text-center items-center justify-center" >{date}<span onClick={handleUpdateDate} className="text-xl  btn btn-xs rounded-sm "> <FaRegEdit /></span></div>
                </td>
                <td >
                    <a onClick={()=>handleDelete(bookingID)} className="btn btn-error btn-outline btn-xs">Cancel</a>
                </td>
            </tr>
        </>
    );
};

export default MybookingList;