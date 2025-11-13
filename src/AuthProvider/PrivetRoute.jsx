import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Spinar from "../Component/Spinar";


const PrivetRoute = ({ children }) => {
   const { loading, user } = use(AuthContext);
  const location = useLocation();
  // console.log(location)
  if (loading) {
    return <Spinar></Spinar>;
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
