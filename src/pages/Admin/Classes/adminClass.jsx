import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Table from "../../../components/Table/table";
import Book from "../../../assets/images/bxs-book.png";
const AdminClasses = () => {
  const [active, setActive] = useState("Active Classes");
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showReassignTutor, setShowReassignTutor] = useState(false);
  const [showAssignTutor, setShowAssignTutor] = useState(false);
  const [showCancelClass, setShowCancelClass] = useState(false);
  const editReassignTutorRef = useRef(null);
  const assignTutorRef = useRef(null);
  const cancelClassRef = useRef(null);
  const [category, setCategory] = useState("");
  const [tutor, setTutor] = useState("");
  const [course, setCourse] = useState("");
  const [role, setRole] = useState("");

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  const handleReassignTutor = (row) => {
    setShowReassignTutor(true);
  };

  const handleAssignTutor = (row) => {
    setShowAssignTutor(true);
  };

  const handleCancelClass = (row) => {
    setShowCancelClass(true);
  };

  const activeClassesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "John Doe",
      session: "13/23",
      student: "23",
      action: "See Details",
    },
  ];

  const lateClassesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "Albus Pythagoras",
      session: "13/23",
      student: "23",
      action: "See Details",
    },
  ];

  const upcomingClassesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "Albus Pythagoras",
      session: "13/23",
      student: "23",
      date: "2024-12-01",
      action: "See Details",
    },
  ];

  const pastClassesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "John Doe",
      session: "13/23",
      student: "23",
      date: "2024-12-01",
      action: "See Details",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCancelClass &&
        cancelClassRef.current &&
        !cancelClassRef.current.contains(event.target)
      ) {
        setShowCancelClass(false);
      }
      if (
        showReassignTutor &&
        editReassignTutorRef.current &&
        !editReassignTutorRef.current.contains(event.target)
      ) {
        setShowReassignTutor(false);
      }
      if (
        showAssignTutor &&
        assignTutorRef.current &&
        assignTutorRef.current.contains(event.target)
      ) {
        setShowAssignTutor(false);
      }

      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showReassignTutor, showCancelClass, showAssignTutor]);

  const columnsMapping = {
    "Active Classes": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Tutor",
        accessor: "tutor",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Session",
        accessor: "session",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Students",
        accessor: "student",
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
                  // onClick={() => handleJoinClass(row.original)} // Handle joining the class
                >
                  Join Class
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Late Classes": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Tutor",
        accessor: "tutor",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Session",
        accessor: "session",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Students",
        accessor: "student",
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
                  onClick={() => handleReassignTutor(row.original)}
                >
                  Reassign Tutor
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleCancelClass(row.original)}
                >
                  Cancel Class
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Upcoming Classes": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Tutor",
        accessor: "tutor",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Session",
        accessor: "session",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Students",
        accessor: "student",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date",
        accessor: "date",
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
                  onClick={() => handleAssignTutor(row.original)}
                >
                  Assign Tutor
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleReassignTutor(row.original)}
                >
                  Reassign Tutor
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => handleCancelClass(row.original)}
                >
                  Cancel Class
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],

    "Past Classes": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Tutor",
        accessor: "tutor",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Session",
        accessor: "session",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Students",
        accessor: "student",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date",
        accessor: "date",
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
                  // onClick={() => handleWatchRecording(row.original)} // Handle watching recording
                >
                  Watch Recording
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
            onClick={() => handleClick("Active Classes")}
          >
            Active Classes
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Late Classes")}
          >
            Late Classes
          </p>

          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Upcoming Classes")}
          >
            Upcoming Classes
          </p>

          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Past Classes")}
          >
            Past Classes
          </p>
        </div>

        <img src={Bell} alt="Notification Bell" />
      </div>

      <div
        className="w-1 h-1.5 pr-8 pl-8 bg-[#9868fd]"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Active Classes"
              ? "40px"
              : active === "Late Classes"
              ? "200px"
              : active === "Upcoming Classes"
              ? "370px"
              : "550px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div className="p-8">
        <h1 className="text-2xl mb-4">{active}</h1>
        {active === "Active Classes" && (
          <Table columns={columns} data={activeClassesData} />
        )}
        {active === "Late Classes" && (
          <Table columns={columns} data={lateClassesData} />
        )}
        {active === "Upcoming Classes" && (
          <Table columns={columns} data={upcomingClassesData} />
        )}
        {active === "Past Classes" && (
          <Table columns={columns} data={pastClassesData} />
        )}
      </div>

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

      <div className="flex-1">
        {showCancelClass && <div className="overlay"></div>}
        {showCancelClass && (
          <div
            ref={cancelClassRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Cancel “course_title” class
            </p>

            <p className="font-airbnb mt-8 text-lg">
              Do you want to cancel “course_title” class? This will auto-notify
              all parents and students.
            </p>

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowCancelClass(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-11 bg-custom-purple rounded font-recoleta text-l">
                Cancel Class
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1">
        {showAssignTutor && <div className="overlay"></div>}
        {showAssignTutor && (
          <div
            ref={assignTutorRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Assign Class
            </p>

            <p className="font-airbnb mt-8 text-xl">
              Assign “Tutor_name” to a class
            </p>

            <div className="flex flex-col mt-8">
              <div className="flex-1 mb-4">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Select Course
                </p>

                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                >
                  {/* Add options dynamically later */}
                </select>
              </div>

              <div className="flex-1">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Select Role
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
                onClick={() => setShowAssignTutor(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-14 bg-custom-purple rounded font-recoleta text-l">
                Update
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminClasses;
