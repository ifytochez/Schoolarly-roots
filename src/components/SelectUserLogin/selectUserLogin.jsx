import React from "react";
// import "./selectUserLogin.css";
import { useNavigate } from "react-router-dom";

const SelectUserLogin = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleProceed = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-3 bg-[#f5f2fd]">
      <div className="mb-28 logo text-3xl font-bold font-recoleta">SR.</div>

      <div className="text-center mb-8">
        <p className="text-logo-purple font-recoleta text-4xl font-bold">
          Select a User
        </p>
        <p className="text-2xl font-normal text-custom-black mb-10 mt-1 font-airbnb">
          Select a user to login.
        </p>
      </div>

      <div className="flex space-x-16 mb-6">
        <div className="flex flex-col items-center">
          <button className="mb-5 rounded-full border px-12 py-12 bg-[rgba(217,217,217,1)]"></button>
          <p className="text-xl font-normal text-custom-black">FirstName</p>
          <p className="text-xl font-normal text-custom-black">LastName</p>
          <a className="text-custom-purple">parent account</a>
        </div>

        <div className="flex flex-col items-center">
          <button className="mb-5 rounded-full border px-12 py-12 bg-[rgba(217,217,217,1)]"></button>
          <p className="text-xl font-normal text-custom-black">Alexis</p>
          <p className="text-xl font-normal text-custom-black">Shatonbo</p>
          <a className="text-custom-purple">student account</a>
        </div>

        <div className="flex flex-col items-center">
          <button className="mb-5 rounded-full border px-12 py-12 bg-[rgba(217,217,217,1)]"></button>
          <p className="text-xl font-normal text-custom-black">FirstName</p>
          <p className="text-xl font-normal text-custom-black">LastName</p>
          <a className="text-custom-purple ">student account</a>
        </div>

        <div className="flex flex-col items-center">
          <button className="mb-5 rounded-full border px-12 py-12 bg-[rgba(217,217,217,1)]"></button>
          <p className="text-xl font-normal text-custom-black">FirstName</p>
          <p className="text-xl font-normal text-custom-black">LastName</p>
          <a className="text-custom-purple">parent account</a>
        </div>
      </div>

      <div>
        <button
          className="bg-custom-purple text-white py-3 px-16 rounded mt-16 font-recoleta text-xl"
          onClick={handleProceed}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SelectUserLogin;
