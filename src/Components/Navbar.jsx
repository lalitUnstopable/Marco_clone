import React from "react";
import "../CSS/Navbar.css";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <header> */}
        <nav className="navbar navbar-expand-md fixed-top fw-bold">
          <button
            className="navbar-toggler toggle_btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#btn"
          >
           <i className="bi bi-menu-down toggle_icon"></i>
          </button>

          <div className="collapse navbar-collapse items_div" id="btn">
            <ul className="navbar-nav text-center  unordered_list">
              <li className="nav-item">
                <NavLink className="nav-link  text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item  ">
                <NavLink className="nav-link text-white"  to="/about">
                  About
                </NavLink>
                
              </li>

              <li className="nav-item  ">
                <NavLink className="nav-link text-white" to="/menu">
                  Menu
                </NavLink>
              </li>

              <li className="nav-item  ">
                <NavLink className="nav-link text-white" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              <li className="nav-item  ">
                <NavLink className="nav-link text-white"  to="/blogs">
                  Blogs
                </NavLink>
                {/* <div className="dropdown-menu drop_menu">
                  <NavLink className="dropdown-item" to="/blogs">Blog Home</NavLink>
                  <NavLink className="dropdown-item" to="/blogs">Blog Single</NavLink>
                </div> */}
              </li>

              <li className="nav-item  ">
                <NavLink className="nav-link text-white"  to="/pages">
                  Pages
                </NavLink>
                {/* <div className="dropdown-menu drop_menu">
                  <NavLink className="dropdown-item" to="/pages">Elements</NavLink>
                  <NavLink className="dropdown-item" to="/pages">Level 2</NavLink>
                </div> */}
              </li>

              <li className="nav-item  ">
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      {/* </header> */}
    </>
  );
}

export default Navbar;
