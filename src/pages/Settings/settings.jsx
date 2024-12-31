import React, { useRef, useState } from "react";
import "../../index.css";
import "./settings.css";

import Bell from "../../assets/images/bell 1.png";

const SettingsPage = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 pl-8 pr-8">
        <p className="airbnb  text-lg">Account</p>
        <img src={Bell} alt="Notification Bell" />
      </div>

      <div
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div className="flex pt-8  pl-8 pr-8 gap-32">
        <div className="flex flex-col">
          <p className="text-custom-purple text-lg font-recoleta">Biodata</p>
          <p className="text-base font-airbnb links mt-3">Full Name</p>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-lg mt-3 font-recoleta text-l border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center">
          <button
            className="w-24 h-24 flex items-center justify-center rounded-full border-2 border-dashed border-gray-400 text-gray-800"
            onClick={handleClick}
          >
            <span className="text-3xl">+</span>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          <p className="mt-4 text-[#9868fd] font-airbnb" onClick={handleClick}>
            {image ? "Change Image" : "Upload Image"}
          </p>
        </div>
      </div>

      <div className="flex pt-8  pl-8 pr-8 gap-10">
        <div className="flex flex-col">
          <p className="text-base font-airbnb links mt-4">Date of Birth</p>
          <input
            type="date"
            className="w-full py-2 pr-1 pl-24 rounded-lg mt-3 font-recoleta text-transparent placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
            onFocus={(e) => e.target.classList.remove("text-transparent")}
            onBlur={(e) => {
              if (!e.target.value) e.target.classList.add("text-transparent");
            }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-base font-airbnb links mt-4">Gender</p>
          <div className="relative mt-3">
            <select
              value={gender}
              onChange={handleGenderChange}
              className="w-full py-2.5 px-24 rounded-lg font-recoleta text-sm text-[rgba(89, 89, 89, 1)] border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none"
            >
              <option value="" hidden></option> {/* Empty option */}
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex gap-6 mt-24 pl-44 pr-8">
        <button className="py-3 px-8 rounded font-recoleta text-l text-custom-purple border-2 border-custom-purple font-bold">
          Discard Changes
        </button>
        <button className="py-3 px-12 rounded font-recoleta text-l text-white font-bold bg-custom-purple">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
