import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import PasswordInput from "../../../components/PasswordInput/passwordInput";

const TutorSetting = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showBilling, setShowBilling] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [active, setActive] = useState("Account");

  const handleActive = (classesType) => {
    setActive(classesType);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleAddUserClick = () => {
    setShowBilling(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 pl-8 pr-8">
        <div className="flex gap-12">
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleActive("Account")}
          >
            Account
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleActive("Billing")}
          >
            Billing
          </p>
        </div>

        <div className="flex gap-8 items-center">
          {active === "Billing" && (
            <button
              className="text-custom-purple border border-custom-purple px-6 py-2 rounded-md "
              onClick={handleAddUserClick}
            >
              Add Payout Card or Bank
            </button>
          )}

          <img src={Bell} alt="Notification Bell" />
        </div>
      </div>

      <div
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${active === "Account" ? "2px" : "100px"})`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div>
        {active === "Account" ? (
          <>
            <div className="flex pt-8  pl-8 pr-8 gap-32">
              <div className="flex flex-col">
                <p className="text-custom-purple text-lg font-recoleta">User</p>
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

                <p
                  className="mt-4 text-[#9868fd] font-airbnb"
                  onClick={handleClick}
                >
                  {image ? "Change Image" : "Upload Image"}
                </p>
              </div>
            </div>

            <p className="text-custom-purple text-lg font-recoleta pl-8 pr-8 mt-6">
              Location
            </p>

            <div className="flex pl-8 pr-8 gap-10">
              <div>
                <p className="text-base font-airbnb links mt-2">
                  Country of Origin
                </p>
                <select
                  value={countryOfOrigin}
                  onChange={(e) => setCountryOfOrigin(e.target.value)}
                  className="px-24 py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                ></select>
              </div>

              <div>
                <p className="text-base font-airbnb links mt-2">
                  Country of Residence
                </p>
                <select
                  value={countryOfOrigin}
                  onChange={(e) => setCountryOfOrigin(e.target.value)}
                  className="px-24 py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                ></select>
              </div>
            </div>

            <div className=" mt-8 flex pl-8 pr-8 gap-10">
              <div>
                <p className="text-base font-airbnb links mt-2">
                  System Timezone
                </p>
                <select
                  value={countryOfOrigin}
                  onChange={(e) => setCountryOfOrigin(e.target.value)}
                  className="px-24 py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                ></select>
              </div>

              <div>
                <p className="text-base font-airbnb links mt-2">
                  System Currency
                </p>
                <select
                  value={countryOfOrigin}
                  onChange={(e) => setCountryOfOrigin(e.target.value)}
                  className="px-24 py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                ></select>
              </div>
            </div>

            <div>
              <p className="text-custom-purple text-lg font-recoleta pl-8 pr-8 mt-6">
                Update Email
              </p>

              <div className="flex   pl-8 pr-8 gap-10">
                <div className="flex flex-col">
                  <p className="text-base font-airbnb links mt-2">
                    Current Email
                  </p>
                  <input
                    value={currentEmail}
                    onChange={(e) => setCurrentEmail(e.target.value)}
                    type="text"
                    className="w-full py-2 px-3  rounded-lg mt-3 font-recoleta placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-base font-airbnb links mt-2">New Email</p>

                  <input
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    type="text"
                    className="w-full py-2 px-3  rounded-lg mt-3 font-recoleta placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-custom-purple text-lg font-recoleta pl-8 pr-8 mt-8">
                Update Password
              </p>

              <div className="flex  pl-8 pr-8 gap-10">
                <div className="flex flex-col">
                  <p className="text-base font-airbnb links mt-2">
                    Current Password
                  </p>
                  <PasswordInput
                    value={password}
                    onChange={handlePasswordChange}
                    className="rounded-lg"
                  />
                </div>

                <div className="flex flex-col">
                  <p className="text-base font-airbnb links mt-2">
                    New Password
                  </p>

                  <PasswordInput
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-24 pl-8 pr-8">
              <button className="py-3 px-8 rounded font-recoleta text-l text-custom-purple border-2 border-custom-purple font-bold">
                Discard Changes
              </button>
              <button className="py-3 px-12 rounded font-recoleta text-l text-white font-bold bg-custom-purple">
                Save Changes
              </button>
            </div>
          </>
        ) : active === "Billing" ? (
          <div className="p-8">
            <p className="text-custom-purple text-lg font-recoleta">
              Payout Account & Cards
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TutorSetting;
