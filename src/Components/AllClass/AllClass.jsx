import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const AllClass = () => {
    const loadAllClass = useLoaderData();
    const [classes, setClasses] = useState(loadAllClass);
    const [disabled, setDisabled] = useState(false);
    // console.log(loadAllClass)
    const { user } = useContext(AuthContext);
    console.log(user)

    const notify = () => {

        if (user) {
            setDisabled(true);
            toast.success('Your course details is showed!');


        }
        else {
            toast.error('Sorry at first login, please!')
            Navigate('/login')
        }
    }

    return (
        <div className='py-24 md:px-10 p-4 bg-gray-300'>
            <h1 className='text-center font-extrabold my-10 text-2xl'>ALL COURSES</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    classes.map(course =>
                        <div key={course._id} className='text-center shadow-lg bg-white py-6 px-2'>
                            <img className='h-64 mx-auto' src={course.image} alt="img" />
                            <p>Course Name: {course.ClassName}</p>
                            <p>Course fee: ${course.price}</p>
                            <p>Instructor Name: {course.instructorName}</p>
                            <p>Number of Students: {course.student}</p>
                            <p>Available Seats: {course.seats}</p>

                            <Link  onClick={notify}>
                                <button disabled={disabled} className='btn btn-outline btn-sm rounded-none btn-error'>Select</button>
                            </Link>

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AllClass;