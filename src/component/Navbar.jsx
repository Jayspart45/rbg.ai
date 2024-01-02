import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assests/images/rbg.jpeg";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
export default function Navbar() {
  const navigate = useNavigate();
  const [toggleButton, setButton] = useState(false);
  const handleToggle = () => {
    setButton((state) => !state);
  };
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="hidden bg-white z-10  sticky top-0 left-0  max-w-5xl mx-auto  rounded-full shadow-lg m-2 md:flex  space-x-8 items-center font-Poppins py-4 px-4 md:px-6 lg:px-8">
        <div
          onClick={handleNavigate}
          className="text-2xl cursor-pointer font-bold"
        >
          <img src={logo} alt="" className="  rounded w-14" />
        </div>
        <ul className="flex flex-1 justify-center space-x-2 md:space-x-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2   border-blue-500" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2   border-red-500" : ""
            }
            to={"/research"}
          >
            Research
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-2   border-green-500" : ""
            }
            to={"/about"}
          >
            About us
          </NavLink>
        </ul>
      </nav>
      <nav className=" sticky bg-white z-10  top-0 left-0  md:hidden max-w-5xl mx-auto  rounded-full shadow m-2 flex   justify-between items-center font-Poppins  p-4 md:px-6 lg:px-8">
        <div
          onClick={handleNavigate}
          className="relative cursor-pointer  text-2xl font-bold"
        >
          <img src={logo} alt="" className=" rounded w-14" />
        </div>
        <CiMenuBurger onClick={handleToggle} style={{ fontSize: "32px" }} />
        {toggleButton ? (
          <ul className="left-0  bg-white top-0 absolute flex py-10 shadow-lg  flex-col  w-full p-5  justify-center   space-y-4">
            <img src={logo} alt="" className=" rounded w-14" />

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2   w-full duration-300 border-blue-500 p-2 rounded"
                  : "p-2 rounded"
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2  w-full duration-300  border-red-500 p-2 rounded"
                  : "p-2 rounded"
              }
              to={"/research"}
            >
              Research
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-2   w-full duration-300 border-green-500 p-2 rounded"
                  : "p-2 rounded"
              }
              to={"/about"}
            >
              About us
            </NavLink>
            <button
              className="bg-blue-600 py-2 rounded text-gray-100 flex items-center justify-center gap-2"
              onClick={handleToggle}
            >
              <FaWindowClose style={{ fontSize: "24px" }} />
              Close
            </button>
          </ul>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
