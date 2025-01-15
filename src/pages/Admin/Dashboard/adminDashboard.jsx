import React, { useEffect, useRef, useState } from "react";
import "./adminDashboard.css";
import Bell from "../../../assets/images/bell 1.png";
import Account from "../../../assets/images/account.png";

const AdminDashboardPage = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState("");
  const [fullName, setFullName] = useState("");
  const [children, setChildren] = useState("");
  const [category, setCategory] = useState("");
  const [parent, setParent] = useState("");
  const [dob, setDob] = useState("");
  const createAccountRef = useRef(null);

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleAccountChange = (e) => {
    setAccountType(e.target.value);
  };

  const handleDOBChange = (e) => {
    setDob(e.target.Dobvalue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCreateAccount &&
        createAccountRef.current &&
        !createAccountRef.current.contains(event.target)
      ) {
        setShowCreateAccount(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCreateAccount]);

  const isCreateDisabled = () => {
    if (accountType === "Parent") {
      return !(email && children && accountType);
    }
    if (accountType === "Student") {
      return !(parent && student && dob);
    }
    if (accountType === "Tutor") {
      return !(fullName, category, email);
    }
    return !accountType;
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center pt-6 pb-3 px-8">
        <p className="text-2xl font-semibold text-[#160041] font-recoleta">
          Dashboard
        </p>
        <div className="flex gap-8 items-center">
          <button
            className="text-custom-purple border border-custom-purple px-6 py-2 rounded-md"
            onClick={handleCreateAccountClick}
          >
            Create Account
          </button>
          <img src={Bell} alt="Notification Bell" className="w-6 h-6" />
        </div>
      </div>

      <hr />

      <div className="flex-1">
        {showCreateAccount && <div className="overlay"></div>}
        {showCreateAccount && (
          <div
            ref={createAccountRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Account} alt="users" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Create Account
            </p>
            <p className="links text-lg font-airbnb mt-6">
              Select account type.
            </p>

            <div className="relative mt-2">
              <select
                value={accountType}
                onChange={handleAccountChange}
                className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
              >
                <option value="">Parent / Student / Tutor</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>

            {accountType === "Parent" && (
              <div className="flex items-start gap-4 mt-4">
                <div className="flex-1">
                  <p className="text-lg links mb-1 font-medium font-airbnb">
                    Enter Email
                  </p>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-4 rounded-lg border border-[#B8B8B8] focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-lg links mb-1 font-medium font-airbnb">
                    Select Children
                  </p>
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                  >
                    {/* Add options dynamically later */}
                  </select>
                </div>
              </div>
            )}

            {accountType === "Student" && (
              <div className="flex flex-col mt-4">
                <div className="flex-1">
                  <p className="text-lg links mb-1 font-medium font-airbnb">
                    Select Parent Account
                  </p>
                  <select
                    value={parent}
                    onChange={(e) => setParent(e.target.value)}
                    className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                  >
                    {/* Add options dynamically later */}
                  </select>
                </div>

                <div className="flex items-start gap-4 mt-4">
                  <div className="flex-1">
                    <p className="text-lg links mb-1 font-medium font-airbnb">
                      Student Name
                    </p>
                    <input
                      type="text"
                      value={student}
                      onChange={(e) => setStudent(e.target.value)}
                      className="w-full py-2 px-4 rounded-lg border border-[#B8B8B8] focus:outline-none"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg links mb-1 font-medium font-airbnb">
                      Date of Birth
                    </p>
                    <input
                      value={dob}
                      onChange={handleDOBChange}
                      type="date"
                      className="w-full py-2 px-4 rounded-lg font-recoleta text-transparent placeholder-transparent border border-[#B8B8B8] focus:outline-none calendar-gray"
                      onFocus={(e) =>
                        e.target.classList.remove("text-transparent")
                      }
                      onBlur={(e) => {
                        if (!e.target.value)
                          e.target.classList.add("text-transparent");
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {accountType === "Tutor" && (
              <div className="flex flex-col mt-4">
                <div className="flex-1">
                  <p className="text-lg links mb-1 font-medium font-airbnb">
                    Full Name
                  </p>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-2 px-4 rounded-lg border border-[#B8B8B8] focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-4 mt-4">
                  <div className="flex-1">
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
                      Category
                    </p>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                    >
                      {/* Add options dynamically later */}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowCreateAccount(false)}
              >
                Cancel
              </button>
              <button
                disabled={isCreateDisabled()}
                className={`${
                  isCreateDisabled()
                    ? "bg-[#d7cbef] text-white cursor-not-allowed"
                    : "bg-custom-purple text-white"
                } py-2 px-8 rounded font-recoleta text-l`}
              >
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
