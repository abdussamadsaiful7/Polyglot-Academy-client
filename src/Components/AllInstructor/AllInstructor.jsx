import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Zoom } from "react-awesome-reveal";

const AllInstructor = () => {
    const loadAllInstructor = useLoaderData();
    const [instructor, setInstructor] = useState(loadAllInstructor);
    console.log(instructor)
    return (
        <div className='py-24 md:px-10 bg-slate-300 dark:bg-cyan-900 dark:text-white'>
            <Zoom>
                <h1 className='text-center font-extrabold my-10 text-2xl'>ALL INSTRUCTORS</h1>
            </Zoom>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    instructor.map(inst =>
                        <div key={inst._id} className='shadow-lg p-4 relative bg-white dark:bg-cyan-900
                         dark:text-white shadow-red-600'>
                            <img className='h-64 w-full transition-transform duration-300 transform hover:scale-110' src={inst.image} alt="photo" />
                            <p>Instructor Name: {inst.instructorName}</p>
                            <p>Email: {inst.email}</p>
                            <p>Status: {inst.category}</p>
                            <p>Language: {inst.courses}</p>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AllInstructor;