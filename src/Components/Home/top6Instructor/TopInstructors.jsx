import React from 'react';
import useInst from '../../../Hook/useInst';
import { Slide } from "react-awesome-reveal";

const TopInstructors = () => {
    const [instructors] = useInst();
    const popularInst = instructors.filter(item => item.category === "Popular")
    // console.log(popularInst)




    return (
        <div className='my-2 py-6 dark:bg-cyan-900 dark:text-white'>
            <Slide>
                <h1 className='text-center font-extrabold text-2xl my-10 uppercase '>Top Instructors in the Polyglot Academy</h1>
            </Slide>

            <div className='grid md:grid-cols-3 gap-12 md:mx-20 mx-10'>
                {
                    popularInst.map(inst =>

                        <div key={inst._id} className='text-center shadow-md hover:shadow-lg py-4 hover:shadow-red-400 w-full transition-transform duration-300 transform hover:scale-110'>
                            <img className='h-64  mx-auto w-full' src={inst.image} alt="img" />
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