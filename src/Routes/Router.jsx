import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Education/Education";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/skills',
          element: <Skills></Skills>
        },
        {
          path:'/projects',
          element:<Projects></Projects>
        },
        {
          path: '/education',
          element :<Education></Education> 
        }
      ]
    },
  ]);