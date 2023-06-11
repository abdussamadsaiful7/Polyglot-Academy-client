import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useClassHook from '../../../Hook/useClassHook';
import Swal from 'sweetalert2';
import useTitleHook from '../../Hook/useTitleHook';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ManageStatus = () => {
    useTitleHook("Manage Status")
    const { user } = useContext(AuthContext);
    const [classes, loading, refetch] = useClassHook();
    //console.log(classes)

    const handleApproved = (id) => {
        fetch(`https://foreign-school-server.vercel.app/approved/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Successfully approved!",
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = (id) => {
        fetch(`https://foreign-school-server.vercel.app/denied/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Successfully denied!",
                        showConfirmButton: false,
                        timer: 1500
                    })

                }

            })

    }


    // { image, ClassName, instructorName, email, price, status, approved, denied }
    return (
        <div className="overflow-x-auto my-10">
            <h1 className='text-center font-extrabold text-xl my-10'>ADMIN PANEL</h1>
            <table className="table">
                {/* head */}
                <thead className='bg-sky-200'>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Course Name</th>
                        <th>Inst. Name</th>
                        <th>Inst. Email</th>
                        <th>Status</th>
                        <th>Approved</th>
                        <th>Denied</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((item, index) =>
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td> <img className='w-12 h-12' src={item.image} alt="photo" /></td>
                            <td>{item.ClassName}</td>
                            <td>{item.instructorName}</td>
                            <td>{item.email}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleApproved(item._id)} disabled={item.status === 'approved' ? true : false} className="btn btn-ghost btn-outline btn-info btn-xs">approved</button>
                            </td>
                            <td>
                                <button onClick={() => handleDeny(item._id)} disabled={item.status === 'denied' ? true : false} className="btn btn-ghost btn-outline btn-error btn-xs">denied</button>
                            </td>
                            <td>
                                <Link to={`/dashboard/update/${item._id}`} className='text-xl'>
                                        <FaRegEdit />
                                </Link>
                            </td>
                        </tr>

                    )}

                </tbody>
            </table>
        </div>
    );
};

export default ManageStatus;