import React from 'react';
import EnrolleTwo from './EnrolleTwo';

const EnrollOne = ({ pay }) => {
    const { ClassName, courses, email, image, instructorName, name, price, seats, student } = pay;
    console.log(pay)
    return (
        <div className='my-8 shadow-lg shadow-emerald-500 p-10'>
            <h1 className='text-center font-extrabold mb-4'>Buy Courses</h1>
            <img className='w-64 h-64' src={image} alt="" />
            <p className='text-center'>{ClassName}</p>
            <div className="divider"></div>
            <p>Enrolled Student Name: {name}</p>
            <p>Student email: {email}</p> 
            <p>Price: ${price}</p>
            <p>Number of Student: {student}</p>
            <p>Available Seat: {seats}</p>
        </div>
    );
};

export default EnrollOne;

