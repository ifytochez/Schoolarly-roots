import React, { useState } from "react";
import ArrowLeftIcon from "../../assets/icons/arrowLeft";

const CourseDetails = () => {
  const [courses, setCourses] = useState([]);

  const handleCourseChange = (e) => {
    setCourses(e.target.value);
  };
  return (
    <div>
      <div className="flex flex-col pt-6 pb-3 pl-8 pr-8">
        <ArrowLeftIcon />
        <p className="mt-6 text-xl">Completed Course</p>
        <div className="relative mt-3 w-[25%]">
          <select
            value={courses}
            onChange={handleCourseChange}
            className="w-full py-2.5 px-24 rounded-lg font-recoleta text-sm text-[rgba(89, 89, 89, 1)] border-2 border-[rgba(89, 89, 89, 1)] focus:outline-none"
          >
            <option value="" hidden></option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
