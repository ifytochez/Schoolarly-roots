import React, { useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import Table from "../../../components/Table/table";

const ReportPage = () => {
  const [active, setActive] = useState("Class Reports");

  const handleClick = (reportType) => {
    setActive(reportType);
  };

  const columnsMapping = {
    "Class Reports": [
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
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Homework Reports": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Score",
        accessor: "score",
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
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    "Test Reports": [
      {
        Header: "Course",
        accessor: "course",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Score",
        accessor: "score",
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
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
    ],
    Feedback: [
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
        Header: "Date",
        accessor: "date",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Action",
        accessor: "action",
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
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Class Reports")}
          >
            Class Reports
          </p>
          <p
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Homework Reports")}
          >
            Homework Reports
          </p>
          <p
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Test Reports")}
          >
            Test Reports
          </p>
          <p
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Feedback")}
          >
            Feedback
          </p>
        </div>

        <img src={Bell} alt="Notification Bell" />
      </div>

      <div
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Class Reports"
              ? "30px"
              : active === "Homework Reports"
              ? "180px"
              : active === "Test Reports"
              ? "380px"
              : "500px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div className="p-8">
        <Table columns={columns} data={[]} />
      </div>
    </div>
  );
};

export default ReportPage;
