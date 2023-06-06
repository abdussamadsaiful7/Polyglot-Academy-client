import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import welcome from '../../assets/authentication1.png'
import useTitleHook from '../Hook/useTitleHook';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Login = () => {
    useTitleHook('Login')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true });
            })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200 login-img py-20">
                <div className="hero-content md:flex  my-14 md:mx-14 shadow-lg 
                   shadow-black md:pl-10">
                    <div className="text-center lg:text-left">
                        <img src={welcome} alt="image" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-2xl text-center font-bold">Login please!</h1>

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
                                <input type="password" placeholder="password"  {...register("password", { required: true })} className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='pl-4 pb-4'>Don't have an account ?
                            <Link className='text-red-500' to='/signUp'>Registration</Link>
                        </p>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;