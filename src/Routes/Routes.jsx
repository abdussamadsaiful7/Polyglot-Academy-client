import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddClass from "../Components/Dashboard/AddClass";
import AddInstructor from "../Components/Dashboard/AddInstructor";
import AllInstructor from "../Components/AllInstructor/AllInstructor";
import AllClass from "../Components/AllClass/AllClass";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import MyCourse from "../Components/Dashboard/MyCourse";

import StudentPayment from "../Components/Dashboard/Payment/StudentPayment";
import ManageUsers from "../Components/Dashboard/ManageUsers";
import InstructorRoute from "../Components/PrivateRoute/InstructorRoute";
import AdminRoute from "../Components/PrivateRoute/AdminRoute";
import MyEnrolledCourse from "../Components/Dashboard/MyEnrolleCourse/MyEnrolledCourse";
import HistoryPayment from "../Components/Dashboard/HistoryPayment";
import ManageStatus from "../Components/Dashboard/ManageStatus/ManageStatus";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/allClass',
          element: <AllClass></AllClass>,
          loader: ()=>fetch('http://localhost:5000/classes')
        },
        {
          path: '/allInstructor',
          element: <AllInstructor></AllInstructor>,
          loader: ()=>fetch('http://localhost:5000/instructors')
        },
      ],  
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'addInstructor',
          element: <AdminRoute><AddInstructor></AddInstructor></AdminRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'manageStatus',
          element: <ManageStatus></ManageStatus>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'myCourse',
          element: <MyCourse></MyCourse>
        },
        {
          path: 'myEnrolledCourse',
          element: <MyEnrolledCourse></MyEnrolledCourse>
        },
        {
          path: 'StudentPayment',
          element: <StudentPayment></StudentPayment>
        },
        {
          path: 'historyPayment',
          element: <HistoryPayment></HistoryPayment>,
          //loader: ({params})=>fetch(`http://localhost:5000/selects${params.id}`)
        }
      ]
    }
  ]);

  export default router;