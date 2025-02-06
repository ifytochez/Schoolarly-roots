import React, { useEffect, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Table from "../../../components/Table/table";
import CreateAccount from "../../../components/CreateAccount/createAccount";
import CardComponent from "../../../components/GradientCard/gradient";

const Finances = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [active, setActive] = useState("Payins");

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const handleDropdownToggle = (rowId) => {
    setDropdownOpen((prev) => (prev === rowId ? null : rowId));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen !== null && !event.target.closest(".relative")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const payinSData = [
    {
      name: "Alexis Shawberto",
      course: "Course Title 1",
      price: "$44",
      date: "Feb 8, 2024",
    },
  ];

  const payoutsData = [
    {
      tutor: "Alexis Shawberto",
      course: "Math 101",
      price: "$44",
      date: "Feb 8, 2024",
      action: "See Details",
    },
  ];

  const columnsMapping = {
    Payins: [
      {
        Header: "Name",
        accessor: "name",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Price",
        accessor: "price",
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

    Payouts: [
      {
        Header: "Tutor",
        accessor: "tutor",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },

      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Price",
        accessor: "price",
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

  const generalCoursesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [50, 55, 60, 70, 80, 85, 90],
  };

  const personalCoursesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [20, 18, 17, 15, 14, 13, 12],
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 px-8">
        <div className="flex gap-12">
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Payins")}
          >
            Payins
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Payouts")}
          >
            Payouts
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
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${active === "Payins" ? "0px" : "100px"})`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>
      <hr />
      {/* 
      <div
        style={{
          display: "flex",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <CardComponent
          title="General Courses Tutored"
          count="3,728"
          percentage={16}
          isPositive={true}
          gradientColors={{
            border: "#6200EE",
            fill: "rgba(98, 0, 238, 0.2)",
          }}
          chartData={generalCoursesData}
        />
        <CardComponent
          title="Personal Courses Tutored"
          count="224"
          percentage={14}
          isPositive={false}
          gradientColors={{
            border: "#F44336",
            fill: "rgba(244, 67, 54, 0.2)",
          }}
          chartData={personalCoursesData}
        />
      </div> */}

      <div>
        {active === "Payins" ? (
          <div className="p-8 ">
            <Table columns={columns} data={payinSData} />
          </div>
        ) : active === "Payouts" ? (
          <div className="p-8">
            <Table columns={columns} data={payoutsData} />
          </div>
        ) : null}
      </div>

      <CreateAccount
        showCreateAccount={showCreateAccount}
        setShowCreateAccount={setShowCreateAccount}
      />
    </div>
  );
};

export default Finances;
