import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Bell from "../../assets/images/bell 1.png";
import Reading from "../../assets/images/reading.png";
import Writing from "../../assets/images/Writing.png";
import Playing from "../../assets/images/Playing.png";
import Table from "../../components/Table/table";

const ClassesPage = () => {
  const [active, setActive] = useState("Active Classes");

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const activeClassesData = [
    { course: "Numeric Elements", time: "2pm, today.", image: Writing },
    {
      course: "Masha & Pooh the Bear",
      time: "4pm, tomorrow.",
      image: Playing,
    },
    {
      course: "1-2 London Bridge Poems",
      time: "10am,  July 4.",
      image: Reading,
    },
  ];

  const completedCoursesData = [
    {
      course: "Math 101",
      tutor: "John Doe",
      averageScore: "85%",
      dateCompleted: "2024-12-01",
      action: "See Details",
    },
    {
      course: "Science Basics",
      tutor: "Jane Smith",
      averageScore: "90%",
      dateCompleted: "2024-11-15",
      action: "See Details",
    },
  ];

  const colors = ["#FFE0E0", "#BAEDED", "#E0E2FF"];

  const columnsMapping = {
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
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ value, row }) => (
          <Link
            to={`/courseDetails`}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            {value}
          </Link>
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
            onClick={() => handleClick("Completed Courses")}
          >
            Completed Courses
          </p>
        </div>

        <img src={Bell} alt="Notification Bell" />
      </div>

      <div
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Active Classes" ? "30px" : "200px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div>
        {active === "Active Classes" ? (
          <div className="p-8 flex flex-wrap gap-4">
            {activeClassesData.map((classItem, index) => (
              <div
                key={index}
                className="flex flex-col w-1/4 mb-2"
                style={{
                  maxWidth: "250px",
                }}
              >
                <div
                  className="mb-2"
                  style={{
                    backgroundColor: colors[index % colors.length],
                    width: "240px",
                    height: "120px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={classItem.image}
                    alt={classItem.course}
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  />
                </div>

                <p className="font-lg text-sm font-recoleta">
                  {classItem.course}
                </p>
                <p className="text-gray-500 text-xs">{classItem.time}</p>
              </div>
            ))}
          </div>
        ) : active === "Completed Courses" ? (
          <div className="p-8">
            <Table columns={columns} data={completedCoursesData} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ClassesPage;
