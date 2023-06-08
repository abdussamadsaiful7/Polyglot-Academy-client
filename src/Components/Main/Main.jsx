import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    const location = useLocation();
    const noNavbarFooter =location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            {noNavbarFooter ||  <Navbar></Navbar> }
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer> }
            <Toaster />
        </div>
    );
};

export default Main;