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
import MyClass from "../Components/AllClass/ClassDetails";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import MyCourse from "../Components/Dashboard/MyCourse";
import MyEnrolledCourse from "../Components/Dashboard/MyEnrolledCourse";
import StudentPayment from "../Components/Dashboard/StudentPayment";

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
          path: 'addClass',
          element: <AddClass></AddClass>
        },
        {
          path: 'addInstructor',
          element: <AddInstructor></AddInstructor>
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
        }
      ]
    }
  ]);

  export default router;