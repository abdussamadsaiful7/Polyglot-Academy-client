import React from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../../Axious/UseAxiosSecure';
import Swal from 'sweetalert2';


const img_hosting_token = import.meta.env.VITE_Image_token;
const AddInstructor = () => {
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
                    const { instructorName, email, courses, category, } = data;
                    const newInstructor = { instructorName, email, courses, category,  image: imgURL }
                    console.log(newInstructor)
                    axiosSecure.post('/instructors', newInstructor)
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control p-4 login-img">
                <h1 className='text-center font-extrabold text-4xl'>Add Instructor</h1>
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
                            <span className="label-text"> Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="email" name="email"
                                {...register("email", { required: true })} className="input input-bordered w-96" />
                        </label>
                    </div>
                </div>

                {/* course, category section */}
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
                            <option>Spanish</option>
                            <option>Malay</option>
                            <option>France</option>
                            <option>Italian</option>
                            <option>portuguese</option>
                        </select>
                    </div>
                    <div>
                        <p className='mb-1'>Category</p>
                        <select defaultValue="Select Category"
                            className="select select-bordered w-96" name="category"
                            {...register("category", { required: true })} >
                            <option disabled >Select Category</option>
                            <option>Popular</option>
                            <option>General</option>
                        </select>
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
                    <input className="btn btn-wide btn-outline btn-error" type="submit" value="Add Instructor" />
                </div>
            </form>
        </div>
    );
};

export default AddInstructor;