/* eslint-disable no-restricted-globals */
import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Flag from "../../../assets/images/flag.png";
import Table from "../../../components/Table/table";
import CreateAccount from "../../../components/CreateAccount/createAccount";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [active, setActive] = useState("Parents");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const addFeedbackRef = useRef(null);
  const [editFeedback, setEditFeedback] = useState(false);
  const editFeedbackRef = useRef(null);
  const navigate = useNavigate();

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const handleViewFeedback = (row) => {
    setShowFeedback(true);
  };

  const handleEdit = (row) => {
    setEditFeedback(true);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const parentsData = [
    {
      name: "Peter Abah",
      students: 3,
      status: "inactive",
      dateCreated: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const studentData = [
    {
      name: "Alexis Shawberto",
      parentAccount: "Peter Abah",
      status: "inactive",
      dateCreated: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const tutorsData = [
    {
      name: "Alexis Shawberto",
      category: "Language",

      status: "inactive",
      dateJoined: "Feb 8, 2024",
      tutoringCourses: 3,
      createdCourses: 1,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        addFeedbackRef.current &&
        !addFeedbackRef.current.contains(event.target)
      ) {
        setShowFeedback(false);
      }

      if (
        editFeedbackRef.current &&
        !editFeedbackRef.current.contains(event.target)
      ) {
        setEditFeedback(false);
      }

      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeedback, editFeedback, dropdownOpen]);

  const columnsMapping = {
    Parents: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Students",
        accessor: "students",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Status",
        accessor: "status",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date Created",
        accessor: "dateCreated",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleDropdownToggle(row.index)}
            >
              &#8942;
            </button>
            {dropdownOpen === row.index && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/parent")}
                >
                  View Details
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleViewFeedback(row.original)}
                >
                  View Pending Feedback
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    Students: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Parent Account",
        accessor: "parentAccount",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Status",
        accessor: "status",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date Created",
        accessor: "dateCreated",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleDropdownToggle(row.index)}
            >
              &#8942;
            </button>
            {dropdownOpen === row.index && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/student")}
                >
                  View Details
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleViewFeedback(row.original)}
                >
                  View Pending Feedback
                </button>

                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  History Log
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    Tutors: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Category",
        accessor: "category",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Status",
        accessor: "status",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date Joined",
        accessor: "dateJoined",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Tutoring Courses",
        accessor: "tutoringCourses",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Created Courses",
        accessor: "createdCourses",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => handleDropdownToggle(row.index)}
            >
              &#8942;
            </button>
            {dropdownOpen === row.index && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/tutor")}
                >
                  View Details
                </button>
              </div>
            )}
          </div>
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
            onClick={() => handleClick("Parents")}
          >
            Parents
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Students")}
          >
            Students
          </p>

          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Tutors")}
          >
            Tutors
          </p>
        </div>

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

      <div
        className="w-1 h-1.5 pr-8 pl-8 bg-[#9868fd]"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Parents"
              ? "30px"
              : active === "Students"
              ? "130px"
              : "280px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div className="p-8">
        {active === "Parents" && <Table columns={columns} data={parentsData} />}
        {active === "Students" && (
          <Table columns={columns} data={studentData} />
        )}
        {active === "Tutors" && <Table columns={columns} data={tutorsData} />}
      </div>

      <CreateAccount
        showCreateAccount={showCreateAccount}
        setShowCreateAccount={setShowCreateAccount}
      />

      <div className="flex-1">
        {showFeedback && <div className="overlay"></div>}
        {showFeedback && (
          <div
            ref={addFeedbackRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Flag} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Homework Feedback
            </p>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Category</p>
              <p className="font-airbnb text-xl mt-2 ">Category title</p>
            </div>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Context</p>
              <p className="font-airbnb text-xl mt-2 ">
                This is where all the feedback from the session goes. This
                feedback is sent from the Guardian to the Tutor. A guardian can
                chose to reply or not.
              </p>
            </div>
            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => handleEdit()}
              >
                Edit Feedback
              </button>
              <button className="text-white py-2 px-14 bg-[#3900B4] rounded font-recoleta text-sm">
                Deliver
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1">
        {editFeedback && <div className="overlay"></div>}
        {editFeedback && (
          <div
            ref={editFeedbackRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Flag} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Edit Session Feedback
            </p>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Category</p>
              <p className="font-airbnb text-xl mt-2">Category title</p>
            </div>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Context</p>
              <input className="font-airbnb text-xl mt-2 border border-[#B8B8B8] rounded-lg h-[10vh] w-full focus:outline-none text-start py-2" />
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setEditFeedback(false)}
              >
                Cancel
              </button>
              <button className="text-white py-2 px-14 bg-[#3900B4] rounded font-recoleta text-l">
                Deliver
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
