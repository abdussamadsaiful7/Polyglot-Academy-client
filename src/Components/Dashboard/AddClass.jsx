import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../Axious/UseAxiosSecure';

const img_hosting_token = import.meta.env.VITE_Image_token;

const AddClass = () => {
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = UseAxiosSecure();
    const img_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.photoURL[0])
        fetch(img_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { ClassName, price, instructorName, student,  courses, seats, descriptions } = data;
                    const newClass = { ClassName, instructorName, student, descriptions, price: parseFloat(price), courses, seats, image: imgURL }
                    console.log(newClass)
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added Successfully!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }



    return (
        <div className='shadow-lg shadow-sky-400'>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control p-4 login-img">
                <h1 className='text-center font-extrabold text-3xl'>ADD COURSE</h1>

                {/* name, price section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <label className="label">
                            <span className="label-text"> Class Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Class Name" name="ClassName" {...register("ClassName", { required: true })} className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="$Price" name="price"
                                {...register("price", { required: true })} className="input 
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
                            <input type="text" placeholder="Instructor Name" name="instructorName"
                                {...register("instructorName", { required: true })} className="input input-bordered w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Number of Student</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="number of student" name="student"
                                {...register("student", { required: true })} className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* course, seats section */}
                <div className='lg:flex items-center justify-center lg:space-x-8'>
                    <div>
                        <p className='mb-1'>Courses</p>
                        <select defaultValue="Select Category"
                            className="select select-bordered w-96" name="courses"
                            {...register("courses", { required: true })} >
                            <option disabled >Select Category</option>
                            <option>English</option>
                            <option>Korean</option>
                            <option>Arabic</option>
                            <option>Japanese</option>
                            <option>Chinese</option>
                            <option>German</option>
                            <option>France</option>
                            <option>Malay</option>
                            <option>Portuguese</option>
                            <option>Italian</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Available Seats" name="seats"
                                {...register("seats", { required: true })}
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
                            <input type="file" name="photoURL"
                                {...register("photoURL", { required: true })}
                                className="file-input file-input-bordered file-input-info w-96" />
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Descriptions</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="descriptions" name="descriptions"
                                {...register("descriptions", { required: true })}
                                className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>
                <div className='text-center my-4'>
                    <input className="btn btn-wide btn-outline border-2 border-cyan-300" type="submit" value="Add Class" />
                </div>
            </form>
        </div>

    );
};

export default AddClass;