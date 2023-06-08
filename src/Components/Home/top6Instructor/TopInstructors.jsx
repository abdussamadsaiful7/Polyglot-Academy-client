import React from 'react';
import useInst from '../../../Hook/useInst';

const TopInstructors = () => {
    const [instructors] = useInst();
    const popularInst = instructors.filter(item => item.category === "Popular")
    console.log(popularInst)




    return (
        <div className='my-20'>
            <h1 className='text-center font-extrabold text-2xl my-10 uppercase'>Top Instructors in the Polyglot Academy</h1>
            <div className='grid md:grid-cols-3 gap-4 md:mx-20 mx-10'>
                {
                    popularInst.map(inst =>
                        <div key={inst._id} className='text-center shadow-lg py-4 shadow-red-400'>
                            <img className='h-64 w-64 mx-auto' src={inst.image} alt="img" />
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

export default TopInstructors;