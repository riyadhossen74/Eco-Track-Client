import React, { use, useState } from "react";

import { TbXboxX } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";

import Navlink from "./Navlink";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [profile, setProfile] = useState();

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
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "susses log Out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error)
      });
  };
  return (
    <nav className="bg-white ">
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
            className={`md:hidden absolute left-1 top-15 w-48 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-black/20 border border-gray-200 dark:border-slate-700 transform transition-all duration-500  ${
              open
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-75 -translate-y-10 pointer-events-none"
            } p-5 text-black dark:text-white space-y-3`}
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
            {user ? (
              <div>
                <span onClick={() => setProfile(!profile)}>
                  {profile ? (
                    <img
                      className="w-[50px] rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[50px] rounded-full"
                      src={user.photoURL}
                      alt=""
                    />
                  )}
                </span>
                <ul
                  className={`absolute right-30  w-40 rounded-2xl bg-white dark:bg-slate-800 shadow-lg shadow-black/20 border border-gray-200 dark:border-slate-700 transform transition-all duration-500 origin-top  ${
                    profile
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-75 -translate-y-10 pointer-events-none"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 rounded-t-2xl transition-colors">
                    <Link
                      to="/*"
                      className="block text-gray-800 dark:text-white"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 rounded-t-2xl transition-colors">
                    <Link
                      to="/my-activates"
                      className="block text-gray-800 dark:text-white"
                    >
                      My Activates
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-amber-100 dark:hover:bg-slate-700 rounded-b-2xl transition-colors">
                    <Link
                      onClick={handleLogOut}
                      className="block text-gray-800 dark:text-white"
                    >
                      Log Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex gap-2.5">
                <div
                  aria-label="User Login Button"
                  tabindex="0"
                  role="button"
                  class="user-profile"
                >
                  <Link to="/login" class="user-profile-inner">
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
                  <div></div>
                </div>
                <div
                  aria-label="User Login Button"
                  tabindex="0"
                  role="button"
                  class="user-profile"
                >
                  <Link to="/register" class="user-profile-inner">
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
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
