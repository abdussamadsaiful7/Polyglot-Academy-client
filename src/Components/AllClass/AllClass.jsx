import React, {  useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import CourseCard from './CourseCard';


const AllClass = () => {
    const loadAllClass = useLoaderData();
    const [AllCourses, setAllCourses] = useState(loadAllClass);
    const approvedData = AllCourses.filter(item => item.status === 'approved');
   
    return (
        <div className='py-24 md:px-10 p-4 bg-slate-300 dark:bg-cyan-900 e'>
            <h1 className='text-center font-extrabold my-10 text-2xl dark:text-white'>ALL COURSES</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                { 
                   approvedData.map(course=><CourseCard key={course._id} course={course}></CourseCard>) 
                }
            </div>
        </div>
    );
};

export default AllClass;