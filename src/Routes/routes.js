import React from "react";
import {
    createBrowserRouter,
    Link,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                path:'/login', 
                element:<Login></Login>
            }, 
            {
                path:'/register', 
                element:<Register></Register>
            }, 
            {
                path:'/services', 
                element:<Services></Services>
            }, 

        ],
    },

     
   
]);
