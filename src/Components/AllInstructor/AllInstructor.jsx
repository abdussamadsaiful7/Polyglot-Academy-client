import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const AllInstructor = () => {
    const loadAllInstructor = useLoaderData();
    const [instructor, setInstructor] = useState(loadAllInstructor);
    console.log(instructor)
    return (
        <div className='py-20 md:px-10'>
            <div className='grid md:grid-cols-4 gap-4'>
                {
                    instructor.map(inst =>
                        <div>
                            <img src={inst.image} alt="" />
                            <p>Instructor Name: {inst.instructorName}</p>
                            <p>Email: {inst.email}</p>
                            <p>Status: {inst.category}</p>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AllInstructor;