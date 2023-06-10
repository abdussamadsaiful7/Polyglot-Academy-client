import React from 'react';
import usePayment from '../../../Hook/usePayment';
import EnrollOne from './EnrollOne';


const MyEnrolledCourse = () => {
    const [payment] = usePayment();
    console.log(payment)
    return (
        <div>
            <h2 className='text-xl font-extrabold text-center my-10'>MY ENROLLED COURSES</h2>
            <div>
                {
                    payment.map(pay => <EnrollOne key={pay._id} pay={pay}></EnrollOne>)
                }
            </div>
        </div>
    );
};

export default MyEnrolledCourse;


