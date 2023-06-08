import React, { useContext, useRef } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import welcome from '../../assets/authentication1.png'
import useTitleHook from '../Hook/useTitleHook';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    useTitleHook('Registration')
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
   


    const onSubmit = data => {
        console.log(data);
        createUser(data.name, data.photoURL, data.email, data.password)
            .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser)
                    updateUserProfile(data.name, data.photoURL)
                    .then(()=>{
                        console.log('user profile info updated')
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User create Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/');

                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 login-img ">
                <div className="hero-content md:flex  my-14 md:mx-14 shadow-lg 
                         shadow-black md:pl-10">
                    <div className="text-center lg:text-left">
                        <img src={welcome} alt="image" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-2xl text-center font-bold">Registration please!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register("name", { required: true })}
                                    className="input input-bordered" />
                                {errors.name && <span className='text-red-500'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" {...register("photoURL", { required: true })}
                                    className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-500'>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,

                                })} className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-500'>password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-500'>password must be 6 character </p>}
                                {errors.password?.type === 'required' && <p className='text-red-500'>password must be one uppercase, special character</p>}
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" placeholder="password" {...register("confirmPassword", { required: true })}  className="input input-bordered" />  
                            </div> */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <p className='pl-4 pb-4'>Already have an account?
                            <Link className='text-red-500' to='/login'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;