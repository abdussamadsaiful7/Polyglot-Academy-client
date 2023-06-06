import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import useTitleHook from '../Hook/useTitleHook';
import f404 from '../../assets/f404.jpg'

const ErrorPage = () => {
    const { err, status } = useRouteError();
    useTitleHook('404-Page')
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-10'>
                    <img className='w-80 h-80' src={f404}/>
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-6xl text-gray-600'>
                            <span className='sr-only'>Error</span> {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8'>
                            {err?.message}
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-yellow-500 text-gray-900 mb-8'
                        >
                            Back to Home page
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;