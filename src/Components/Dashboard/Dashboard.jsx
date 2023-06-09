import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import AddClass from './AddClass';
import AddInstructor from './AddInstructor';
import { FaBookReader, FaFolderOpen, FaHome, FaMoneyCheckAlt, FaRssSquare, FaServer, FaUniversity, FaUserTie, FaUsers } from 'react-icons/fa';
import useSelectClass from '../../Hook/useSelectClass';
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {
    const [select] = useSelectClass();

    //TODO:
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div >
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-32 w-64 h-full bg-sky-200 text-base-content ">
                        {
                            isAdmin ?
                                <>
                                 <li><NavLink activeClassName="active" ><FaUniversity />ADMIN HOME</NavLink></li>
                                    <li><NavLink activeClassName="active" to='/dashboard/addClass'> <FaBookReader /> ADD COURSE</NavLink></li>
                                    <li><NavLink activeClassName="active" to='/dashboard/addInstructor'><FaUserTie /> ADD INSTRUCTORS</NavLink></li>
                                    <li><NavLink activeClassName="active" ><FaServer />MANAGE STATUS</NavLink></li>
                                    <li><NavLink activeClassName="active" to='/dashboard/manageUsers'><FaUsers />MANAGE USERS</NavLink></li>
                                   
                                </>
                                :
                                <>
                                    <li><NavLink activeClassName="active" to='/dashboard/myCourse'><FaFolderOpen />
                                        MY SELECTED COURSE
                                        <span className="badge  badge-sm bg-blue-500 absolute 
                                        right-0 left-40 top-0 rounded-[60%]">+{select?.length || 0}</span>
                                    </NavLink></li>
                                    <li><NavLink activeClassName="active" to='/dashboard/myEnrolledCourse'><FaRssSquare />MY ENROLLED COURSE</NavLink></li>
                                    <li><NavLink activeClassName="active" to='/dashboard/studentPayment'><FaMoneyCheckAlt />PAYMENT</NavLink></li>
                                </>
                        }
                        <li><NavLink activeClassName="active" to='/'><FaHome />HOME</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;