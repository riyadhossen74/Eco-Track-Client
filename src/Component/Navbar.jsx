import React, { use, useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router";
import Navlink from "./Navlink";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut}= use(AuthContext)
  
  const navData = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Challenges",
      path: "/challenges",
    },
    {
      id: 3,
      name: "My Activates",
      path: "/my-activates",
    },
    {
      id: 4,
      name: "Tips",
      path: "/tips",
    },
    {
      id: 5,
      name: "Event",
      path: "/all-event",
    },
  ];
  const link = navData.map((data) => (
    <Navlink data={data} key={data.id}></Navlink>
  ));
  const [open, setOpen] = useState(false);

   const handleLogOut = () => {
  
    logOut()
      .then((result) => {
        alert("susses log Out");
      })
      .catch(error =>{
        // console.log(error)
      });
  };
  return (
    <nav className="bg-white">
      <div className="flex justify-between px-5 md:px-30 items-center shadow py-2">
        <div className="flex items-center text-[#9F62F2] text-2xl font-semibold  gap-1.5  ">
          <span onClick={() => setOpen(!open)}>
            {open ? (
              <TbXboxX className="text-black md:hidden" />
            ) : (
              <CiMenuBurger className="text-black md:hidden" />
            )}
          </span>
          <ul
            className={`'md:hidden absolute duration-1000 z-50 bg-amber-400 p-5 text-black ${
              open ? "top-10" : "-top-200"
            }`}
          >
            {link}
          </ul>
          <Link to="/">
            <img
              className="md:w-[50px] w-8 ml-1.5"
              src="/Eco_track.png"
              alt="Eco_Track"
            />
          </Link>
          <h1 className="hidden md:block">Eco-Track</h1>
        </div>
        <div>
          <ul className="md:flex gap-6 font-semibold hidden">{link}</ul>
        </div>
        <div>
          
          <div className="flex gap-2.5">
            {user?
           <div
           onClick={handleLogOut}
            aria-label="User Login Button"
            tabindex="0"
            role="button"
            class="user-profile"
          >
            <button  class="user-profile-inner">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"></path>
                </g>
              </svg>
              <p>Logout</p>
            </button>
            <div>
              
            </div>
          </div>:
           <div className="flex gap-2.5">
            <div
            aria-label="User Login Button"
            tabindex="0"
            role="button"
            class="user-profile"
          >
            <Link to='/login' class="user-profile-inner">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"></path>
                </g>
              </svg>
              <p>Log In</p>
            </Link>
            <div>
              
            </div>
          </div>
            <div
            aria-label="User Login Button"
            tabindex="0"
            role="button"
            class="user-profile"
          >
            <Link to='/register' class="user-profile-inner">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z"></path>
                </g>
              </svg>
              <p>SignUp</p>
            </Link>
            <div>
              
            </div>
          </div>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
