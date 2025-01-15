import React, { useState } from "react";
import Reading from "../../../assets/images/Reading-big.png";
import ArrowLeftIcon from "../../../assets/icons/arrowLeft";
import Table from "../../../components/Table/table";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState([]);
  const [context, setContext] = useState("");
  const [active, setActive] = useState("Class Log");
  const navigate = useNavigate();

  const handleClick = (courseDetails) => {
    setActive(courseDetails);
  };

  const handleCourseChange = (e) => {
    setCourses(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBackClick = () => {
    navigate("/classes");
  };

  const columnsMapping = {
    "Class Log": [
      {
        Header: "Class",
        accessor: "class",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Attendance",
        accessor: "attendance",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Class Length",
        accessor: "classLength",
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
    "Homework Log": [
      {
        Header: "Class",
        accessor: "class",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Submitted",
        accessor: "submitted",
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
    "Test Log": [
      {
        Header: "Class",
        accessor: "class",
        customClassName: "font-light text-[rgba(89,89,89,1)]",
      },
      {
        Header: "Submitted",
        accessor: "submitted",
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
  };

  const columns = columnsMapping[active];
  return (
    <>
      <div className="flex flex-col pt-6 pl-8 pr-8 bg-[#F3F3FF]">
        <button onClick={handleBackClick} className="focus:outline-none">
          <ArrowLeftIcon />
        </button>
        <p className="mt-6 text-xl">Completed Course</p>
        <div className="relative mt-3 w-[25%]  ">
          <select
            value={courses}
            onChange={handleCourseChange}
            className="w-full py-2.5 rounded-lg font-recoleta text-sm text-[rgba(89, 89, 89, 1)] border-2 border-[#dbd5eb] bg-[#F3F3FF] focus:outline-none"
          >
            <option value="">1-2 London Bridge Poems</option>
          </select>
        </div>

        <div className="flex mt-8 gap-28 w-full justify-between">
          <div className="w-[65%]">
            <div className="bg-[#E0E2FF] rounded-2xl w-[100%] h-[28vh] flex gap-16 items-center pl-8">
              <div className="flex flex-col items-center">
                <button className="mb-1 rounded-full border px-9 py-9 bg-[#D2D5FF]"></button>
                <p className="Recoleta text-2xl text-[#000000]">Tutor</p>
                <p className="font-airbnb text-[#000000]">Muhammad Ali</p>
              </div>
              <div className="w-px h-[100px] bg-gray-400"></div>
              <div>
                <div className="flex gap-32 mb-8">
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">Mar 8</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Start Date
                    </p>
                  </div>
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">12/12</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Attended Classes
                    </p>
                  </div>
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">100%</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Homework Score
                    </p>
                  </div>
                </div>
                <div className="flex gap-28">
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">Dec 18</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      End Date
                    </p>
                  </div>
                  <div>
                    <p className="Recoleta text-3xl text-[#000000]">21</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Study Hours
                    </p>
                  </div>
                  <div className="ml-12">
                    <p className="Recoleta text-3xl text-[#000000]">98.8%</p>
                    <p className="font-airbnb text-lg text-[#000000]">
                      Test Score
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center pt-16 pr-8 pb-2">
                <div className="flex gap-8">
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Class Log")}
                  >
                    Class Log
                  </p>
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Homework Log")}
                  >
                    Homework Log
                  </p>
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Test Log")}
                  >
                    Test Log
                  </p>
                  <p
                    className="airbnb text-lg cursor-pointer"
                    onClick={() => handleClick("Send Feedback")}
                  >
                    Feedback
                  </p>
                </div>
              </div>

              <div
                className="w-1 h-1.5 pr-8 pl-8 bg-[#9868fd]"
                style={{
                  transition: "transform 0.3s ease-in-out",
                  transform: `translateX(${
                    active === "Class Log"
                      ? "10px"
                      : active === "Homework Log"
                      ? "140px"
                      : active === "Test Log"
                      ? "260px"
                      : "370px"
                  })`,
                  clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
                }}
              ></div>
            </div>
          </div>

          <div className="w-[30%] flex items-end">
            <img src={Reading} alt="" className="object-contain" />
          </div>
        </div>
      </div>
      <div className="p-8">
        <h1 className="text-2xl mb-4">{active}</h1>
        {active === "Send Feedback" ? (
          <div>
            <p className="mt-6 text-lg">Category</p>
            <div className="relative mt-3 w-[15%]">
              <select
                value={category}
                onChange={handleCategoryChange}
                className="w-full py-2.5 rounded-lg font-recoleta text-sm text-[rgba(89, 89, 89, 1)] border border-[#B8B8B8] focus:outline-none"
              >
                <option value="" hidden></option>
                <option value="Class">Class</option>
                <option value="Test">Test</option>
                <option value="Homework">Homework</option>
              </select>
            </div>

            <p className="mt-6 text-lg mb-3">Context</p>
            <div>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="w-[25%] h-[150px] rounded-lg border border-[#B8B8B8] p-2 focus:outline-none"
                placeholder="Type your feedback here..."
              ></textarea>
            </div>

            <button
              className={`py-3 px-12 rounded font-recoleta text-l text-white font-bold mt-8 ${
                category && context
                  ? "bg-[#9868fd] cursor-pointer"
                  : "bg-[#d7cbef] cursor-not-allowed"
              }`}
              disabled={!category || !context}
            >
              Send Feedback
            </button>
          </div>
        ) : (
          <Table columns={columns} data={[]} />
        )}
      </div>
    </>
  );
};

export default CourseDetails;
