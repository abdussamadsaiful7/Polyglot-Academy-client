import React from 'react';

const AddClass = () => {
    return (
        <div className='md:py-20 md:mx-20'>
            <form className="form-control px-20 py-20 login-img">
                <h1 className='text-center font-extrabold text-4xl'>Add Class</h1>

                {/* name, price section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text"> Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" name="ClassName" className="input input-bordered w-96" />
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

                {/* sub-category, ratings section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <p className='mb-1'>Courses</p>
                        <select className="select select-bordered w-96" name="category">
                            <option disabled selected>Select Category</option>
                            <option></option>
                            <option></option>
                            <option></option>
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
                            <input type="file" className="file-input file-input-bordered file-input-info w-96" />
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