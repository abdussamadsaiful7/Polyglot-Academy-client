import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AddClass from './AddClass';
import AddInstructor from './AddInstructor';
import { FaHome } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className=''>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                   <Outlet></Outlet>
                  
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-32 w-64 h-full bg-sky-200 text-base-content ">
                        {/* Sidebar content here */}
                        <li><NavLink activeClassName="active" to='/dashboard/addClass'>ADD CLASS</NavLink></li>
                        <li><NavLink activeClassName="active" to='/dashboard/addInstructor'>ADD INSTRUCTORS</NavLink></li>
                        <li><NavLink activeClassName="active" to='/'><FaHome />HOME</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;