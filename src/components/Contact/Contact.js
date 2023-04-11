import React, { useState } from "react";
import img from "../../image/contact-bg.png";
import Card from "./Card/Card";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <div
        className="w-full h-screen  flex  flex-col items-center  pt-[5rem]"
        style={{ backgroundImage: `url(${img})`, backgroundPosition: "center" }}
      >
        <h1 className="text-center font-normal uppercase font-roboto">
          get to know us
        </h1>
        <h1 className="font-bold text-7xl text-center w-[50rem] font-roboto leading-tight">
          Have a project in mind? Let’s talk.
        </h1>
        <div>
          <Card />
        </div>
      </div>
      <div className="w-full h-screen mt-[10rem] ">
        <div className="shadow-2xl rounded-xl m-[8rem] p-20">
          <form className="space-y-6">
            <div className="flex flex-wrap flex-col">
              <div className="mt-1 flex space-x-3 ">
                <div class="relative w-1/2 h-14 mt-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5  pt-4 h-full w-full text-sm text-gray-900 bg-gray rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Enter your name
                  </label>
                </div>
                <div class="relative w-1/2 h-14 mt-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5  pt-4 h-full w-full text-sm text-gray-900 bg-gray rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Enter your email
                  </label>
                </div>
              </div>
              <div className="mt-1 flex space-x-3 ">
                <div class="relative w-1/2 h-14 mt-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 h-full w-full text-sm text-gray-900 bg-gray rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Mobile no
                  </label>
                </div>
                <div class="relative w-1/2 h-14 mt-5">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5  pt-4 h-full w-full text-sm text-gray-900 bg-gray rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Company
                  </label>
                </div>
              </div>

              <div className="mt-1">
                <div class="relative w-full h-32">
                  <textarea
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 mt-5 h-full w-full text-sm text-gray-900 bg-gray rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Enter your name
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative  w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  text-white bg-red hover:bg-black "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
