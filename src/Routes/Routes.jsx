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
          path: '/allInstructor',
          element: <AllInstructor></AllInstructor>,
          loader: ()=>fetch('http://localhost:5000/instructors')
        },
        {
          path: '/addClass',
          element: <AddClass></AddClass>
        },
        {
          path: '/addInstructor',
          element: <AddInstructor></AddInstructor>
        }
      ]
      
    },
  ]);

  export default router;