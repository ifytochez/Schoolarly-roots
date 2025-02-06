import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Flag from "../../../assets/images/flag.png";
import CreateAccount from "../../../components/CreateAccount/createAccount";
import Table from "../../../components/Table/table";

const AdminReports = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const addFeedbackRef = useRef(null);
  const [editFeedback, setEditFeedback] = useState(false);
  const editFeedbackRef = useRef(null);

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  const handleViewFeedback = (row) => {
    setShowFeedback(true);
  };

  const handleEdit = (row) => {
    setEditFeedback(true);
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

      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFeedback, editFeedback, dropdownOpen]);

  const columnsMapping = [
    {
      Header: "Course",
      accessor: "course",
      customClassName: "font-light text-[rgba(89,89,89,1)]",
    },
    {
      Header: "Student",
      accessor: "student",
      customClassName: "font-light text-[rgba(89,89,89,1)]",
    },
    {
      Header: "Tutor",
      accessor: "tutor",
      customClassName: "font-light text-[rgba(89,89,89,1)]",
    },
    {
      Header: "Category",
      accessor: "category",
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
              <button
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => handleEdit(row.original)}
              >
                Edit Feedback
              </button>
            </div>
          )}
        </div>
      ),
      customClassName: "font-light text-[rgba(89,89,89,1)]",
    },
  ];

  const columns = columnsMapping;

  const completedCoursesData = [
    {
      course: "Math 101",
      student: "Jane Doe",
      tutor: "John Smith",
      category: "Mathematics",
      date: "2025-01-01",
    },
    {
      course: "History 202",
      student: "Tom Hanks",
      tutor: "Alice Johnson",
      category: "History",
      date: "2025-01-10",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex justify-between items-center pt-6 pb-3 px-8">
        <p className="text-2xl font-semibold text-[#160041] font-recoleta">
          Reports
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

      <div className="p-8">
        <Table columns={columns} data={completedCoursesData} />
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
                className="text-custom-purple py-2 px-12 border border-custom-purple rounded font-recoleta text-l"
                onClick={() => handleEdit()}
              >
                Edit Feedback
              </button>
              <button className="text-white py-2 px-14 bg-[#3900B4] rounded font-recoleta text-l">
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
              Edit Homework Feedback
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

export default AdminReports;
