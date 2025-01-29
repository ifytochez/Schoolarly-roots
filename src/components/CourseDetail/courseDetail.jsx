import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseImage from "../../assets/images/courseDetail.png";
import Course10 from "../../assets/images/course10.png";
import Course11 from "../../assets/images/course11.png";
import Course12 from "../../assets/images/course12.png";
import Course13 from "../../assets/images/course13.png";
import Course14 from "../../assets/images/course14.png";

const CourseDetail = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="flex bg-gray-100 ">
      {/* Sidebar */}
      <div className="w-1/5 p-4 bg-[#ede6f8] overflow-y-auto pl-8">
        <button
          onClick={() => navigate("/courseGrid")}
          className="text-purple-700 font-bold"
        >
          &larr; Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F5F5F5]  p-6">
        {/* Course Header */}
        <div className="flex flex-col">
          <img
            src={CourseImage}
            alt="Course Thumbnail"
            className="w-full rounded-lg"
          />
          <div>
            <h2 className="text-lg font-recoleta text-custom-purple mt-8">
              The Basics: "If This, Then That"
            </h2>
            <p className="text-gray-600 mt-2">
              Description: Validate your idea, define your niche, choose a
              business model, and design essential features. Learn to integrate
              high-quality content, conduct testing, and continuously improve
              your project.
            </p>

            {/* Course Details */}
            <p className="text-lg font-recoleta text-custom-purple mt-8">
              Course Details
            </p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="bg-white p-2 rounded-lg text-center font-airbnb">
                <p className="text-sm">Classes</p>

                <div className="flex items-center gap-2 justify-center">
                  <img src={Course10} alt="" />
                  <p className="text-sm font-bold">128</p>
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg text-center font-airbnb">
                <p className="text-sm">Age</p>
                <div className="flex items-center gap-2 justify-center">
                  <img src={Course11} alt="" />
                  <p className="text-sm font-bold">8 - 10 yrs</p>
                </div>
              </div>
              <div className="bg-white p-2 rounded-lg text-center font-airbnb">
                <p className="text-sm">Start Date</p>

                <div className="flex items-center gap-2 justify-center">
                  <img src={Course12} alt="" />
                  <p className="text-sm font-bold">Sept 11</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <div className="mt-6">
          <h3 className="text-lg font-recoleta text-custom-purple mt-8">
            Chapters
          </h3>
          <ul className="mt-2">
            <li className="py-1 flex gap-3">
              <span>
                <img src={Course13} alt="" />
              </span>{" "}
              Chapter 1: Introduction{" "}
              <span className="text-purple-700">Preview</span>
            </li>
            <li className="py-1  flex gap-3">
              <span>
                <img src={Course14} alt="" />
              </span>{" "}
              Chapter 2: Introduction to Conditional Statements
            </li>
          </ul>
        </div>
      </div>

      {/* Enrollment Section */}
      <div className="w-1/4 p-6 ml-6  bg-[#F5F5F5]">
        <h3 className="text-lg font-recoleta text-custom-purple ">
          Enroll Alexis Shouberto
        </h3>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <h4 className="text-md font-recoleta text-custom-purple underline">
            General Class
          </h4>
          <p className="text-gray-600 text-sm font-airbnb mt-3">
            Your child, alongside no more than 19 other students in a class with
            the tutor.
          </p>

          <button
            className="text-white py-2 px-12 bg-custom-purple rounded font-recoleta text-sm mt-8"
            onClick={() => setSelectedClass("General")}
          >
            Enroll - $120
          </button>
        </div>

        <div className="mt-4 bg-white p-4 rounded-lg">
          <h4 className="text-md font-recoleta text-custom-purple underline">
            Private Class
          </h4>
          <p className="text-gray-600 text-sm font-airbnb mt-3">
            A personal one-on-one experience with only your child and the tutor.
          </p>

          <p className="text-gray-600 text-sm font-airbnb mt-3">
            You also select the date you want the class to start.
          </p>
          <button
            className="text-custom-purple py-2 px-8 border border-custom-purple rounded font-recoleta text-sm mt-8"
            onClick={() => setSelectedClass("Private")}
          >
            Enroll - $180
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
