import React, { useContext } from 'react';
import usePayment from '../../Hook/usePayment';
import { AuthContext } from '../Provider/AuthProvider';

const HistoryPayment = () => {
    const [payment] = usePayment();
    //   console.log(payment)
    const { user } = useContext(AuthContext);



    return (
        <div>
            <h2 className='text-xl font-extrabold text-center my-20 mb-8'>HISTORY OF PAYMENT</h2>
            <div className="overflow-x-auto">
                {/* {
                   payment.map(item => <div key={item._id}
                        className='my-8 shadow-lg shadow-emerald-500 p-10'>
                        <p className='text-center mb-2'>Payment History</p>
                        <p>Enroll Date: {item.date}</p>
                        <p>Total Price: ${item.price}</p>
                        <p>Transaction ID: {item.transactionId}</p>
                    </div>)
                } */}
                {/* <div className="overflow-x-auto">
                <table className="table w-full"></table> */}

                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>IMAGE</th>
                            <th>COURSE</th>
                            <th>USER</th>
                            <th>ENROLL DATE</th>
                            <th>PRICE</th>
                            <th>T. ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payment.map((item, index) =>
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td> <img className='w-12 h-12' src={item.image} alt="photo" /></td>
                                <td>{item.ClassName}</td>
                                <td>{user?.displayName}</td>
                                <td>{item.date}</td>
                                <td>${item.price}</td>
                                <td>{item.transactionId}</td>
                            </tr>

                        )}

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default HistoryPayment;