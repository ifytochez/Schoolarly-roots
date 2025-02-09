import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "../../../assets/icons/arrowLeft";
import { useNavigate } from "react-router-dom";
import Flag from "../../../assets/images/flag.png";
import Refresh from "../../../assets/images/bx-refresh 1.png";
import Book from "../../../assets/images/bxs-book.png";
import Cancel from "../../../assets/images/cancel.png";
import Account from "../../../assets/images/account.png"
import PDF from "../../../assets/images/pdf.png"
import Table from "../../../components/Table/table";


const Tutor = () => {
  const [active, setActive] = useState("Active Courses");
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const addFeedbackRef = useRef(null);
  const [editFeedback, setEditFeedback] = useState(false);
  const [awayStatus, setAwayStatus] = useState(false);
  const [activeStatus, setActiveStatus] = useState(false);
  const awayStatusRef = useRef(null);
  const editFeedbackRef = useRef(null);
  const [suspendAccount, setSuspendAccount] = useState(false);
  const suspendAccountRef = useRef(null);
  const [showAssignTutor, setShowAssignTutor] = useState(false);
  const [showChangeRole, setShowChangeRole] = useState(false);
  const [showReplaceRole, setShowReplaceRole] = useState(false);
  const assignTutorRef = useRef(null);
  const replaceRoleRef = useRef(null);
  const changeRoleRef = useRef(null);
  const [category, setCategory] = useState("");
  const [tutorType, setTutorType] = useState("");
  const [course, setCourse] = useState("");
  const [role, setRole] = useState("");
  const [showUpdateRole, setShowUpdateRole] = useState(false);
  const updateRoleRef = useRef(null);
  const [approveTutor, setApproveTutor] = useState(false);
  const approveTutorRef = useRef(null);
  const [rejectTutor, setRejectTutor] = useState(false);
  const rejectTutorRef = useRef(null);
  const activeStatusRef = useRef(null);
  const [isSuspended, setIsSuspended] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isAway, setIsAway] = useState(false);

  const handleBackClick = () => {
    navigate("/Account");
  };

  const handleClick = (courseDetails) => {
    setActive(courseDetails);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  const handleEdit = (row) => {
    setEditFeedback(true);
  };

  const handleViewFeedback = (row) => {
    setShowFeedback(true);
  };

 
  const handleAssignTutor = (row) => {
    setShowAssignTutor(true);
  };

  const handleUpdateRole = (row) => {
    setShowUpdateRole(true);
  };

  const handleApproveTutor = (row) => {
    setApproveTutor(true);
  };

  const handleChangeRole = (row) => {
    setShowChangeRole(true);
  };

  const handleReplaceRole = (row) => {
    setShowReplaceRole(true);
  };

  const handleActiveStatus = () => {
    setActiveStatus(true);
    setAwayStatus(false);
    setIsAway(false); 
  };

  const handleRejectTutor = () => {
    setApproveTutor(false);
  setRejectTutor(true) 
  };

  const handleAwayStatus = () => {
    setAwayStatus(true);
    setActiveStatus(false);
    setIsAway(true); 
  };

  const handleSuspendToggle = () => {
    setShowModal(true);
  };

  const confirmSuspendToggle = () => {
    setIsSuspended(!isSuspended);
    setShowModal(false);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

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

      if (
        replaceRoleRef.current &&
        !replaceRoleRef.current.contains(event.target)
      ) {
        setShowReplaceRole(false);
      }

      if (
        changeRoleRef.current &&
        !changeRoleRef.current.contains(event.target)
      ) {
        setShowChangeRole(false);
      }

      if (
        awayStatusRef.current &&
        !awayStatusRef.current.contains(event.target)
      ) {
        setActiveStatus(false);
      }

      if (
        activeStatusRef.current &&
        !activeStatusRef.current.contains(event.target)
      ) {
        setActiveStatus(false);
      }

      if (
        suspendAccountRef.current &&
        !suspendAccountRef.current.contains(event.target)
      ) {
        setSuspendAccount(false);
      }

      if (
        approveTutorRef.current &&
        !approveTutorRef.current.contains(event.target)
      ) {
        setApproveTutor(false);
      }

      if (
        rejectTutorRef.current &&
        !rejectTutorRef.current.contains(event.target)
      ) {
        setRejectTutor(false);
      }

      if (
        showAssignTutor &&
        assignTutorRef.current &&
        assignTutorRef.current.contains(event.target)
      ) {
        setShowAssignTutor(false);
      }

      if (
        showUpdateRole &&
        updateRoleRef.current &&
        updateRoleRef.current.contains(event.target)
      ) {
        setShowUpdateRole(false);
      }
      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeedback, editFeedback, suspendAccount, showAssignTutor, dropdownOpen, showUpdateRole, activeStatus, awayStatus, showChangeRole, showReplaceRole, approveTutor, rejectTutor]);

  const activeCoursesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "Albus Pythagoras",
      dateStarted: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const completedCoursesData = [
    {
      course: "Masha & Pooh the Bear",
      tutor: "Albus Pythagoras",
      averageScore: "89.5%",
      dateCompleted: "Feb 8, 2024",
    },
  ];

  const feedBackData = [
    {
      course: "Masha & Pooh the Bear",
      class: "Albus Pythagoras",
      date: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const transactionData = [
    {
      subject: "Masha & Pooh the Bear",
      amount: "$160",
      invoiceNumber: "INV-0001-135",
      date: "2024-12-01",
      action: "See Details",
    },
  ];

  const portfolioData = [
    {
      course: "Alpha-numeric Elements",
      role: "Backup Tutor, Creator",
      startDate: "2024-01-01",
      endDate: "2024-12-01",
      action: "See Details",
    },
  ];

  const columnsMapping = {
    "Active Courses": [
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
        Header: "Date Started",
        accessor: "dateStarted",
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
                  onClick={() => handleViewFeedback(row.original)}
                >
                  View Feedback
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],

    "Completed Courses": [
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
        Header: "Average Score",
        accessor: "averageScore",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date Completed",
        accessor: "dateCompleted",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Feedback Log": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Class",
        accessor: "class",
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
                  onClick={() => handleViewFeedback(row.original)}
                >
                  View Feedback
                </button>
              </div>
            )}
          </div>
        ),
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],

    "Portfolio": [
        {
          Header: "Course",
          accessor: "course",
          customClassName: "font-light text-[rgba(89,89,89,1)]",
        },
  
        {
          Header: "Role",
          accessor: "role",
          customClassName: "font-light text-[rgba(89,89,89,1)]",
        },
        {
          Header: "Start Date",
          accessor: "startDate",
          customClassName: "font-light text-[rgba(89,89,89,1)]",
        },
        {
          Header: "End Date",
          accessor: "endDate",
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
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100"
                     onClick={handleChangeRole}>                  
                    Change Role
                  </button>

                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100"
                     onClick={handleReplaceRole}>
                  
                    Replace Tutor
                  </button>


                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100"
                     onClick={handleApproveTutor}>
                  
                    Approve Tutor
                  </button>
                </div>
              )}
            </div>
          ),
          customClassName: "font-light text-[rgba(89,89,89,1)]",
        },
      ],
      
    "Transaction Log": [
      {
        Header: "Subject",
        accessor: "subject",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Amount",
        accessor: "amount",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Invoice Number",
        accessor: "invoiceNumber",
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
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                  View Invoice
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
    <>
      <div className="flex flex-col pt-6 pl-8 pr-8 bg-[#F3F3FF]">
        <div className="flex justify-between items-center">
          <button onClick={handleBackClick} className="focus:outline-none">
            <ArrowLeftIcon />
          </button>

         <div className="flex gap-4 items center">
         <button className="text-custom-purple py-2 px-8 border border-custom-purple rounded font-recoleta text-sm"
         onClick={handleUpdateRole}>
            
           Update Role
          </button>

          <button className="text-custom-purple py-2 px-8 border border-custom-purple rounded font-recoleta text-sm"
          onClick={isAway ? handleActiveStatus : handleAwayStatus}>
           {isAway ? 'Set Active' : 'Set Away Status'}
          </button>
         </div>
        </div>

        <div className="flex mt-8 gap-28 w-full justify-between">
          <div className="w-[50%]">
            <div className="bg-[#E0E2FF] rounded-2xl w-[100%] h-[28vh] flex gap-8 items-center pl-8">
              <div className="flex flex-col items-center">
                <button className="mb-1 rounded-full border px-9 py-9 bg-[#D2D5FF]"></button>
                <p className="Recoleta text-2xl text-[#000000]">Tutor</p>
                <p className="font-airbnb text-[#000000]">Seyi Gudmundsson</p>
              </div>
              <div className="w-px h-[100px] bg-gray-400"></div>
              <div>
                <div className="flex gap-16 mb-8">
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">
                      Feb 8, ‘24
                    </p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Date Created
                    </p>
                  </div>
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">Active</p>
                    <p className="font-airbnb text-lg text-[#000000]">Status</p>
                  </div>
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">Religion</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                    Category
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  {!isSuspended && (
                    <button
                      className="text-custom-purple py-2 px-16 border border-custom-purple rounded font-recoleta text-sm"
                      onClick={handleAssignTutor}
                    >
                      Assign Class
                    </button>
                  )}
                  <button
                    className={`py-2 px-14 border rounded font-recoleta text-sm ${
                      isSuspended
                        ? "text-white border-custom-purple bg-custom-purple"
                        : "text-red-600 border-red-600"
                    }`}
                    onClick={handleSuspendToggle}
                  >
                    {isSuspended ? "Unsuspend Account" : "Suspend Account"}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center pt-16 pr-8 pb-2">
                <div className="flex gap-8">
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Active Courses")}
                  >
                    Active Courses
                  </p>

                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Completed Courses")}
                  >
                    Completed Courses
                  </p>
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Feedback Log")}
                  >
                    Feedback Log
                  </p>

                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Portfolio")}
                  >
                    Portfolio
                  </p>


                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Transaction Log")}
                  >
                    Transaction Log
                  </p>
                </div>
              </div>

              <div
                className="w-1 h-1.5 pr-8 pl-8 bg-[#9868fd]"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  transform: `translateX(${
                    active === "Active Courses"
                      ? "10px"
                      : active === "Completed Courses"
                      ? "170px"
                      : active === "Feedback Log"
                      ? "340px"
                      : active === "Portfolio"
                      ? "480px"
                      : "590px"
                  })`,
                  clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {active === "Active Courses" && (
          <Table columns={columns} data={activeCoursesData} />
        )}
        {active === "Completed Courses" && (
          <Table columns={columns} data={completedCoursesData} />
        )}
        {active === "Feedback Log" && (
          <Table columns={columns} data={feedBackData} />
        )}
           {active === "Portfolio" && (
             <><div className="mt-4 mb-8">
                      <div className="flex gap-12">
                          <img src={PDF} alt="pdf" />
                          <img src={PDF} alt="pdf" />
                          <img src={PDF} alt="pdf" />
                      </div>
                  </div><Table columns={columns} data={portfolioData} /></>
        )}
        {active === "Transaction Log" && (
          <Table columns={columns} data={transactionData} />
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


      <div className="flex-1">
        {showUpdateRole && <div className="overlay"></div>}
        {showUpdateRole && (
          <div
            ref={updateRoleRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Update Role
            </p>

            <p className="font-airbnb mt-8 text-xl">
              Update “Tutor_name”'s role
            </p>

            <div className="flex flex-col mt-8">
              <div className="flex-1 mb-4">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Select Category
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
                  Tutor Type
                </p>
                <select
                  value={tutorType}
                  onChange={(e) => setTutorType(e.target.value)}
                  className="w-full py-2.5 rounded-lg font-airbnb text-lg links border border-[#B8B8B8] focus:outline-none"
                >
                  {/* Add options dynamically later */}
                </select>
              </div>
            </div>

            <div className="flex mt-32 gap-4">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowUpdateRole(false)}
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
              Session Feedback
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
        {awayStatus && <div className="overlay"></div>}
        {awayStatus && (
          <div
            ref={awayStatusRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Set Away Status
            </p>


            <div className="flex pt-4 gap-4">


              <div className="flex flex-col">
                <p className="text-base font-airbnb links">Start Date</p>
                <input
                  type="date"
                  value={startDate}
                  onChange={handleStartDate}
                  className="w-full py-2 pr-1 pl-12 rounded-lg mt-3 font-recoleta text-transparent placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
                  onFocus={(e) => e.target.classList.remove("text-transparent")}
                  onBlur={(e) => {
                    if (!e.target.value)
                      e.target.classList.add("text-transparent");
                  }}
                />
              </div>

              <div className="flex flex-col">
                <p className="text-base font-airbnb links">End Date</p>
                <input
                  type="date"
                  value={endDate}
                  onChange={handleEndDate}
                  className="w-full py-2 pr-1 pl-12 rounded-lg mt-3 font-recoleta text-transparent placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
                  onFocus={(e) => e.target.classList.remove("text-transparent")}
                  onBlur={(e) => {
                    if (!e.target.value)
                      e.target.classList.add("text-transparent");
                  }}
                />
              </div>
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-20 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setAwayStatus(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-16 bg-[#3900B4] rounded font-recoleta text-sm">
                Set Away
              </button>
            </div>
          </div>
        )}
      </div>


      <div className="flex-1">
        {activeStatus && <div className="overlay"></div>}
        {activeStatus && (
          <div
            ref={activeStatusRef}
            className="createAccount w-[21%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Book} alt="flag" />
            </button>

            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
              Set As Active
            </p>

            <div className="mt-8">
              <p className="font-airbnb text-sm">Update “Tutor_name” ‘s as active and available
              to tutor?</p>
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setActiveStatus(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-12 bg-[#3900B4] rounded font-recoleta text-sm">
                Set As Active
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
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setEditFeedback(false)}
              >
                Cancel
              </button>
              <button className="text-white py-2 px-14 bg-[#3900B4] rounded font-recoleta text-sm">
                Deliver
              </button>
            </div>
          </div>
        )}
      </div>



      <div className="flex-1">
        {showChangeRole && <div className="overlay"></div>}
        {showChangeRole && (
          <div
            ref={changeRoleRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Refresh} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
            Change Role
            </p>

            <p className="font-airbnb mt-8 text-xl">
            Change “Tutor_name” ‘s role on “Course_name”?
            </p>

            <div className="flex flex-col mt-8">
              <div className="flex-1 mb-4">
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

            <div className="flex mt-32 gap-4 ml-8">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowChangeRole(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-20 bg-custom-purple rounded font-recoleta text-l">
                Update
              </button>
            </div>
          </div>
        )}
      </div>


      <div className="flex-1">
        {showReplaceRole && <div className="overlay"></div>}
        {showReplaceRole && (
          <div
            ref={replaceRoleRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Refresh} alt="book" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
            Replace Role
            </p>

            <p className="font-airbnb mt-8 text-xl">
            Replace “Tutor_name” ‘s role on “Course_name”?
            </p>

            <div className="flex flex-col mt-8">
              <div className="flex-1 mb-4">
                <p className="text-lg links mb-1 font-medium font-airbnb">
                  Select New Tutor
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

            <div className="flex mt-32 gap-4 ml-8">
              <button
                className="text-custom-purple py-2 px-14 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => setShowReplaceRole(false)}
              >
                Close
              </button>
              <button className="text-white py-2 px-20 bg-custom-purple rounded font-recoleta text-l">
                Update
              </button>
            </div>
          </div>
        )}
      </div>


      
      <div className="flex-1">
        {approveTutor && <div className="overlay"></div>}
        {approveTutor && (
          <div
            ref={approveTutorRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Account} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
            Alan Wake
            </p>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Category</p>
              <p className="font-airbnb text-xl mt-2">Sciences</p>
            </div>

            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Responses</p>
              <li>Answer to the first question sits here.</li>
              <li>The response to the second question comes in here.</li>
              <li>N/A.</li>
            </div>


            <div className="mt-8">
              <p className="font-recoleta text-xl font-bold">Attachments</p>
             <div className="flex gap-12 mt-4">
             <img src={PDF} alt="pdf" />
             <img src={PDF} alt="pdf" />
             <img src={PDF} alt="pdf" />
             </div>
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-16 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => handleRejectTutor()}
              >
                Reject
              </button>
              <button className="text-white py-2 px-20 bg-[#3900B4] rounded font-recoleta text-sm">
                Approve
              </button>
            </div>
          </div>
        )}
      </div>


  
      <div className="flex-1">
        {rejectTutor && <div className="overlay"></div>}
        {rejectTutor && (
          <div
            ref={rejectTutorRef}
            className="createAccount w-[25%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={Account} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-[rgba(22, 0, 65, 1)] font-bold">
            Reject Tutor
            </p>
              <p className="font-airbnb text-xl mt-2">Reason (help them improve future submissions)</p>
            <div className="mt-8">
            <input className="font-airbnb text-xl mt-2 border border-[#B8B8B8] rounded-lg h-[10vh] w-full focus:outline-none text-start py-2" />
            </div>


            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-16 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setRejectTutor(false)}
              >
                Cancel
              </button>
              <button className="text-white py-2 px-16 bg-[#3900B4] rounded font-recoleta text-sm">
                Reject Tutor
              </button>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="createAccount w-[25%] bg-white rounded-2xl p-4">
            <button
              className="rounded-full border h-14 w-14 bg-gray-200 flex items-center justify-center"
              onClick={() => setShowModal(false)}
            >
              <img src={Cancel} alt="close" />
            </button>
            <p
              className={`mt-2 font-recoleta text-xl font-bold ${
                isSuspended ? "text-custom-purple" : "text-red-600"
              }`}
            >
              {isSuspended ? "Unsuspend Account?" : "Suspend Account?"}
            </p>

            <div className="mt-8">
              <p className="font-recoleta text-sm">
                {isSuspended
                  ? "This account will regain access to the platform, including:"
                  : "Has this account violated any terms & conditions such as:"}
              </p>
              <ol className="font-recoleta text-sm mt-4 list-decimal list-inside">
                {isSuspended ? (
                  <>
                    <li>Course curriculum.</li>
                    <li>Enroll to classes.</li>
                  </>
                ) : (
                  <>
                    <li>Example.</li>
                    <li>Another example goes here.</li>
                  </>
                )}
              </ol>
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setShowModal(false)}
              >
                No, Go back
              </button>
              <button
                className={`text-white py-2 px-8 rounded font-recoleta text-sm ${
                  isSuspended ? "bg-custom-purple" : "bg-red-600"
                }`}
                onClick={confirmSuspendToggle}
              >
                Yes, {isSuspended ? "Unsuspend" : "Suspend"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tutor;
