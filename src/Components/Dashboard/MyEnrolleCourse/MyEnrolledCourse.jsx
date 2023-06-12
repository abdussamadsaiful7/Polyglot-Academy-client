import React from 'react';
import usePayment from '../../../Hook/usePayment';
import EnrollOne from './EnrollOne';


const MyEnrolledCourse = () => {
    const [payment] = usePayment();
    console.log(payment)
    return (
        <div>
            <h2 className='text-xl font-extrabold text-center my-10'>MY ENROLLED COURSES</h2>
            <h1>Total Enrolled Students: {payment.length}</h1>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    payment.map(pay => <EnrollOne key={pay._id} pay={pay}></EnrollOne>)
                }
            </div>
        </div>
    );
};

export default MyEnrolledCourse;


