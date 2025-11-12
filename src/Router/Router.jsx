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
import ChallengesDetalis from "../Component/ChallengesDetalis";
import CreateChallenges from "../Component/CreateChallenges";
import MyActivictes from "../Component/MyActivictes";
import Error from "../Error/Error";
import UpdateProgroess from "./UpdateProgroess";



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
            path:'/my-activates',
            element:<MyActivictes></MyActivictes>,
             
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
            path:'/my-activates/:id',
            element:<UpdateProgroess></UpdateProgroess>,
            loader: ({params}) => fetch(`http://localhost:5000/my-activities/${params.id}`)
        },
        {
            path:'/challenges',
            element:<AllChallenges></AllChallenges>,
            loader:() => fetch('http://localhost:5000/challenges')
            
        },
        {
            path:'/challenges/:id',
            element:<ChallengesDetalis></ChallengesDetalis>,
            loader: ({params}) => fetch(`http://localhost:5000/challenges/${params.id}`)
        },
        {
            path:'/create-challenges',
            element:<CreateChallenges></CreateChallenges>
        }

    ]
  },
  {
    path:'*',
    element:<Error></Error>
  }
]);
 

export default router