
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';




const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk)
const StudentPayment = () => {
    const course = useLoaderData();
    console.log(course)
  // const total = course.reduce((sum,item) => sum + item.price,0);
   const price = parseFloat(course.price).toFixed(2)
   
    return (
        <div className='w-3/4'>
            <Elements stripe={stripePromise}>
                <CheckoutForm course={course} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default StudentPayment;