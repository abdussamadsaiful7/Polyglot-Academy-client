import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosSecure from '../../../Axious/UseAxiosSecure';
import Swal from 'sweetalert2';
import useSelectClass from '../../../Hook/useSelectClass';


const CheckoutForm = ({ course, price }) => {
    // const select = useLoaderData([]);
    //  console.log(select)
    const stripe = useStripe();
    const elements = useElements();
    const [, refetch] = useSelectClass();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const [enroll, setEnroll] = useState([]);


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    //console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error);
            setCardError(error.message);
        }

        else {
            setCardError('');
            //console.log('payment method', paymentMethod);
        }

        setProcessing(true);


        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'Unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }



        console.log(paymentIntent)
        setProcessing(false);



        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const { _id, ClassName, courses, image, student, email, courseId, 
                instructorName, seats, price, } = course;

                 //update
                 const updateSeats = enroll.map(up=>{
                    if(up._id === course.courseId){
                        fetch(`http://localhost:5050/updateClass/${course.courseId}`,{
                            method: 'PUT',
                            headers: {
                                "content-type":"application/json"
                            },
                            body: JSON.stringify({
                                seats: parseInt( up.seats) -1, student: parseInt(up.student) +1
                            })
                        })
                        .then(res =>res.json())
                        .then(updateClass =>{
                            console.log('updatedClass', updateClass)
                        })
                    }

                })
                setEnroll(updateSeats);




            const payment = {
                image,
                name: user.displayName,
                ClassName,
                instructorName,
                courses,
                email,
                seats:parseInt(seats),
                email: user?.email,
                student:parseInt(student),
                transactionId: paymentIntent.id,
                price,
                courseId,
                // date: new Date(),
                selectedId: _id
            }



            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added on the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }

    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='md:ml-48'>
                    <button className='btn btn-outline btn-wide btn-error mt-8' type="submit"
                        disabled={!stripe || !clientSecret || processing}
                    >
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transactionId && <p className='text-green-500'>Transaction complete with transactionId:
                {transactionId}</p>}
        </>
    );
}

export default CheckoutForm;

/// disabled={!stripe || !clientSecret || processing}