import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllClass = () => {
    const loadAllClass = useLoaderData();
    const [classes, setClasses] = useState(loadAllClass);
    console.log(loadAllClass)
    return (
        <div className='py-24 md:px-10'>
            <h1 className='text-center font-extrabold my-10'>ALL CLASS</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    classes.map(course =>
                        <div key={course._id} className='text-center'>
                            <img className='h-64' src={course.image} alt="img" />
                            <p>Course Name: {course.ClassName}</p>
                            <p>Course fee: ${course.price}</p>
                            <p>Instructor Name: {course.instructorName}</p>
                            <p>Email: {course.email}</p>
                            <p>Available Seats: {course.seats}</p>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AllClass;