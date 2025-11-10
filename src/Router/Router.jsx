import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Component/Home";
import LoginPage from "../Component/LoginPage";
import Register from "../Component/Register";
import ForgotPassword from "../Component/ForgotPassword";
import Challenges from "../Component/Challenges";
import AllChallenges from "../Component/AllChallenges";
import AllTips from "../Component/AllTips";
import AllEvent from "../Component/AllEvent";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
            loader:() => fetch('http://localhost:5000/challenges')
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
        {
            path:'/tips',
            element:<AllTips></AllTips>
        },
        {
            path:'/all-event',
            element:<AllEvent></AllEvent>
        },
        {
            path:'/challenges',
            element:<AllChallenges></AllChallenges>,
            loader:() => fetch('http://localhost:5000/challenges')
            
        },
    ]
  },
]);
 

export default router