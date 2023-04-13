import React from "react";
import ProductCart from "./cart/ProductCart";
import ProductObj from "./cart/ProductObj.js";
import "./Home.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import homeLed from "../../image/pngegg.png"
import {BsArrowRightShort} from "react-icons/bs"

const Home = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 2,
        },
      },
    ],
  };
  return (
    <div>
    {/* Home page */}
  <div className="w-full min-h-full md:h-screen  flex flex-col-reverse md:flex-row items-center justify-between font-roboto pl-10 pr-10 bg-saltpan pb-10 md:pb-0">
      <div className="flex flex-col ">
      <div className="flex items-center">
        <div className="w-[2px] h-8 bg-red"></div>
        <h1 className="font-normal text-lg ml-3">Best product Freezers</h1>
        </div>
        <h1 className="font-bold text-3xl sm:text-5xl w-full sm:w-[450px] mt-5 leading-tight tracking-wide">Televisions with  Smart Technology</h1>
        <button className="flex items-center justify-center border-2 font-normal text-sm rounded-lg w-[150px] p-2 mt-5 hover:bg-black hover:text-white ">Shop Now <BsArrowRightShort size={25}/> </button>
      </div>
      <div>
        <img className="w-[500px]" src={homeLed} alt="led" />
      </div>
  </div>

  {/* slider */}

    <div className="mt-20 slider font-roboto">
      <Slider {...settings} className="slider">
        {ProductObj.map((items)=>{
          return (
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[300px] cursor-pointer">
                <div className=" m-3 flex items-center justify-center shadow-2xl  rounded-lg" style={{backgroundColor: items.color}}>
                  <img className="w-[200px] h-[170px] sm:h-[250px]" src={items.Image} alt="" />
                </div>
                <h1 className="ml-3 font-medium text-sm">{items.name}</h1>
            </div>
          )
        })}
      </Slider>



    </div>

    {/* product page */}
      <div className="font-roboto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between p-10 ">
        <div className="flex items-center">
        <div className="w-1 h-10 bg-red"></div>
          <h1 className="font-bold text-3xl ml-2">Popular Products</h1>
          </div>
          <div className="flex space-x-10 font-roboto mt-5 md:mt-0">
            <button className="font-medium text-sm text-red border-b-2">Top Rated</button>
            <button className="font-medium text-sm">Best Selling</button>
            <button className="font-medium text-sm">Latest Product</button>
          </div>
        </div>
        <div className="flex flex-wrap m-2 items-center justify-center">
          {ProductObj.map((items, index) => {
            return <ProductCart items={items} key={items.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
