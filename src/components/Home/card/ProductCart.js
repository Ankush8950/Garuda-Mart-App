import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
// import heart from "../../../image/heart.png"
// import open_eye from "../../../image/open-eye.png"
import "./ProductCart.css";

const ProductCart = ({ items }) => {
  return (
    <div className="w-[270px] h-[330px] flex flex-col  cursor-pointer m-3 overflow-hidden">
      <div className="bg-lightgray w-full h-[240px] flex flex-col items-center justify-center shadow-md mb-5 relative productImg">
        <img className="w-[200px] h-[250px]  opacity-70" src={items.Image} alt="" />

        <div className="w-full  showPage">
          <button className="flex items-center justify-center w-full bg-black hover:bg-red font-roboto font-medium text-white p-2">
            <BsFillCartCheckFill size={20} />
            <h1 className="ml-2"> Add to cart</h1>
          </button>
          <div className="flex flex-col  shadow-2xl absolute top-0 right-0 items-left">
            <button className="tooltip bg-white rounded-lg w-10 h-10 pl-[10px] flex items-center justify-center hover:bg-red hover:text-white ">
              <AiOutlineHeart size={20} />
              <h1 className="tooltiptext">Add to whatchlist</h1>
            </button>
            <button className="tooltip bg-white rounded-lg w-10 h-10 pl-[10px] flex items-center justify-center mt-2 shadow-2xl hover:bg-red hover:text-white">
              <FiEye size={20} />
              <h1 className="tooltiptext">Quick view</h1>
            </button>
            <button className="tooltip bg-white rounded-lg w-10 h-10 pl-[10px] flex items-center justify-center mt-2 shadow-2xl hover:bg-red hover:text-white">
              <FiEye size={20} />
              <h1 className="tooltiptext">Product details</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <h1>{items.name}</h1>
        <p>{items.price}</p>
      </div>
    </div>
  );
};

export default ProductCart;
