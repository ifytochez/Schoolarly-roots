import React from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/selectUserLogin");
  };

  return (
    <header>
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
          <button
            className="button px-12 py-2 text-white rounded ml-24"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>

      <hr className="border-[1px] border-[rgba(22,0,65,0.4)] w-[80%] mx-auto" />
    </header>
  );
};

export default Header;
