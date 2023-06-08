import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllInstructor = () => {
    const loadAllInstructor = useLoaderData();
    const [instructor, setInstructor] = useState(loadAllInstructor);
    console.log(instructor)
    return (
        <div className='py-24 md:px-10'>
            <h1 className='text-center font-extrabold my-10'>ALL INSTRUCTORS</h1>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    instructor.map(inst =>
                        <div key={inst._id}>
                            <img className='h-64' src={inst.image} alt="" />
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