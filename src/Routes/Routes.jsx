import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/home',
            element: <Home></Home>
        }
      ]
      
    },
  ]);

  export default router;