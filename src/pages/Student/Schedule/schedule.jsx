import React, { useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import { FaCalendarAlt } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);
  const [schedules, setSchedules] = useState({
    "2025-01-26": [
      {
        id: 1,
        time: "10:00 AM",
        description: "Team Meeting",
        color: "#9868fd",
      },
      {
        id: 2,
        time: "1:00 PM",
        description: "Project Review",
        color: "#34a0a4",
      },
      { id: 3, time: "3:30 PM", description: "Client Call", color: "#f8961e" },
      {
        id: 4,
        time: "4:30 PM",
        description: "Teachers Call",
        color: "#f8961e",
      },
      { id: 5, time: "5:30 PM", description: "Student Call", color: "#f8961e" },
    ],
    "2025-01-27": [
      {
        id: 6,
        time: "9:00 AM",
        description: "Design Presentation",
        color: "#f3722c",
      },
    ],
  });

  const handleDateChange = (date) => setSelectedDate(date);

  const formattedDate = (date) => date.toISOString().split("T")[0];
  const selectedDaySchedules = selectedDate
    ? schedules[formattedDate(selectedDate)] || []
    : [];

  const currentMonth = selectedDate
    ? selectedDate.getMonth()
    : new Date().getMonth();
  const currentYear = selectedDate
    ? selectedDate.getFullYear()
    : new Date().getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const prevMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth - 1);
    setSelectedDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(currentMonth + 1);
    setSelectedDate(newDate);
  };

  const handleYearSelect = (year) => {
    const newDate = new Date(selectedDate);
    newDate.setFullYear(year);
    setSelectedDate(newDate);
    setShowYearDropdown(false);
  };

  const handleMonthSelect = (monthIndex) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(monthIndex);
    setSelectedDate(newDate);
    setShowMonthDropdown(false);
  };

  const toggleYearDropdown = () => setShowYearDropdown(!showYearDropdown);

  const toggleMonthDropdown = () => setShowMonthDropdown(!showMonthDropdown);

  const yearRange = Array.from({ length: 50 }, (_, i) => 2025 + i);

  const monthString = `${monthNames[currentMonth]} 01-${new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate()}`;

  const generateCalendarGrid = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const grid = [];
    const startDay = firstDayOfMonth.getDay();
    let dayCounter = 1;

    for (let i = 0; i < (startDay === 0 ? 6 : startDay - 1); i++) {
      grid.push(null);
    }

    while (dayCounter <= lastDayOfMonth.getDate()) {
      const currentDate = new Date(currentYear, currentMonth, dayCounter);

      if (currentDate.getDay() !== 0) {
        grid.push(new Date(currentYear, currentMonth, dayCounter));
      }
      dayCounter++;
    }

    while (grid.length < 30) {
      grid.push(null);
    }

    return grid;
  };

  const calendarGrid = generateCalendarGrid();
  const totalCells = Math.ceil(calendarGrid.length / 6) * 6;
  const emptyCells = Array(totalCells - calendarGrid.length).fill(null);
  const completeGrid = [...calendarGrid, ...emptyCells];

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 pl-8 pr-8">
        <p className="text-2xl font-semibold text-[#160041] font-recoleta">
          Schedule
        </p>
        <img src={Bell} alt="Notification Bell" />
      </div>

      <hr />

      <div className="flex h-[85vh] p-8">
        <div className="flex-1 rounded-lg p-4">
          <div className="flex items-center mb-4 relative">
            <FaCalendarAlt
              size={24}
              className="mr-2 cursor-pointer"
              onClick={toggleYearDropdown}
            />
            <span
              className="text-lg cursor-pointer"
              onClick={toggleMonthDropdown}
            >
              {monthString}
            </span>
            <button onClick={prevMonth} className="ml-4">
              {"<"}
            </button>
            <button onClick={nextMonth} className="ml-2">
              {">"}
            </button>

            {showMonthDropdown && (
              <div
                className="absolute top-full left-0 bg-white shadow-md p-2 mt-2 rounded border z-10"
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  width: "150px",
                }}
              >
                {monthNames.map((month, index) => (
                  <div
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-200 border-b text-center"
                    onClick={() => handleMonthSelect(index)}
                  >
                    {month}
                  </div>
                ))}
              </div>
            )}

            {showYearDropdown && (
              <div
                className="absolute top-full left-0 bg-white shadow-md p-2 mt-2 rounded border z-10"
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  width: "150px",
                }}
              >
                {yearRange.map((year) => (
                  <div
                    key={year}
                    className="cursor-pointer p-2 hover:bg-gray-200 border-b text-center"
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-6 mb-4">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-6 border border-gray-100 text-gray">
            {completeGrid.map((day, index) => (
              <div
                key={index}
                className={`border border-gray-100 p-4 ${
                  completeGrid.length > 30 ? "min-h-[95px]" : "min-h-[115px]"
                }`}
                onClick={day ? () => handleDateChange(day) : undefined}
                style={{
                  color: day ? "#808080" : "#d3d3d3",
                }}
              >
                {day && (
                  <>
                    <div className="text-sm font-semibold">
                      {String(day.getDate()).padStart(2, "0")}
                    </div>

                    {schedules[formattedDate(day)]
                      ?.slice(0, 2)
                      .map((schedule) => (
                        <div
                          key={schedule.id}
                          style={{
                            backgroundColor: schedule.color,
                            color: "#fff",
                            borderRadius: "4px",
                            padding: "2px 4px",
                            margin: "2px 0",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          {schedule.time}
                        </div>
                      ))}
                    {schedules[formattedDate(day)]?.length > 2 && (
                      <div className="text-xs text-gray-500 mt-1">
                        +{schedules[formattedDate(day)].length - 2} more
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/3 bg-[#ede6f8] rounded-lg p-4 ml-4 h-[675px]">
          <h3 className="text-lg font-bold mb-4">
            {selectedDate ? selectedDate.toDateString() : ""}
          </h3>

          {selectedDate === null ? (
            <p className="text-center text-gray-500">
              Select a day on the calendar to see your detailed schedule here.
            </p>
          ) : selectedDaySchedules.length === 0 ? (
            <p className="text-center text-gray-500">
              You do not have anything scheduled for{" "}
              {selectedDate.toDateString()}.
            </p>
          ) : (
            <ul>
              {selectedDaySchedules.map((schedule) => (
                <li
                  key={schedule.id}
                  style={{
                    backgroundColor: schedule.color,
                    color: "#fff",
                    padding: "10px",
                    margin: "5px 0",
                    borderRadius: "5px",
                  }}
                >
                  {schedule.time} - {schedule.description}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
