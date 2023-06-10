import React from 'react';
import usePayment from '../../Hook/usePayment';

const HistoryPayment = () => {
    const [payment] = usePayment();

    const sortedClass = payment.sort((a, b) => {
        const timestampA = a._id.getTimestamp ? a._id.getTimestamp() : Math.floor(a._id / 1000);
        const timestampB = b._id.getTimestamp ? b._id.getTimestamp() : Math.floor(b._id / 1000);
        return timestampA - timestampB;
    });
    return (
        <div>
            <h2 className='text-xl font-extrabold text-center my-20 mb-8'>HISTORY OF PAYMENT</h2>
            <div>
                {
                    sortedClass.map(item => <div key={item._id}
                        className='my-8 shadow-lg shadow-emerald-500 p-10'>
                        <p className='text-center mb-2'>Payment History</p>
                        <p>Enroll Date: {item.date}</p>
                        <p>Total Price: ${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Status: {item.status}</p>
                        <p>Transaction ID: {item.transactionId}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HistoryPayment;