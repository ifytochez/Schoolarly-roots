import React, { useState } from "react";
import Bell from "../../assets/images/bell 1.png";
import Reading from "../../assets/images/reading.png";
import Playing from "../../assets/images/Playing.png";
import Table from "../../components/Table/table";

const HomeworkPage = () => {
  const [active, setActive] = useState("Pending Homework");
  const [hasPendingHomework, setHasPendingHomework] = useState(true); // Set to true for testing

  const handleClick = (homeworkType) => {
    setActive(homeworkType);
  };

  const pendingHomeworkData = [
    {
      course: "Math",
      dueDate: "2024-12-30T16:00:00Z",
      isOverdue: false,
      image: Reading,
    },
    {
      course: "Science",
      dueDate: "2024-12-28T16:00:00Z",
      isOverdue: true,
      image: Playing,
    },
  ];

  const columnsMapping = {
    "Completed Homework": [
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
  };

  const columns = columnsMapping[active];

  const colors = ["#BAEDED", "#E0E2FF"];

  const formatDueDate = (dueDate, isOverdue) => {
    const today = new Date();
    const dueDateObj = new Date(dueDate);
    const diffTime = dueDateObj.getTime() - today.getTime();
    const isTomorrow = diffTime <= 86400000 && diffTime > 0;

    if (isOverdue) {
      return "Overdue";
    } else if (isTomorrow) {
      return `Due at ${dueDateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}, tomorrow`;
    } else {
      return `Due at ${dueDateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}, ${dueDateObj.toLocaleDateString()}`;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 pl-8 pr-8">
        <div className="flex gap-12">
          <p
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Pending Homework")}
          >
            Pending Homework
          </p>
          <p
            className="airbnb text-lg cursor-pointer"
            onClick={() => handleClick("Completed Homework")}
          >
            Completed Homework
          </p>
        </div>

        <img src={Bell} alt="Notification Bell" />
      </div>

      <div
        className="w-4 h-1.5 pr-8 pl-8 bg-[#9868fd] ml-8"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Pending Homework" ? "30px" : "240px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      <div>
        {active === "Pending Homework" && !hasPendingHomework ? (
          <div className="flex pt-8 pl-20 text-[#787a78]">
            <p className="text-sm font-airbnb font-light pt-8 text-center">
              You do not have any pending <br />
              homework. Keep it up!
            </p>
          </div>
        ) : active === "Pending Homework" && hasPendingHomework ? (
          <div className="p-8">
            <div className="flex flex-wrap gap-2">
              {pendingHomeworkData.map((homework, index) => {
                const isOverdue = homework.isOverdue;
                const dueDateFormatted = formatDueDate(
                  homework.dueDate,
                  isOverdue
                );

                return (
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
                        src={homework.image}
                        alt={homework.image}
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      />
                    </div>

                    <p className="font-lg text-sm font-recoleta">
                      {homework.course}
                    </p>
                    <p
                      className={`${
                        isOverdue ? "text-red-500" : "text-black"
                      } text-xs font-airbnb font-light`}
                    >
                      {dueDateFormatted}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        ) : active === "Completed Homework" ? (
          <div className="p-8">
            <Table columns={columns} data={[]} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HomeworkPage;
