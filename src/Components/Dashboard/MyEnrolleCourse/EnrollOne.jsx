import React from 'react';
import EnrolleTwo from './EnrolleTwo';

const EnrollOne = ({ pay }) => {
    const { date, email, itemsName, price, quantity, status, transactionId } = pay;
    console.log(pay)
    return (
        <div className='my-8 shadow-lg shadow-emerald-500 p-10'>
            <h1 className='text-center font-extrabold mb-4'>Buy Courses</h1>
            <p className='text-center'>{
                itemsName.map((item, index) => <EnrolleTwo key={item._id} item={item} index={index}></EnrolleTwo>)
            }</p>
            <div className="divider"></div>
            <p>Student email: {email}</p>
        </div>
    );
};

export default EnrollOne;

