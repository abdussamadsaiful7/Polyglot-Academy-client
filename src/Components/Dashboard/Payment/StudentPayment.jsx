
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useSelectClass from '../../../Hook/useSelectClass';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk)
const StudentPayment = () => {
    const [select]= useSelectClass();
   const total = select.reduce((sum,item) => sum + item.price,0);
   const price = parseFloat(total.toFixed(2))
   
    return (
        <div className='w-3/4'>
            <Elements stripe={stripePromise}>
                <CheckoutForm select={select} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default StudentPayment;