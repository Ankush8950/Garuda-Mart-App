import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo-garudmart.png";
import cart from "../../image/cart.png";
import styles from "./Navbar.css";
import Add_user from "../../image/add-user.png"

const Navbar = () => {
  return (
    <div className="navbar bg-saltpan h-20 p-10">
      <div className="navbar-start">
        <NavLink
          to="/"
          className="logo flex items-center normal-case text-xl border-none"
        >
          <img className="w-10 h-10" src={logo} alt="" />
          <h1 className="font-medium ml-1 font-roboto">Garuda Mart</h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex font-roboto opacity-75">
        <ul className="menu menu-horizontal px-1 font-medium text-base">
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="/television">Television</NavLink>
          </li>
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="gallery">Gallery</NavLink>
          </li>

          <li tabIndex={0}>
            <NavLink to="/pages">
              Pages
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="p-2 bg-white">
              <li>
                <NavLink>Submenu 1</NavLink>
              </li>
              <li>
                <NavLink>Submenu 2</NavLink>
              </li>
            </ul>
          </li>
          <li
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <button>
          <img className="w-7 mr-5" src={Add_user} alt="" />
      </button>
        <button>
          <img className="w-7" src={cart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;