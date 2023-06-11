import React, { useContext } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaBookReader, FaFolderOpen, FaHome, FaMoneyCheckAlt, FaRssSquare, FaServer, FaUniversity, FaUserTie, FaUsers } from 'react-icons/fa';
import useSelectClass from '../../Hook/useSelectClass';
import useAdmin from '../../Hook/useAdmin';
import useInstructor from '../../Hook/useInstructor';
import { AuthContext } from '../Provider/AuthProvider';
import icon from '../../assets/icon2.png'
import { Slide ,Zoom } from "react-awesome-reveal";

const Dashboard = () => {
    const [select] = useSelectClass();
    const { user } = useContext(AuthContext);


    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div >
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Slide>
                        <h2 className='text-4xl font-bold my-8'>WELCOME TO DASHBOARD</h2>
                    </Slide>
                    <Zoom>
                        <img className='w-32 h-32 mb-4' src={icon} alt="" />
                    </Zoom>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer
                    </label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu py-32 w-64 h-full bg-sky-200 text-base-content ">

                        { 
                            isAdmin &&
                            <>
                                <li><NavLink className={"shadow-sm shadow-red-400 "} activeClassName="active" to='/dashboard/adminHome' >< FaUniversity />ADMIN HOME</NavLink></li>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/manageStatus' ><FaServer />MANAGE STATUS</NavLink></li>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/manageUsers'>
                                    <FaUsers />MANAGE USERS</NavLink></li>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/addInstructor'><FaUserTie /> ADD INSTRUCTORS</NavLink></li>

                            </>
                        }

                        {
                            isInstructor &&
                            <>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/addClass'> <FaBookReader /> ADD COURSE</NavLink></li>


                            </>
                        }

                        {
                            user &&
                            <>

                                <div className="divider"></div>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/myCourse'><FaFolderOpen />
                                    MY SELECTED COURSE</NavLink></li>
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/myEnrolledCourse'><FaRssSquare />MY ENROLLED COURSE</NavLink></li>
                                {/* <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/studentPayment'><FaMoneyCheckAlt />PAYMENT</NavLink></li> */}
                                <li><NavLink className={"shadow-sm shadow-red-400"} activeClassName="active" to='/dashboard/historyPayment'><FaMoneyCheckAlt />HISTORY OF PAYMENT</NavLink></li>
                                <li><NavLink className={"shadow-sm shadow-red-400 my-2"} activeClassName="active" to='/'><FaHome />HOME</NavLink></li>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;