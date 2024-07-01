
import axios from 'axios';
import { PropTypes } from 'prop-types';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const UserRow = ({user,setloadingUpdate,refetch,idx}) => {
    const {name,email,role,photoURL}=user || {};
    const select = useRef(null)
    const handleUpdateRole =async () => {
        // console.log(select.current.value)
        const updateRole = select.current.value;
        setloadingUpdate(true);
        const updateRoleDoc ={
            email:email,
            updateRole,
        }
        try {
            await axios.patch('https://hotel-server-kappa.vercel.app/allusers',updateRoleDoc)
            .then(res=>{
                if(res){
                    setloadingUpdate(false);
                    toast.success('Role updated successfully');
                    refetch();
                }
            })

        } catch (error) {
            toast.error(error)
            setloadingUpdate(false);
        }
    }
    return (
        <tr >
            <th className='place-content-center'>
                {idx+1}
            </th>
            <td className='place-content-center'>
                <div className="flex  items-center gap-3">
                    <div className="avatar lg:block hidden">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td className="lg:block hidden place-content-center h-full">
                {email}
            </td>
            <td className='place-content-center'><span className={`py-1 rounded-full ${role === "admin" ? 'bg-purple-200 px-2 ' : role === "guest" ? "bg-sky-200 px-2 " : role === "host" ? "bg-orange-200 px-2 " : null}`}>{role}</span> </td>
            <th className="min-w-32 whitespace-nowrap place-content-center">
                <select ref={select} onChange={handleUpdateRole} value={role} className="border rounded-full  text-second font-normal p-2 border-second w-full max-w-28">
                    {/* <option disabled selected>Update role</option>  */}
                    <option value="guest">Guest</option>
                    <option value="admin">Admin</option>
                    <option value="host">Host</option>
                </select>
            </th>
        </tr>
    );
};
UserRow.propTypes={
    user:PropTypes.obj,
    setloadingUpdate:PropTypes.func,
    refetch:PropTypes.func,
    idx:PropTypes.number,
}
export default UserRow;