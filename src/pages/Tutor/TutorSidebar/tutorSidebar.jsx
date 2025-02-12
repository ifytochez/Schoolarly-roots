import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardActive from "../../../assets/images/bxs-dashboard.png";
import Classes from "../../../assets/images/bx-classes.png";
import Homework from "../../../assets/images/bx-homework.png";
import Schedule from "../../../assets/images/bx-schedule.png";
import Reports from "../../../assets/images/bx-reports.png";
import Settings from "../../../assets/images/bx-settings.png";
import Dashboard from "../../../assets/images/bx-dashboard.png";
import Courses from "../../../assets/images/bx-book.png";
import CoursesActive from "../../../assets/images/bxs-book.png";
import Payout from "../../../assets/images/payout.png"
import PayoutActive from "../../../assets/images/payoutActive.png"
import ClassesActive from "../../../assets/images/bxs-classes.png";
import HomeworkActive from "../../../assets/images/bxs-homework.png";
import ScheduleActive from "../../../assets/images/bxs-schedule.png";
import ReportsActive from "../../../assets/images/bxs-reports.png";
import SettingsActive from "../../../assets/images/bxs-settings.png";


const TutorSidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const [showSwitchUser, setShowSwitchUser] = useState(false);
  const [showProceedSwitchUser, setShowProceedSwitchUser] = useState(false);
  const navigate = useNavigate();

  const switchUserRef = useRef(null);
  const proceedSwitchUserRef = useRef(null);

  const handleSetActiveLink = (linkId) => {
    setActiveLink(linkId);
    localStorage.setItem("activeLink", linkId);
  };

  const handleSignOut = () => {
    navigate("/");
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
      "/tutorDashboard": "tutorDashboard",
      "/tutorCourses": "tutorCourses",
      "/tutorClasses": "tutorClasses",
      "/tutorHomework": "tutorHomework",
      "/tutorSchedule": "tutorSchedule",
      "/tutorReport": "tutorReport",
      "/tutorSetting": "tutorSetting",
      "/tutorPayout": "tutorPayout",
    };

    const activeId = pathToIdMapping[location.pathname] || "";
    setActiveLink(activeId);
  }, [location.pathname]);

  const links = [
    {
      id: "tutorDashboard",
      label: "Dashboard",
      icon: Dashboard,
      activeIcon: DashboardActive,
      to: "/tutorDashboard",
    },

    {
        id: "tutorCourses",
        label: "Courses",
        icon: Courses,
        activeIcon: CoursesActive,
        to: "/tutorCourses",
      },
    {
      id: "tutorClasses",
      label: "Classes",
      icon: Classes,
      activeIcon: ClassesActive,
      to: "/tutorClasses",
    },
    {
      id: "tutorHomework",
      label: "Homework",
      icon: Homework,
      activeIcon: HomeworkActive,
      to: "/tutorHomework",
    },
    {
      id: "tutorSchedule",
      label: "Schedule",
      icon: Schedule,
      activeIcon: ScheduleActive,
      to: "/tutorSchedule",
    },
    {
      id: "tutorReport",
      label: "Reports",
      icon: Reports,
      activeIcon: ReportsActive,
      to: "/tutorReport",
    },
    {
        id: "tutorPayout",
        label: "Payout",
        icon: Payout,
        activeIcon: PayoutActive,
        to: "/tutorPayout",
      },
    {
      id: "tutorSetting",
      label: "Settings",
      icon: Settings,
      activeIcon: SettingsActive,
      to: "/tutorSetting",
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
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="border-l-2 border-custom-border"></div>
    </div>
  );
};

export default TutorSidebar;
