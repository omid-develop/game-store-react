import React from 'react'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainLayouts from "./layouts/MainLayouts";
import '../public/css/style.css';
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import OrderRegistrationProcedure from "./pages/OrderRegistrationProcedure";
import OrderSendingProcedure from "./pages/OrderSendingProcedure";
import SingleProduct from "./pages/SingleProduct";
import ReturningProduct from "./pages/ReturningProduct";
import SingleArticle from "./pages/SingleArticle";
import Store from "./pages/Store";


const router = createBrowserRouter([
    {
        path:"/" ,
        element:<MainLayouts/>,
        errorElement:<h3 className="text-lg-center text-white">صفحه مورد نظر یافت نشد ...</h3> ,

        children:[
            {
                path:"/" ,
                element:<App/>
            } ,

            {
                path: "/categories" ,
                element: <Categories/>
            } ,

            {
                path: "/about-us" ,
                element: <About/>
            } ,

            {
                path: "/contact-us" ,
                element: <Contact/>
            } ,

            {
                path: "/cart" ,
                element: <Cart/>
            } ,

            {
                path: "/category-product" ,
                element: <Category/>
            } ,

            {
                path: "/order-registration-procedure" ,
                element: <OrderRegistrationProcedure/>
            } ,

            {
                path: "/order-sending-procedure" ,
                element: <OrderSendingProcedure/>
            } ,

            {
                path: "/single-product" ,
                element: <SingleProduct/>
            } ,

            {
                path: "/returning-product" ,
                element: <ReturningProduct/>
            } ,

            {
                path: "/single-article" ,
                element: <SingleArticle/>
            } ,

            {
                path: "/store" ,
                element: <Store/>
            }

        ]

    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router}/>

  </React.StrictMode>,
)
