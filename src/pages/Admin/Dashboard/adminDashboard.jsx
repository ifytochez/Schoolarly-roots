import React, { useState } from "react";
import "./adminDashboard.css";
import Bell from "../../../assets/images/bell 1.png";
import CreateAccount from "../../../components/CreateAccount/createAccount";

const AdminDashboardPage = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
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

      <CreateAccount
        showCreateAccount={showCreateAccount}
        setShowCreateAccount={setShowCreateAccount}
      />
    </div>
  );
};

export default AdminDashboardPage;
