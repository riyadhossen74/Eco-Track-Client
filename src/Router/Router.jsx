import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Component/Home";
import LoginPage from "../Component/LoginPage";
import Register from "../Component/Register";
import ForgotPassword from "../Component/ForgotPassword";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<LoginPage></LoginPage>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/forgot',
            element:<ForgotPassword></ForgotPassword>
        },
    ]
  },
]);
 

export default router