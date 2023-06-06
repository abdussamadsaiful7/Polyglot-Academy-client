import React from 'react';
import logo2 from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navTitle =
        <>
            <div className='lg:flex items-end justify-end px-6 font-bold'>
                <li><Link to='/'>HOME</Link></li>
                <li><Link>INSTRUCTORS</Link></li>
                <li><Link>CLASSES</Link></li>
                <li><Link>DASHBOARD</Link></li>
                <li><Link>UserPic</Link></li>
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
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           { navTitle}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <img className='w-24 h-20' src={logo2} alt="" />
                        <h1> <span className='text-2xl font-semibold text-center text-white'>
                            Polyglot </span><br />
                            <span className="text-md spaced-text text-white"> Academy</span>
                        </h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       { navTitle}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn"> <Link>LOGIN</Link></a>
                    <a className="btn"><Link>LOGOUT</Link></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;