import React, {  useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';


const AllClass = () => {
    const loadAllClass = useLoaderData();
    const [AllCourses, setAllCourses] = useState(loadAllClass);
   
    return (
        <div className='py-24 md:px-10 p-4 bg-slate-300'>
            <h1 className='text-center font-extrabold my-10 text-2xl'>ALL COURSES</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                { 
                   AllCourses.map(course=><CourseCard key={course._id} course={course}></CourseCard>) 
                }
            </div>
        </div>
    );
};

export default AllClass;