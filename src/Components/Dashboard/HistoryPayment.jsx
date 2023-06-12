import React from 'react';
import usePayment from '../../Hook/usePayment';

const HistoryPayment = () => {
    const [payment] = usePayment();
 //   console.log(payment)

   

    return (
        <div>
            <h2 className='text-xl font-extrabold text-center my-20 mb-8'>HISTORY OF PAYMENT</h2>
            <div>
                {
                   payment.map(item => <div key={item._id}
                        className='my-8 shadow-lg shadow-emerald-500 p-10'>
                        <p className='text-center mb-2'>Payment History</p>
                        <p>Enroll Date: {item.date}</p>
                        <p>Total Price: ${item.price}</p>
                        <p>Transaction ID: {item.transactionId}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HistoryPayment;