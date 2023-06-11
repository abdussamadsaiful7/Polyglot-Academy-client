import React from 'react';
import Swal from 'sweetalert2';
import useTitleHook from '../../Hook/useTitleHook';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
   const course = useLoaderData();
   console.log(course)
   // console.log(classes)
     const { _id, ClassName, instructorName, price, email, seats, student } = course;

        useTitleHook('Update page')

    const handleUpdateCourse = (event) => {
        event.preventDefault();

        const form = event.target;
        const ClassName = form.ClassName.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const price = form.price.value;
        const seats = form.seats.value;
        const student = form.student.value;
        
        const updatedCourse = { ClassName, instructorName, email, price, seats, student };

      //  console.log(updatedCourse);

        //send to the server;
        fetch(`https://foreign-school-server.vercel.app/classes/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCourse)
        })
            .then(res => res.json())
            .then(data => {
               // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Toy updated successfully!',
                        showConfirmButton: false,
                        timer: 1500,
                        
                    })
                }
               
                
            })
    }

    return (
        <div>
            <div className='login-img pt-20'>
                <form onSubmit={handleUpdateCourse}  className="form-control px-20 py-20 ">
                    <h1 className='text-center font-extrabold text-4xl'>Updated Course: {ClassName}</h1>

                    {/* name, price section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Course Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Course Name" defaultValue={ClassName} name="ClassName" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="$Price" name="price" defaultValue={price} className="input 
                            input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* inst. name, email section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Inst. Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Instructor Name" name="instructorName"
                                    defaultValue={instructorName}  className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text"> Inst. Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Instructor email" name="email"
                                    defaultValue={email}  className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* seats, student available */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Seat</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Available Seat" name="seats"
                                    defaultValue={seats} className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Number of Student</span>
                            </label>
                            <label className="input-group">
                                <input type="number" placeholder="Number of Student" name="student"
                                    defaultValue={student}  className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* details section */}
                    <div className='text-center my-4'>
                        <input className="btn btn-wide btn-outline btn-error" type="submit" value="Update" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;