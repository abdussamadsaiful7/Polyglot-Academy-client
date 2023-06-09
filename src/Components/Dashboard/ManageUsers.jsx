import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useTitleHook from '../Hook/useTitleHook';
import UseAxiosSecure from '../../Axious/UseAxiosSecure';
import { FaBeer, FaTrashAlt, FaUserShield, FaUserTie } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    useTitleHook('Manage Users')
    const [axiosSecure]= UseAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })


    const handleMakeAdmin =(user)=>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                // toast.success(`${user.name}`,'is an admin successfully!')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        }

    const handleMakeInstructor =(user)=>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH',
    
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor successfully!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
        }
    
        const handleDeleteUser = (user) => {
            console.log(user);
        }


    return (
      
            <div>
                
                <h3 className="text-2xl font-extrabold">TOTAL USERS: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>MAKE INST.</th>
                                <th>MAKE ADMIN</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user?.name}</td>
                                        <td>{user.email}</td>
                                        <td className='text-center'>
                                            {user.role === 'instructor' ? 'instructor' :
                                                <button onClick={()=>handleMakeInstructor(user)} className="btn btn-ghost btn-xs bg-yellow-500 text-white hover:text-red-500"><span ><FaUserTie/></span>
                                                </button>
                                            }

                                        </td>
                                        <td className='text-center'>
                                            {user.role === 'admin' ? 'admin' :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs bg-yellow-500 text-white hover:text-red-500"><span ><FaUserShield /></span>
                                                </button>

                                            }

                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs bg-red-500 text-white hover:text-red-500"><span ><FaTrashAlt /></span></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
       
    );
};

export default ManageUsers;