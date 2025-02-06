import { useRef, useState } from "react";
import CourseImage from "../../assets/images/courseDetail.png";
import Course10 from "../../assets/images/course10.png";
import Course11 from "../../assets/images/course11.png";
import Course12 from "../../assets/images/course12.png";
import Course13 from "../../assets/images/course13.png";
import Course14 from "../../assets/images/course14.png";
import User from "../../assets/images/user.png";

const CourseDetail = ({ onBack }) => {
  const [selectedClass, setSelectedClass] = useState("General");
  const [selectedPrice, setSelectedPrice] = useState(120);
  const [enroll, setEnroll] = useState(false);
  const enrollRef = useRef(null);

  const handleEnroll = (classType, price) => {
    setSelectedClass(classType);
    setSelectedPrice(price);
    setEnroll(true);
  };

  return (
    <>
      <div className="flex bg-gray-100 ">
        <div className="w-1/5 p-4 bg-[#ede6f8] overflow-y-auto pl-8">
          <button onClick={onBack} className="text-purple-700 font-bold">
            &larr; Back
          </button>
        </div>

        <div className="flex-1 bg-[#F5F5F5]  p-6">
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
                business model, and design essential features. Learn to
                integrate high-quality content, conduct testing, and
                continuously improve your project.
              </p>

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

        <div className="w-1/4 p-6 ml-6  bg-[#F5F5F5]">
          <h3 className="text-lg font-recoleta text-custom-purple ">
            Enroll Alexis Shouberto
          </h3>

          <div className="mt-4 bg-white p-4 rounded-lg">
            <h4 className="text-md font-recoleta text-custom-purple underline">
              General Class
            </h4>
            <p className="text-gray-600 text-sm font-airbnb mt-3">
              Your child, alongside no more than 19 other students in a class
              with the tutor.
            </p>

            <button
              className="text-white py-2 px-12 bg-custom-purple rounded font-recoleta text-sm mt-8"
              onClick={() => handleEnroll("General", 120)}
            >
              Enroll - $120
            </button>
          </div>

          <div className="mt-4 bg-white p-4 rounded-lg">
            <h4 className="text-md font-recoleta text-custom-purple underline">
              Private Class
            </h4>
            <p className="text-gray-600 text-sm font-airbnb mt-3">
              A personal one-on-one experience with only your child and the
              tutor.
            </p>

            <p className="text-gray-600 text-sm font-airbnb mt-3">
              You also select the date you want the class to start.
            </p>
            <button
              className="text-custom-purple py-2 px-8 border border-custom-purple rounded font-recoleta text-sm mt-8"
              onClick={() => handleEnroll("Private", 180)}
            >
              Enroll - $180
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1">
        {enroll && <div className="overlay"></div>}
        {enroll && (
          <div
            ref={enrollRef}
            className="createAccount w-[38%] rounded-2xl p-4"
          >
            <button className="rounded-full border h-14 w-14 bg-[rgba(228,214,255,1)] flex items-center justify-center">
              <img src={User} alt="flag" />
            </button>
            <p className="mt-2 font-recoleta text-lg text-[rgba(22, 0, 65, 1)] font-bold">
              The Basics: “If This, Then That”
            </p>

            <div className="mt-8">
              <p className="font-recoleta text-lg font-airbnb">Student</p>
              <input className="font-airbnb text-xl mt-2 border border-[#B8B8B8] rounded-lg w-full focus:outline-none text-start py-2" />
            </div>

            <div className="mt-6">
              <p className="font-recoleta text-lg font-airbnb">
                Select Start Date
              </p>
              <input
                type="date"
                className="w-full py-2 px-4 rounded-lg font-recoleta text-transparent placeholder-transparent border border-[#B8B8B8] focus:outline-none calendar-gray"
                onFocus={(e) => e.target.classList.remove("text-transparent")}
                onBlur={(e) => {
                  if (!e.target.value)
                    e.target.classList.add("text-transparent");
                }}
              />
            </div>

            <div className="flex mt-16 gap-4">
              <button
                className="text-custom-purple py-2 px-10 border border-custom-purple rounded font-recoleta text-sm"
                onClick={() => setEnroll(false)}
              >
                Cancel
              </button>
              <button className="text-white py-2 px-12 bg-[#3900B4] rounded font-recoleta text-sm">
                Enroll - ${selectedPrice}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseDetail;
