import React from "react";
import logo from "../../image/logo-garudmart.png";
import facebook from "../../image/facebook.png";
import twitter from "../../image/twitter.png";
import linkedin from "../../image/linkedin.png";
import youtube from "../../image/youtube.png";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row  w-full items-center justify-center mt-10 sm:mt-20 font-roboto">
      <div className="flex flex-col w-full md:w-1/3 pl-5 sm:pl-20 pr-3 sm:pr-20 md:p-0">
        <div className="flex items-center">
          <img className="w-10 sm:w-15" src={logo} alt="" />
          <h1 className="font-bold text-base sm:text-xl ml-5">Garuda Mart</h1>
        </div>
        <p className="font-normal text-xs sm:text-sm mt-3 sm:mt-5 mr-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          laboriosam minima iusto nobis eum assumenda officiis, recusandae
          provident, odio ad doloribus inventore qui facilis accusamus delectus
          magnam. Incidunt, laudantium fugiat.
        </p>

        <div className="flex items-center justify-left mt-5 space-x-4">
          <Link className="w-10 h-10 rounded-full bg-white shadow-xl shadow-stone-500 cursor-pointer flex items-center justify-center">
            <img className="w-5" src={facebook} alt="facebook" />
          </Link>
          <Link className="w-10 h-10 rounded-full bg-white shadow-xl shadow-stone-500 cursor-pointer flex items-center justify-center">
            <img className="w-5" src={twitter} alt="twitter" />
          </Link>
          <Link className="w-10 h-10 rounded-full bg-white shadow-xl shadow-stone-500 cursor-pointer flex items-center justify-center">
            <img className="w-5" src={linkedin} alt="linkedin" />
          </Link>
          <Link className="w-10 h-10 rounded-full bg-white shadow-xl shadow-stone-500 cursor-pointer flex items-center justify-center">
            <img className="w-5" src={youtube} alt="youTube" />
          </Link>
        </div>
      </div>
      <div className="ml-5 lg:ml-10 mt-4 flex flex-wrap  items-center justify-between w-full md:w-1/2 p-5 sm:p-20 md:p-0">
        <div>
          <h1 className="font-semibold text-sm sm:text-lg">Company</h1>
          <div className="link mt-3 sm:mt-5 flex flex-col ">
            <li>
              <Link className="font-medium text-xs sm:text-sm">About Us</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Careers</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Store Location</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Our Blog</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Reviews</Link>
            </li>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-sm sm:text-lg  sm:mt-0">CONSUMER POLICY</h1>
          <div className="link mt-5 flex flex-col ">
            <li>
              <Link className="font-medium text-xs sm:text-sm">Privacy Policy</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Terms & Conditions
</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Disclaimer
</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Returns & Refunds
</Link>
            </li>
           
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-sm sm:text-lg mt-4 sm:mt-0">Help</h1>
          <div className="link mt-5 flex flex-col ">
            <li>
              <Link className="font-medium text-xs sm:text-sm">Payments</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Shipping</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">Cancellation & Returns</Link>
            </li>
            <li>
              <Link className="font-medium text-xs sm:text-sm">FAQ</Link>
            </li>
           
          </div>
        </div>
      </div>
    </div>
    <div className="w-full h-[1px] opacity-20 bg-black mt-10 mb-10"></div>
    <div className="w-full pl-10 sm:pl-[6rem] flex items-center pb-10">
    <h1 className="text-sm sm:text-base">Copyright</h1>
        <p className="ml-2 mr-2">©</p>
        <p className="text-red text-sm sm:text-base">Garudamart India Pvt Ltd.</p>
    </div>
    </>
  );
};

export default Footer;
