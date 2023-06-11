import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import UseAxiosSecure from '../../Axious/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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
        <div>
            <div>
                <div>
                    
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AdminHome;