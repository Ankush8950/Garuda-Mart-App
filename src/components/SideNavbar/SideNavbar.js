import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../image/logo-garudmart.png";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";
import linkedin from "../../image/linkedin.png";
import youtube from "../../image/youtube.png";
import { GrFormClose } from "react-icons/gr";

const Navbar = ({ setHamberger, hamberger }) => {
  const [toggel, setToggel] = useState(false);
  return (
    <div className="w-screen absolute top-0 right-0 flex ">
      <div
        className=" sm:w-full bg-lightblack"
        onClick={() => setHamberger(!hamberger)}
      ></div>
      <div className="bg-white w-full sm:w-[500px] h-full pt-[3rem] pb-5 pl-5 relative">
        <div
          className="absolute right-10 top-10 border-2 rounded-full opacity-70"
          onClick={() => setHamberger(!hamberger)}
        >
          <MdOutlineClose size={22} />
        </div>
        <div className="navbar-start w-full">
          <Link
            to="/"
            className="logo flex items-center normal-case text-xl border-none"
          >
            <img className="w-10 h-10" src={logo} alt="" />
            <h1 className="font-medium ml-1 font-roboto">Garuda Mart</h1>
          </Link>
        </div>
        <div className="navbar-center  flex flex-col  font-roboto opacity-75">
          <ul className=" font-medium text-sm mt-5 space-y-3 uppercase ml-2 mr-[3rem] mb-5">
            <li className="border-b-[1.5px]">
              <Link to="/">Home</Link>
            </li>
            <li className="border-b-[1.5px]">
              <Link to="/television">Television</Link>
            </li>
            <li className="border-b-[1.5px]">
              <Link to="/about">About Us</Link>
            </li>
            <li className="border-b-[1.5px]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="border-b-[1.5px] flex justify-between items-center">
              <Link to="/shop">E-Bikes</Link>

              <div className="mr-5 border p-[1px] mb-1 hover:bg-red">
                {toggel ? (
                  <GrFormClose size={20} onClick={() => setToggel(!toggel)} />
                ) : (
                  <AiOutlinePlus size={20} onClick={() => setToggel(!toggel)} />
                )}
              </div>
            </li>
            <li>
              {toggel ? (
                <div>
                  <li className="border-b-[1.5px] pl-5 ">
                    <Link>Bikes</Link>
                  </li>
                  <li className="border-b-[1.5px] pl-5 mt-2">
                    <Link>Cycle</Link>
                  </li>
                </div>
              ) : (
                ""
              )}
            </li>
            <li className="border-b-[1.5px]">
              <Link to="gallery">Gallery</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="pl-4 pr-4 pt-2 pb-2 bg-red text-white capitalize font-medium text-sm rounded ">
            Getting Started
          </button>
        </div>
        <div className="mt-3 ">
          <h1 className="capitalize font-medium text-lg ">Follow :</h1>
          <div className="flex space-x-2 mt-2">
            <img
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
              src={facebook}
              alt="facebook"
            />
            <img
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
              src={twitter}
              alt="twitter"
            />
            <img
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
              src={linkedin}
              alt="linkedin"
            />
            <img
              className="w-10 h-10 border-saltpan border p-2 rounded shadow-xl "
              src={youtube}
              alt="youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
