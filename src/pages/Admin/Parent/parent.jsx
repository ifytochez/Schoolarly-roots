import React, { useEffect, useRef, useState } from "react";
import ArrowLeftIcon from "../../../assets/icons/arrowLeft";
import { useNavigate } from "react-router-dom";
import Flag from "../../../assets/images/flag.png";
import User from "../../../assets/images/user.png";
import Cancel from "../../../assets/images/cancel.png";
import Table from "../../../components/Table/table";

const Parent = () => {
  const [active, setActive] = useState("Students");
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const addFeedbackRef = useRef(null);
  const [editFeedback, setEditFeedback] = useState(false);
  const editFeedbackRef = useRef(null);
  const [suspendAccount, setSuspendAccount] = useState(false);
  const suspendAccountRef = useRef(null);
  const [addStudent, setAddStudent] = useState(false);
  const addStudentRef = useRef(null);
  const [isSuspended, setIsSuspended] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gender, setGender] = useState("");
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [imageSelected, setImageSelected] = useState(false);
  const [dob, setDob] = useState("");

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

  const handleAddStudent = (row) => {
    setAddStudent(true);
  };

  const handleSuspendToggle = () => {
    setShowModal(true);
  };

  const confirmSuspendToggle = () => {
    setIsSuspended(!isSuspended);
    setShowModal(false);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleClickImage = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
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
        suspendAccountRef.current &&
        !suspendAccountRef.current.contains(event.target)
      ) {
        setSuspendAccount(false);
      }

      if (
        addStudentRef.current &&
        !addStudentRef.current.contains(event.target)
      ) {
        setAddStudent(false);
      }

      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeedback, editFeedback, suspendAccount, addStudent, dropdownOpen]);

  const isAddStudentDisabled = !imageSelected || !gender || !dob;

  const studentsData = [
    {
      name: "Masha & Pooh the Bear",
      activeCourses: 0,
      completedCourses: 0,
      dateCreated: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const feedBackData = [
    {
      course: "Masha & Pooh the Bear",
      class: "Albus Pythagoras",
      student: "13/23",
      date: "23",
      action: "See Details",
    },
  ];

  const transactionData = [
    {
      subject: "Masha & Pooh the Bear",
      student: "Albus Pythagoras",
      amount: "13/23",
      invoiceNumber: "23",
      date: "2024-12-01",
      action: "See Details",
    },
  ];

  const columnsMapping = {
    Students: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Active Courses",
        accessor: "activeCourses",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Completed Courses",
        accessor: "completedCourses",
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
        Header: "Student",
        accessor: "student",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Amount",
        accessor: "amount",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Date",
        accessor: "date",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Invoice Number",
        accessor: "invoiceNumber",
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
    "Transaction Log": [
      {
        Header: "Subject",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Student",
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
        <button onClick={handleBackClick} className="focus:outline-none">
          <ArrowLeftIcon />
        </button>

        <div className="flex mt-8 gap-28 w-full justify-between">
          <div className="w-[50%]">
            <div className="bg-[#E0E2FF] rounded-2xl w-[100%] h-[28vh] flex gap-8 items-center pl-8">
              <div className="flex flex-col items-center">
                <button className="mb-1 rounded-full border px-9 py-9 bg-[#D2D5FF]"></button>
                <p className="Recoleta text-2xl text-[#000000]">Parent</p>
                <p className="font-airbnb text-[#000000]">Muhammad Ali</p>
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
                    <p className="Recoleta text-3xl text-[#000000]">3</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Students
                    </p>
                  </div>
                </div>
                <div className="flex gap-8">
                  {!isSuspended && (
                    <button
                      className="text-custom-purple py-2 px-16 border border-custom-purple rounded font-recoleta text-sm"
                      onClick={handleAddStudent}
                    >
                      Add Student
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
                    onClick={() => handleClick("Students")}
                  >
                    Students
                  </p>
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Feedback Log")}
                  >
                    Feedback Log
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
                    active === "Students"
                      ? "10px"
                      : active === "Feedback Log"
                      ? "140px"
                      : "260px"
                  })`,
                  clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-2xl mb-4">{active}</h1>
        {active === "Students" && (
          <Table columns={columns} data={studentsData} />
        )}
        {active === "Feedback Log" && (
          <Table columns={columns} data={feedBackData} />
        )}
        {active === "Transaction Log" && (
          <Table columns={columns} data={transactionData} />
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
        {addStudent && <div className="overlay"></div>}
        {addStudent && (
          <div
            ref={addStudentRef}
            className="createAccount w-[30%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[#E0E2FF] flex items-center justify-center">
              <img src={User} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-xl text-red-600 font-bold">
              Add Student
            </p>

            <div className="flex flex-col">
              <p className="text-base font-airbnb links mt-8">
                Student's Full Name
              </p>
              <input
                type="text"
                className="w-full py-2  rounded-lg mt-3 font-recoleta text-l border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <p className="text-base font-airbnb links mt-8">
                Student's Image
              </p>
              <label
                htmlFor="fileUpload"
                className="w-full py-4 rounded-lg mt-3 font-recoleta text-l border-2 border-dashed border-[rgba(89, 89, 89, 1)] focus:outline-none flex items-center justify-center cursor-pointer text-gray-500"
              >
                (.png or .jpegs) Less than 20MB
              </label>
              <input
                id="fileUpload"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onClick={handleClickImage}
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>

            <div className="flex pt-4 gap-4">
              <div className="flex flex-col">
                <p className="text-base font-airbnb links">Date of Birth</p>
                <input
                  type="date"
                  value={dob}
                  onChange={handleDobChange}
                  className="w-full py-2 pr-1 pl-20 rounded-lg mt-3 font-recoleta text-transparent placeholder-transparent border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none calendar-gray"
                  onFocus={(e) => e.target.classList.remove("text-transparent")}
                  onBlur={(e) => {
                    if (!e.target.value)
                      e.target.classList.add("text-transparent");
                  }}
                />
              </div>

              <div className="flex flex-col">
                <p className="text-base font-airbnb links">Gender</p>
                <div className="relative mt-3">
                  <select
                    value={gender}
                    onChange={handleGenderChange}
                    className="w-full py-2.5 px-24 rounded-lg font-recoleta text-sm text-[rgba(89, 89, 89, 1)] border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none"
                  >
                    <option value="" hidden></option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex mt-16 gap-8">
              <button
                className="text-custom-purple py-2 px-16 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setAddStudent(false)}
              >
                Cancel
              </button>
              <button
                className={`py-2 px-16 border rounded font-recoleta text-sm ${
                  isAddStudentDisabled
                    ? "bg-[#d7cbef] text-white cursor-not-allowed"
                    : "bg-custom-purple text-white border-custom-purple"
                }`}
                disabled={isAddStudentDisabled}
              >
                Add Student
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

export default Parent;
