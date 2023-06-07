import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noNavbarFooter =location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noNavbarFooter ||  <Navbar></Navbar> }
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer> }
        </div>
    );
};

export default Main;