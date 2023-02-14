import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import ServiceDetails from '../Pages/Services/ServiceDetails'
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
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
            {
                path:'/blog', 
                element:<Blog></Blog>
            }, 
            {
                path: `/service/:id`,
                loader:async  function ({ params }){
                    const id = params.id;
                      const  fech = await fetch(`https://11s-assignment.vercel.app/service/${id}`)
                     const fechData =  await fech.json()
                     const {serviceData} = fechData;
                    return serviceData; 
                },
                element:<ServiceDetails></ServiceDetails>, 
            }, 
            {
                path:'/myreviews', 
                element:<MyReviews></MyReviews>, 
            },
            {
                path:`/update/:id`, 
                element:<UpdateReview></UpdateReview>, 
                loader:async ({params})=>{
                    const id = params.id;
                    const fetchRes = fetch(`https://11s-assignment.vercel.app/update/${id}`)
                    const fetchData = await fetchRes;
                    const data = await fetchData.json();
                    return data;
                }
                
            }
        ],
    },

     
   
]);
