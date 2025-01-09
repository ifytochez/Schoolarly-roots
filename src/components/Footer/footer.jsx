import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="line" />
      <div className="w-[80%] mx-auto flex justify-between items-center py-4">
        <div className="logo text-2xl font-bold">SR.</div>

        <nav className="text flex space-x-10">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#classes">Classes</a>
          <a href="#tutors">Tutors</a>
          <a href="#tutors">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
