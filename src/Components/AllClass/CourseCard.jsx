import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast } from 'react-hot-toast';
import useSelectClass from '../../Hook/useSelectClass';

const CourseCard = ({ course }) => {
    console.log(course)
    const{user} = useContext(AuthContext);
    const [, refetch] = useSelectClass(); 

    const {_id, ClassName, courses, image, instructorName, price, seats, student  } = course;
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddCourse = classes => {
        if (user && user?.email) {
            const selectCourse = { courseId: classes._id, ClassName, courses, image, instructorName, price, seats, student, email: user?.email }
            fetch('http://localhost:5000/selects', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
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
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }



    return (

        <div>
            
            <div className='text-center shadow-lg bg-white py-6 px-2'>
                <img className='h-64 mx-auto' src={image} alt="img" />
                <p>Course Name: {ClassName}</p>
                <p>Course fee: ${price}</p>
                <p>Instructor Name: {instructorName}</p>
                <p>Number of Students: {student}</p>
                <p>Available Seats: {seats}</p>

                <Link>
                    <button onClick={() => handleAddCourse(course)} className='btn btn-outline btn-sm rounded-none btn-error'>Select</button>
                </Link>

            </div>
        </div>

    );
};

export default CourseCard;