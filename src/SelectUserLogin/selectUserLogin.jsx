import React from "react";
import "./selectUserLogin.css";

const SelectUserLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-3">
      <div className="mb-28 logo text-3xl font-bold font-recoleta">SR.</div>

      <div className="text-center mb-8">
        <p className="text-logo-purple font-recoleta text-4xl font-bold">
          Select a User
        </p>
        <p className="text-2xl font-normal text-custom-black mb-10 mt-1">
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
        <button className="bg-custom-purple text-white py-3 px-16 rounded mt-16 font-recoleta text-xl">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default SelectUserLogin;
