import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const StudentRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const [isStudent, isStudentLoading] = useInstructor();
    const location = useLocation();

    if(loading || isStudentLoading ){
        return <progress className="progress w-56"></progress>
    }

    if (user && isStudent) {
        return children;
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};


export default StudentRoute;