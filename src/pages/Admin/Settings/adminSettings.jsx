import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Account from "../../../assets/images/account.png";
import PasswordInput from "../../../components/PasswordInput/passwordInput";
import Table from "../../../components/Table/table";
import { Link } from "react-router-dom";

const AdminSettings = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const addUserRef = useRef(null);
  const editUserRef = useRef(null);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
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
    setShowAddUser(true);
  };

  const handleEditUserClick = () => {
    setShowEditUser(true);
  };

  const isAddUserDisabled = () => {
    if (active === "Users") {
      return !(email && role);
    }

    return !active;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showAddUser &&
        addUserRef.current &&
        !addUserRef.current.contains(event.target)
      ) {
        setShowAddUser(false);
      }
      if (
        showEditUser &&
        editUserRef.current &&
        !editUserRef.current.contains(event.target)
      ) {
        setShowEditUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAddUser, showEditUser]);

  const userData = [
    {
      name: "Nneoma Onuoha",
      role: "Admin",
      dateAdded: "2024-12-01",
      action: "Edit User",
    },
    {
      name: "Ifeanyi Tochi",
      role: "Super Admin",
      dateAdded: "2024-11-15",
      action: "Edit User",
    },
  ];

  const columnsMapping = {
    Users: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Role",
        accessor: "role",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Date Added",
        accessor: "dateAdded",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <button
            onClick={() => handleEditUserClick(row.original)}
            className="text-blue-500 underline hover:text-blue-700"
          >
            {row.original.action}
          </button>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
  };

  const columns = columnsMapping[active];

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
            onClick={() => handleActive("Users")}
          >
            Users
          </p>
        </div>

        <div className="flex gap-8 items-center">
          {active === "Users" && (
            <button
              className="text-custom-purple border border-custom-purple px-6 py-2 rounded-md "
              onClick={handleAddUserClick}
            >
              Add User
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
            <div>
              <p className="text-custom-purple text-lg font-recoleta pl-8 pr-8 mt-8">
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
              <p className="text-custom-purple text-lg font-recoleta pl-8 pr-8 mt-12">
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
        ) : active === "Users" ? (
          <div className="p-8">
            <Table columns={columns} data={userData} />
          </div>
        ) : null}
      </div>

      <div className="flex-1">
        {showAddUser && <div className="overlay"></div>}
        {showAddUser && (
          <div
            ref={addUserRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Account} alt="users" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Add User
            </p>

            <div className="flex flex-col mt-12">
              <div className="flex-1 mb-4">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Email
                </p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-4 rounded-lg border border-[#B8B8B8] focus:outline-none"
                />
              </div>

              <div className="flex-1">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Role
                </p>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                >
                  {/* Add options dynamically later */}
                </select>
              </div>
            </div>

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowAddUser(false)}
              >
                Close
              </button>
              <button
                disabled={isAddUserDisabled()}
                className={`${
                  isAddUserDisabled()
                    ? "bg-[#d7cbef] text-white cursor-not-allowed"
                    : "bg-custom-purple text-white"
                } py-2 px-14 rounded font-recoleta text-l`}
              >
                Add User
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1">
        {showEditUser && <div className="overlay"></div>}
        {showEditUser && (
          <div
            ref={editUserRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Account} alt="users" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Edit User
            </p>

            <div className="flex flex-col mt-12">
              <div className="flex-1 mb-4">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Email
                </p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-4 rounded-lg border border-[#B8B8B8] focus:outline-none"
                />
              </div>

              <div className="flex-1">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Role
                </p>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                >
                  {/* Add options dynamically later */}
                </select>
              </div>
            </div>

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowEditUser(false)}
              >
                Close
              </button>
              <button
                disabled={isAddUserDisabled()}
                className={`${
                  isAddUserDisabled()
                    ? "bg-[#d7cbef] text-white cursor-not-allowed"
                    : "bg-custom-purple text-white"
                } py-2 px-14 rounded font-recoleta text-l`}
              >
                Edit User
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSettings;
