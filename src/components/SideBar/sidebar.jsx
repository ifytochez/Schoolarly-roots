import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
import DashboardActive from "../../assets/images/bxs-dashboard.png";
import Classes from "../../assets/images/bx-classes.png";
import Homework from "../../assets/images/bx-homework.png";
import Schedule from "../../assets/images/bx-schedule.png";
import Reports from "../../assets/images/bx-reports.png";
import Settings from "../../assets/images/bx-settings.png";
import Users from "../../assets/images/users.png";
import Dashboard from "../../assets/images/bx-dashboard.png";
import ClassesActive from "../../assets/images/bxs-classes.png";
import HomeworkActive from "../../assets/images/bxs-homework.png";
import ScheduleActive from "../../assets/images/bxs-schedule.png";
import ReportsActive from "../../assets/images/bxs-reports.png";
import SettingsActive from "../../assets/images/bxs-settings.png";
import PasswordInput from "../PasswordInput/passwordInput";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [showSwitchUser, setShowSwitchUser] = useState(false);
  const [showProceedSwitchUser, setShowProceedSwitchUser] = useState(false);
  const [password, setPassword] = useState("");

  const switchUserRef = useRef(null);
  const proceedSwitchUserRef = useRef(null);

  const handleSetActiveLink = (linkId) => {
    setActiveLink(linkId);
    localStorage.setItem("activeLink", linkId);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSwitchUserClick = () => {
    setShowSwitchUser(true);
    setShowProceedSwitchUser(false);
  };

  const handleProceedSwitchUserClick = () => {
    setShowProceedSwitchUser(true);
    setShowSwitchUser(false);
  };

  const handleGoBackClick = () => {
    setShowProceedSwitchUser(false);
    setShowSwitchUser(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (showSwitchUser &&
          switchUserRef.current &&
          !switchUserRef.current.contains(event.target)) ||
        (showProceedSwitchUser &&
          proceedSwitchUserRef.current &&
          !proceedSwitchUserRef.current.contains(event.target))
      ) {
        setShowSwitchUser(false);
        setShowProceedSwitchUser(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSwitchUser, showProceedSwitchUser]);

  useEffect(() => {
    const pathToIdMapping = {
      "/dashboard": "dashboard",
      "/classes": "classes",
      "/homework": "homework",
      "/schedule": "schedule",
      "/reports": "reports",
      "/settings": "settings",
    };

    const activeId = pathToIdMapping[location.pathname] || "";
    setActiveLink(activeId);
  }, [location.pathname]);

  const links = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Dashboard,
      activeIcon: DashboardActive,
      to: "/dashboard",
    },
    {
      id: "classes",
      label: "Classes",
      icon: Classes,
      activeIcon: ClassesActive,
      to: "/classes",
    },
    {
      id: "homework",
      label: "Homework",
      icon: Homework,
      activeIcon: HomeworkActive,
      to: "/homework",
    },
    {
      id: "schedule",
      label: "Schedule",
      icon: Schedule,
      activeIcon: ScheduleActive,
      to: "/schedule",
    },
    {
      id: "reports",
      label: "Reports",
      icon: Reports,
      activeIcon: ReportsActive,
      to: "/reports",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      activeIcon: SettingsActive,
      to: "/settings",
    },
  ];

  return (
    <div className="flex min-h-screen">
      <div className="ml-4 mr-4 flex flex-col justify-between">
        <div className="flex flex-col items-center mt-5 mb-10">
          <p
            className="text-4xl font-bold font-recoleta"
            style={{ color: "rgba(22, 0, 65, 1)" }}
          >
            SR.
          </p>
        </div>

        <div className="text-1xl font-recoleta mt-28">
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              onClick={() => handleSetActiveLink(link.id)}
              className={`flex items-center space-x-1 mb-1 cursor-pointer py-3 pl-7 pr-10 ${
                activeLink === link.id
                  ? "bg-active-purple text-custom-purple rounded-lg"
                  : "links"
              }`}
            >
              <img
                src={activeLink === link.id ? link.activeIcon : link.icon}
                alt={link.label}
              />
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center space-y-2 mt-auto mb-1">
          <button className="mb-1 rounded-full border px-10 py-10 bg-[rgba(217,217,217,1)]"></button>
          <button
            className="font-recoleta text-custom-purple focus:border-[1px] focus:border-custom-purple focus:outline-none px-8 py-2 focus:rounded-lg"
            onClick={handleSwitchUserClick}
          >
            Switch User
          </button>
          <button className="font-recoleta text-custom-purple focus:border-[1px] focus:border-custom-purple focus:outline-none px-8 py-2 focus:rounded-lg">
            Sign Out
          </button>
        </div>
      </div>

      <div className="border-l-2 border-custom-border"></div>

      <div className="flex-1">
        {(showSwitchUser || showProceedSwitchUser) && (
          <div className="overlay"></div>
        )}
        {showSwitchUser && (
          <div ref={switchUserRef} className="switchUser">
            <button className="mb-1 rounded-full border  h-16 w-16 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Users} alt="users" />
            </button>
            <p className="mt-5 font-recoleta text-2xl text-[rgba(22, 0, 65, 1)] font-bold">
              Who is learning?
            </p>
            <p className="links text-lg font-recoleta mb-12">
              Select which student is currently active.
            </p>

            <div className="links flex space-x-8">
              <div className="flex flex-col items-center">
                <button className="mb-5 rounded-full border px-10 py-10 bg-[rgba(217,217,217,1)]"></button>
                <p className="text-lg font-normal text-custom-black">
                  FirstName
                </p>
                <p className="text-lg font-normal text-custom-black">
                  LastName
                </p>
              </div>

              <div className="flex flex-col items-center">
                <button className="mb-5 rounded-full border px-10 py-10 bg-[rgba(217,217,217,1)]"></button>
                <p className="text-lg font-normal text-custom-black">Alexis</p>
                <p className="text-lg font-normal text-custom-black">
                  Shatonbo
                </p>
              </div>

              <div className="flex flex-col items-center">
                <button className="mb-5 rounded-full border px-10 py-10 bg-[rgba(217,217,217,1)]"></button>
                <p className="text-lg font-normal text-custom-black">
                  FirstName
                </p>
                <p className="text-lg font-normal text-custom-black">
                  LastName
                </p>
              </div>

              <div className="flex flex-col items-center">
                <button className="mb-5 rounded-full border px-10 py-10 bg-[rgba(217,217,217,1)]"></button>
                <p className="text-lg font-normal text-custom-black">
                  FirstName
                </p>
                <p className="text-lg font-normal text-custom-black">
                  LastName
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-custom-purple text-white py-2 px-12 rounded mt-14 font-recoleta text-l"
                onClick={handleProceedSwitchUserClick}
              >
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1">
        {showProceedSwitchUser && (
          <div ref={proceedSwitchUserRef} className="proceedSwitchUser">
            <button className="mb-1 rounded-full border  h-16 w-16 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Users} alt="users" />
            </button>
            <p className="mt-5 font-recoleta text-2xl text-[rgba(22, 0, 65, 1)] font-bold">
              Go to Parent Account?
            </p>
            <p className="links text-lg font-recoleta mb-12">
              Enter the password to your account to switch.
            </p>

            <p className="links text-lg">Password</p>

            <PasswordInput value={password} onChange={handlePasswordChange} />

            <div className="flex justify-end space-x-4">
              <button
                className="links py-2 px-12 rounded mt-14 font-recoleta text-l border-2 border-[rgb(33, 33, 33)] font-bold"
                onClick={handleGoBackClick}
              >
                Go back
              </button>
              <button
                className={`bg-custom-purple text-white py-2 px-12 rounded mt-14 font-recoleta text-l ${
                  password ? "" : "bg-[rgba(228,214,255,1)] cursor-not-allowed"
                }`}
                disabled={!password}
              >
                Proceed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
