import React from 'react';
import { Link } from 'react-router-dom';
import AddClass from './AddClass';
import AddInstructor from './AddInstructor';

const Dashboard = () => {
    return (
        <div className='py-20'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <AddClass></AddClass>
                  
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/addClass'>ADD CLASS</Link></li>
                        <li><Link to='/addInstructor'>ADD INSTRUCTORS</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;