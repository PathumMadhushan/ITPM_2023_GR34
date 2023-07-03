/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css";
import { FaUsers,FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import {AiFillHome} from "react-icons/ai";
import {IoMdPeople} from "react-icons/io";
import {FaShare} from "react-icons/fa";
import logo from '../img/Screenshot_2023-05-13_132555-removebg-preview.png'
const AppHeader = ({ authenticated, onLogout }) => {
  return (
    <>
      <header aria-label="Page Header" className="bg-blue-900 ">
        <div className="mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h5 className="text-xl font-bold text-gray-900 ">

                <Link to="/" className="text-3xl text-white">
                  <img src={logo} style={{ height: "70px", width: "80px" }} />
                </Link>
              </h5>

            </div>
            <div>
              <h4 className="text-xl font-bold text-white "> Where every flavor tells a story!</h4>
            </div>
            <div className="flex items-center justify-end gap-4 ">
              <nav className="app-nav  text-white">
                {authenticated ? (
                  <ul>

                    <li>
                      <NavLink to="/home"><AiFillHome size={20}/></NavLink>
                    </li>

                    <li>
                      <NavLink to="/profile"><FaUserAlt size={20}/></NavLink>
                    </li>
                    <li>
                      <NavLink to="/users"><IoMdPeople size={30}/></NavLink>
                    </li>
                    <li>
                      <NavLink to="/shared"><FaShare size={20}/></NavLink>
                    </li>
                    <li>
                      <a onClick={onLogout}><IoLogOut size={20}/></a>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">Signup</NavLink>
                    </li>
                  </ul>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
