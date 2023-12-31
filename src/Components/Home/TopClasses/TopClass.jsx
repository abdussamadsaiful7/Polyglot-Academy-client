import React from 'react';
import useClassHook from '../../../Hook/useClassHook';
import {  Slide } from "react-awesome-reveal";

const TopClass = () => {
    const [classes] = useClassHook();
    const sortedClass = classes.sort((a, b) => Number(b.student) - Number(a.student));
    const topClass = sortedClass.slice(0, 6);
    // const seats = parseFloat(seats)
    //console.log(topClass)



    return (
        <div className='my-4 dark:bg-cyan-900 py-10 dark:text-white'>
            <Slide>
                <h1 className='text-center font-extrabold text-2xl my-10 uppercase '>Top Course in the Polyglot Academy</h1>
            </Slide>

            <div className='grid md:grid-cols-3 gap-12 md:mx-20 mx-10'>
                {
                    topClass.map(course =>
                        <div key={course._id} className='text-center shadow-md hover:shadow-lg py-4 hover:shadow-blue-400 w-full  transition-transform duration-300 transform hover:scale-110'>
                            <img className='h-64 mx-auto' src={course.image} alt="img" />
                            <p>Course Name: {course.ClassName}</p>
                            <p>Course fee: ${course.price}</p>
                            <p>Instructor Name: {course.instructorName}</p>
                            <p>Number of Students: {course.student}</p>
                            <p>Available Seats: {course.seats}</p>
                        </div>

                    )
                }
            </div>

        </div>
    );
};

export default TopClass;