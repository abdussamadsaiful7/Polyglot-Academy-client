import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const AllClass = () => {
    const loadAllClass = useLoaderData();
    const [classes, setClasses] = useState(loadAllClass);
    // console.log(loadAllClass)
    const { user } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
   
    const handleAddCourse = classes => {
        if(user){
            fetch('http://localhost:5000/selects')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success('Added successfully!')
                }
            })
        }
        else {
            Swal.fire({
                title: 'At first login, please!',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
            })
        }
    }

   
    return (
        <div className='py-24 md:px-10 p-4 bg-slate-300'>
            <h1 className='text-center font-extrabold my-10 text-2xl'>ALL COURSES</h1>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    classes.map(course =>
                        <div key={course._id} className='text-center shadow-lg bg-white py-6 px-2'>
                            <img className='h-64 mx-auto' src={course.image} alt="img" />
                            <p>Course Name: {course.ClassName}</p>
                            <p>Course fee: ${course.price}</p>
                            <p>Instructor Name: {course.instructorName}</p>
                            <p>Number of Students: {course.student}</p>
                            <p>Available Seats: {course.seats}</p>

                            <Link>
                                <button onClick={()=>handleAddCourse(classes)}  className='btn btn-outline btn-sm rounded-none btn-error'>Select</button>
                            </Link>

                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default AllClass;