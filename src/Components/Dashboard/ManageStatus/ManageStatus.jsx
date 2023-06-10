import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import useClassHook from '../../../Hook/useClassHook';
import Swal from 'sweetalert2';
import { FaUserTie } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const ManageStatus = () => {
    const { user } = useContext(AuthContext);
    const [classes, loading, refetch] = useClassHook();
    //console.log(classes)

    const handleApproved = (id) => {
        fetch(`http://localhost:5000/approved/${id}`, {
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
        fetch(`http://localhost:5000/denied/${id}`, {
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
                        <th>Course Name</th>
                        <th>Inst. Name</th>
                        <th>Inst. Email</th>
                        <th>Status</th>
                        <th>Approved</th>
                        <th>Denied</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((item, index) =>
                        <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.ClassName}</td>
                            <td>{item.instructorName}</td>
                            <td>{item.email}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleApproved(item._id)} disabled={item.status === 'approved' ? true : false} className="btn btn-ghost btn-outline btn-xs">approved</button>
                            </td>
                            <td>
                                <button onClick={() => handleDeny(item._id)} disabled={item.status === 'denied' ? true : false} className="btn btn-ghost btn-outline btn-xs">denied</button>
                            </td>
                        </tr>

                    )}

                </tbody>
            </table>
        </div>
    );
};

export default ManageStatus;