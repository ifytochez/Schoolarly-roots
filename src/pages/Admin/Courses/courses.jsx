import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Table from "../../../components/Table/table";
import Book from "../../../assets/images/bxs-book.png";
import CreateAccount from "../../../components/CreateAccount/createAccount";
import { useNavigate } from "react-router-dom";

const CoursesPage = () => {
  const [active, setActive] = useState("Courses");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showReassignTutor, setShowReassignTutor] = useState(false);
  const editReassignTutorRef = useRef(null);
  const [category, setCategory] = useState("");
  const [tutor, setTutor] = useState("");
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const navigate = useNavigate();

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  const handleReassignTutor = (row) => {
    setShowReassignTutor(true);
  };

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const coursesData = [
    {
      course: "Masha & Pooh the Bear",
      category: "Language",
      tutor: "John Doe",
      action: "See Details",
    },
  ];

  const draftData = [
    {
      course: "Masha & Pooh the Bear",
      category: "Language",
      tutor: "John Doe",
      action: "See Details",
    },
  ];

  const awaitingApprovalData = [
    {
      course: "Masha & Pooh the Bear",
      category: "Language",
      tutor: "John Doe",
      action: "See Details",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showReassignTutor &&
        editReassignTutorRef.current &&
        !editReassignTutorRef.current.contains(event.target)
      ) {
        setShowReassignTutor(false);
      }

      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showReassignTutor]);

  const columnsMapping = {
    Courses: [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Category",
        accessor: "category",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Tutor",
        accessor: "tutor",
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
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit Course
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => navigate("/singleCourse")}
                >
                  View Details
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleReassignTutor(row.original)}
                >
                  Change Tutor
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    Drafts: [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Category",
        accessor: "category",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Creator",
        accessor: "creator",
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
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit Course
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit Details
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Awaiting Approval": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Category",
        accessor: "category",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Creator",
        accessor: "creator",
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
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit Course
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  Edit Details
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
            onClick={() => handleClick("Courses")}
          >
            Courses
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Drafts")}
          >
            Drafts
          </p>

          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Awaiting Approval")}
          >
            Awaiting Approval
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
            active === "Courses"
              ? "30px"
              : active === "Drafts"
              ? "130px"
              : "280px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div className="p-8">
        <h1 className="text-2xl mb-4">{active}</h1>
        {active === "Courses" && <Table columns={columns} data={coursesData} />}
        {active === "Drafts" && <Table columns={columns} data={draftData} />}
        {active === "Awaiting Approval" && (
          <Table columns={columns} data={awaitingApprovalData} />
        )}
      </div>

      <CreateAccount
        showCreateAccount={showCreateAccount}
        setShowCreateAccount={setShowCreateAccount}
      />

      <div className="flex-1">
        {showReassignTutor && <div className="overlay"></div>}
        {showReassignTutor && (
          <div
            ref={editReassignTutorRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Reassign “course_title” class
            </p>

            <p className="font-airbnb mt-8 text-xl">
              Find a new tutor for this class.
            </p>

            <div className="flex flex-col mt-8">
              <div className="flex-1 mb-4">
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

              <div className="flex-1">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Tutor
                </p>
                <select
                  value={tutor}
                  onChange={(e) => setTutor(e.target.value)}
                  className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                >
                  {/* Add options dynamically later */}
                </select>
              </div>
            </div>

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowReassignTutor(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-14 bg-custom-purple rounded font-recoleta text-l">
                Reassign
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
