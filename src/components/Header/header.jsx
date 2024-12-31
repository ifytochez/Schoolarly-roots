import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="">
      <div className="w-[80%] mx-auto flex justify-start items-center py-4">
        <div className="logo text-2xl font-bold">SR.</div>

        <nav className="text flex space-x-10 ml-90">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#classes">Classes</a>
          <a href="#tutors">Tutors</a>
          <a href="#tutors">Contact Us</a>
        </nav>

        <div>
          <button className="button px-14 py-3 text-white rounded ml-20">
            Login
          </button>
        </div>
      </div>

      <hr className="line" />
    </header>
  );
};

export default Header;
