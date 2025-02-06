import { useRef, useState } from "react";
import Course1 from "../../assets/images/course1.png";
import Course2 from "../../assets/images/course2.png";
import Course3 from "../../assets/images/course3.png";
import Course4 from "../../assets/images/course4.png";
import Course5 from "../../assets/images/course5.png";
import Course6 from "../../assets/images/course6.png";
import Course7 from "../../assets/images/course7.png";
import Course8 from "../../assets/images/course8.png";
import Course9 from "../../assets/images/course9.png";

import CourseDetail from "../CourseDetail/courseDetail";

const courses = [
  {
    title: "1-2 London Bridge Poems",
    category: "Language",
    age: "6 - 8 yrs",
    image: Course1,
  },
  {
    title: 'The Basics: "If This, Then That"',
    category: "Technology",
    age: "6 - 8 yrs",
    image: Course2,
  },
  {
    title: "The Story of Joseph",
    category: "Religion",
    age: "8 - 10 yrs",
    image: Course3,
  },
  {
    title: "The Basics: Programming",
    category: "Technology",
    age: "6 - 8 yrs",
    image: Course4,
  },
  {
    title: "Learning your mother tongue",
    category: "Language",
    age: "6 - 8 yrs",
    image: Course5,
  },
  {
    title: "The Basics: Kinetic Energy",
    category: "Technology",
    age: "6 - 8 yrs",
    image: Course6,
  },
  {
    title: "99 Names of Allah",
    category: "Religion",
    age: "6 - 8 yrs",
    image: Course7,
  },
  {
    title: "Amalgamation of Nigeria",
    category: "History",
    age: "6 - 8 yrs",
    image: Course8,
  },
  {
    title: "The Story of Columbus",
    category: "History",
    age: "6 - 8 yrs",
    image: Course9,
  },
];

const CourseGrid = () => {
  const [filters, setFilters] = useState({ course: [], age: [] });
  const [addCourse, setAddCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const addCourseRef = useRef(null);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  const handleBack = () => {
    setSelectedCourse(null);
  };

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={handleBack} />;
  }

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const filteredCourses = courses.filter(
    (course) =>
      (filters.course.length === 0 ||
        filters.course.includes(course.category)) &&
      (filters.age.length === 0 || filters.age.includes(course.age))
  );

  return (
    <div className="flex overflow-hidden">
      <div className="w-1/5 p-4 bg-[#ede6f8] overflow-y-auto pl-8">
        <h3 className="font-bold mb-8 mt-8 font-recoleta text-custom-purple">
          Filters
        </h3>
        <div>
          <h4 className="font-recoleta">Course</h4>
          {["History", "Language", "Religion", "Technology"].map((course) => (
            <label key={course} className="block">
              <input
                type="checkbox"
                checked={filters.course.includes(course)}
                onChange={() => handleFilterChange("course", course)}
              />{" "}
              {course}
            </label>
          ))}
        </div>
        <div className="mt-8">
          <h4 className="font-recoleta">Age</h4>
          {["4 - 6 yrs", "6 - 8 yrs", "8 - 10 yrs", "10 - 12 yrs"].map(
            (age) => (
              <label key={age} className="block">
                <input
                  type="checkbox"
                  checked={filters.age.includes(age)}
                  onChange={() => handleFilterChange("age", age)}
                />{" "}
                {age}
              </label>
            )
          )}
        </div>
        <button
          className="mt-4 text-red-600 underline"
          onClick={() => setFilters({ course: [], age: [] })}
        >
          Clear Filters
        </button>
      </div>

      <div
        className="flex-1 p-6 overflow-y-auto grid grid-cols-3 gap-2"
        style={{ maxHeight: "660px" }}
      >
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="p-4 "
            onClick={() => handleCourseClick(course)}
          >
            <div
              className=" bg-[#E0E2FF]"
              style={{
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
                src={course.image}
                alt={course.title}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </div>
            <h3 className="mt-2 font-recoleta text-sm">{course.title}</h3>
            <p className="text-gray-600 text-xs">
              {course.category} • {course.age}
            </p>
          </div>
        ))}
      </div>

      {addCourse && (
        <>
          <div className="overlay"></div>
          <div ref={addCourseRef} className="addCourse w-[60%] rounded-2xl">
            <CourseDetail course={selectedCourse} />{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default CourseGrid;
