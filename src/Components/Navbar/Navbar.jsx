import React, { useContext, useEffect, useState } from 'react';
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaCloudSun, FaFolderOpen, FaMoon } from "react-icons/fa";
import useSelectClass from '../../Hook/useSelectClass';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [select] = useSelectClass();
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme") === null) {
            localStorage.setItem("theme", "light");
        }
    }, [])

    useEffect(() => {
        const html = document.querySelector("html");
        if (localStorage.getItem("theme") === "dark") {
            html.classList.add("dark")
            setTheme("dark");
        } else {
            html.classList.remove("dark");
            setTheme("light")
        }
    }, [theme])

    const handleTheme = () => {
        if (localStorage.getItem("theme") === "light") {
            setTheme("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }
    };


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navTitle =
        <>
            <div className='lg:flex items-end justify-end px-6 font-bold text-white'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/allInstructor'>INSTRUCTORS</Link></li>
                <li><Link to='/allClass'>COURSES</Link></li>
                {user?.email &&
                    <li><Link to='/dashboard'>DASHBOARD</Link></li>
                }

                <li>
                    <Link className='relative mr-4' to='/dashboard/myCourse'>
                        <span className='text-3xl'><FaFolderOpen /></span>
                        <span className="badge  badge-sm bg-blue-500 absolute 
                        right-0 left-10 top-0 rounded-[60%]">+{select?.length || 0}</span>
                    </Link>
                </li>

            </div>
        </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black lg:px-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-500 rounded-box w-52 ">
                            {navTitle}
                            <div className="navbar-end ml-4 space-y-4">
                                {
                                    user ?
                                        <>
                                            <a className="btn btn-xs"><Link onClick={handleLogOut}>LOGOUT</Link></a>
                                            <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                                <div className="w-8 h-8 rounded-full 
                                         ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL} />
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <a className="btn btn-xs"> <Link to='/login'>LOGIN</Link></a>
                                }
                            </div>
                            <div className='ml-4'>
                                <button onClick={handleTheme}
                                    className=' rounded text-white text-4xl flex justify-center items-center'>
                                    {theme === "light" ? <FaCloudSun /> : <FaMoon />}
                                </button>
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-24 h-20' src={logo2} alt="" />
                        <h1> <span className='text-2xl font-semibold text-center text-white'>
                            Polyglot </span><br />
                            <span className="text-md spaced-text text-white"> A c a d e m y</span>
                        </h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navTitle}
                    </ul>
                </div>
                <div className="navbar-end hidden md:block">
                    {
                        user ?
                            <>
                                <a className="btn btn-outline btn-sm btn-error"><Link onClick={handleLogOut}>LOGOUT</Link></a>
                                <div className="avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <div className="w-8 ml-4  rounded-full 
                                         ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={user?.photoURL} />
                                    </div>
                                </div>
                            </>
                            :
                            <a className="btn btn-outline btn-sm btn-error"> <Link to='/login'>LOGIN</Link></a>
                    }
                </div>
                <div className='md:ml-4 hidden md:block'>
                    <button onClick={handleTheme}
                        className=' rounded text-white text-4xl flex justify-center items-center'>
                        {theme === "light" ? <FaCloudSun /> : <FaMoon />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;