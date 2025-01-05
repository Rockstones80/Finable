import React from "react";
import Button from "./button";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar bg-gray-300 bg-opacity-30 shadow-md w-full fixed top-0 left-0 font-Nunito p-4 flex">
        <ul className="hidden md:flex md:items-center space-x-4 cursor-pointer">
          <li>
            <a href="/" className="hover:text-green-500">
              How it works
            </a>
          </li>
          <li>
            <a href="/" className="hover:text-green-500">
              Our story
            </a>
          </li>
        </ul>

        <div className="text-green-500 text-2xl cursor-pointer font-bold md:px-5 flex items-center justify-center mx-auto">
          Finable
        </div>
        <ul>
          <li className="flex space-x-2 md:px-5 ">
            <Button>Login</Button>
            <Button>Sign up</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
