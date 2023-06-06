import React from 'react';
import { Outlet } from 'react-router-dom';
import GoogleLogin from '../../GoogleLogin/GoogleLogin';

const Home = () => {
    return (
        <div>
           <h1>This is Home</h1>
           <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Home;