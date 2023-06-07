import React from 'react';

const AddClass = () => {

    const handleAddClass = (event) => {
        event.preventDefault();

        const form = event.target;
        const ClassName = form.ClassName.value;
        const price = form.price.value;
        const instructorName = form.instructorName.value;
        const email = form.email.value;
        const courses = form.courses.value;
        const seats = form.seats.value;
        const photoURL = form.photoURL.value;
        const descriptions = form.descriptions.value;
        

        const newCourse = { ClassName, price, instructorName, email, photoURL, courses, seats,  descriptions};

        console.log(newCourse);
    }
        return (
            <div className='md:py-20 md:mx-20'>
                <form onSubmit={handleAddClass} className="form-control px-20 py-20 login-img">
                    <h1 className='text-center font-extrabold text-4xl'>Add Class</h1>

                    {/* name, price section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text"> Class Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Class Name" name="ClassName" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="$Price" name="price" className="input 
                            input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* instructor name, instructor email section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Instructor Name" name="instructorName" className="input input-bordered w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="email" name="email" className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* course, seats section */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <p className='mb-1'>Courses</p>
                            <select className="select select-bordered w-96" name="courses">
                                <option disabled selected>Select Category</option>
                                <option>English</option>
                                <option>Korean</option>
                                <option>Arabic</option>
                                <option>Japanese</option>
                                <option>Chinese</option>
                                <option>German</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Available Seats" name="seats"
                                    className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>

                    {/* Image and descriptions */}
                    <div className='lg:flex items-center justify-center lg:space-x-8'>
                        <div>
                            <label className="label">
                                <span className="label-text"> PhotoURL</span>
                            </label>
                            <label className="input-group">
                                <input type="file" name="photoURL" className="file-input file-input-bordered file-input-info w-96" />
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Descriptions</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="descriptions" name="descriptions" className="input input-bordered w-96" />
                            </label>
                        </div>
                    </div>
                    <div className='text-center my-4'>
                        <input className="btn btn-wide btn-outline btn-error" type="submit" value="Add Toy" />
                    </div>
                </form>
            </div>

        );
    };

    export default AddClass;