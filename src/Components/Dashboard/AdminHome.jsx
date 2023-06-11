import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from '../../Axious/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import adminPic from '../../assets/admin.jpg'
import { FaShapes, FaSwatchbook, FaUserCheck, FaUsers, FaUsersCog } from 'react-icons/fa';


const AdminHome = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    const { data: state = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });
    console.log(state)
    return (
        <div className='md:mx-10'>
            <div className=' md:ml-64'>
                
            </div>
            <h1 className='text-center text-xl font-bold my-4 text-yellow-600'>ADMIN OVER VIEW PAGE</h1>
            <div className='grid md:grid-cols-4 gap-6 adminHome p-4 '>
                <div className='p-5 shadow-lg'>
                    <h1 className='ml-14 text-5xl  text-yellow-600'><FaSwatchbook/></h1>
                    <p>TOTAL COURSES: {state.classes}</p>
                </div>
                <div className='p-5 shadow-lg'>
                    <h1 className='ml-14  text-5xl  text-yellow-600'><FaUserCheck/></h1>
                    <p>TOTAL PAID USERS: {state.pays}</p>
                </div>
                <div className='p-5 shadow-lg'>
                    <h1 className='ml-14  text-5xl  text-yellow-600'><FaShapes/></h1>
                    <p>TOTAL REVENUE: {state.revenue} </p>
                </div>
                <div className='p-5 shadow-lg'>
                    <h1 className='ml-14  text-5xl  text-yellow-600'><FaUsers/></h1>
                    <p>TOTAL USERS: {state.users}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;