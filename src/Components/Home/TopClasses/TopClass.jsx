import React from 'react';
import useClassHook from '../../../Hook/useClassHook';

const TopClass = () => {
    const [classes] = useClassHook();
    const sortedClass = classes.sort((a, b) => Number(b.student) - Number(a.student));
    const topClass = sortedClass.slice(0, 6);
    // const seats = parseFloat(seats)
    //console.log(topClass)


    return (
        <div className='my-20'>
            <h1 className='text-center font-extrabold text-2xl my-10 uppercase'>Top Course in the Polyglot Academy</h1>
            <div className='grid md:grid-cols-3 gap-4 md:mx-20 mx-10'>
                {
                    topClass.map(course =>
                        <div key={course._id} className='text-center shadow-lg py-4 shadow-blue-400'>
                            <img className='h-64 w-64 mx-auto' src={course.image} alt="img" />
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