import React, { useContext, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useSelectClass from '../../Hook/useSelectClass';
import useTitleHook from '../Hook/useTitleHook';
import { AuthContext } from '../Provider/AuthProvider';


//const [select, refetch] = useSelectClass();
// const total = select.reduce((sum, item) => item.price + sum, 0)
// const prices = parseFloat(total.toFixed(2))

const MyCourse = () => {
    

    const [select, refetch] = useSelectClass();
    const total = select.reduce((sum, item) => {
        const price = parseFloat(item.price);
        if (!isNaN(price)) {
            return sum + price;
        }
        return sum;
    }, 0);

    const prices = parseFloat(total.toFixed(2));


    const { user } = useContext(AuthContext)


    useTitleHook('My Course')

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://foreign-school-server.vercel.app/selects/${item._id}`, {
                    method: 'DELETE',

                })

                    //${user?.email}&${item?.price}

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div className='w-3/4 h-full py-10'>
            <div className='uppercase font-extrabold flex justify-evenly items-center mb-2'>
                <h2>Total orders: {select.length}</h2>
                <h2>Total price: ${prices}</h2>
                {/* <Link to='/dashboard/studentPayment'>
                    <button className="btn btn-sm btn-warning">pay</button>
                </Link> */}
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead className='mb-5'>
                        <tr>
                            <th>No.</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            select.map((item, index) =>
                                <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.ClassName}

                                    </td>
                                    <td className='text-start'>${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-xs bg-red-500 text-white hover:text-red-500"><span ><FaTrashAlt /></span></button>
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/studentPayment/${item._id}`}>
                                            <button className="btn btn-sm btn-warning">pay</button>
                                        </Link>
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

export default MyCourse;