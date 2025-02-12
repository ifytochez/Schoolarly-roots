import React, { useState } from "react";
import "./landingPage.css";
import Landing1 from "../../assets/images/landing1.png";
import Landing2 from "../../assets/images/landing2.png";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const LandingPage = ({ setIsAdmin, setIsStudent, setIsTutor }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const CourseCard = ({ title, lessons, type, category, backgroundColor }) => (
    <div
      className="w-1/4 w-[280px] h-280px rounded-lg flex flex-col items-start p-4"
      style={{ backgroundColor }}
    >
      <button className="bg-[#D9D9D9] rounded-full px-5 py-5 mb-6"></button>
      <p className="font-recoleta text-lg">{title}</p>
      <p className="font-airbnb">{lessons} lessons</p>
      <p className="mt-4 font-airbnb">
        <span className="font-bold">Type:</span> {type}
      </p>
      <p className="font-airbnb">
        <span className="font-bold">Category:</span> {category}
      </p>
    </div>
  );

  const ModelsCard = ({ number, title, description }) => (
    <div className="w-1/3 w-[280px] h-280px rounded-lg flex flex-col items-start p-4">
      <p className="font-recoleta text-4xl font-bold text-[#160041] mb-4">
        {number}
      </p>
      <p className="font-recoleta text-[#160041] text-lg font-bold mb-2">
        {title}
      </p>
      <p className="font-airbnb text-lg">{description}</p>
    </div>
  );

  const courses = [
    {
      title: "Numeric Elements",
      lessons: 14,
      type: "Beginner",
      category: "Arithmetic",
    },
    {
      title: "Advanced Algebra",
      lessons: 20,
      type: "Intermediate",
      category: "Mathematics",
    },
    {
      title: "Geometry Basics",
      lessons: 12,
      type: "Beginner",
      category: "Geometry",
    },
    {
      title: "Probability",
      lessons: 18,
      type: "Advanced",
      category: "Statistics",
    },
    {
      title: "Trigonometry",
      lessons: 15,
      type: "Intermediate",
      category: "Mathematics",
    },
    {
      title: "Statistics Fundamentals",
      lessons: 10,
      type: "Beginner",
      category: "Statistics",
    },
    {
      title: "Differential Equations",
      lessons: 22,
      type: "Advanced",
      category: "Mathematics",
    },
  ];

  const models = [
    {
      number: "01",
      title: "Virtual Classrooms",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      number: "02",
      title: "Video Sessions",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      number: "03",
      title: "1 on 1 Sessions",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      number: "04",
      title: "Games & Fun Activities",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      number: "05",
      title: "Assignments",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      number: "06",
      title: "Parent Mode",
      description:
        "Today is not the day you go home. It is the day you start learning, anywhere!",
    },
  ];

  const faqs = [
    {
      question: "Example Question One",
      answer:
        "Today is not the day you go home. It is the day you start learning, anywhere! Today is not the day you go home. It is the day you start learning, anywhere! Today is not the day you go home. It is the day you start learning, anywhere!",
    },
    {
      question: "Example Question Two",
      answer:
        "Learning is not limited by geography. Start learning anywhere, anytime!",
    },
    {
      question: "Example Question Three",
      answer:
        "Your education journey begins today. Don't wait to learn and grow!",
    },
    {
      question: "Example Question Four",
      answer:
        "Expand your knowledge and skills in a way that suits your needs.",
    },
    {
      question: "Example Question Five",
      answer: "Today is your day to explore and learn something new!",
    },
  ];

  const colors = [
    "#F0E0DF",
    "#E1E2FF",
    "#FFF7DC",
    "#FFE9E9",
    "#E2EDF1",
    "#F5FEE9",
    "#E9D2D1",
  ];
  return (
    <div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(198, 176, 247, 0) 8%, rgba(198, 176, 247, 0.5) 50%, rgba(198, 176, 247, 0) 90%)",
        }}
      >
       <Header setIsAdmin={setIsAdmin} setIsStudent={setIsStudent} setIsTutor={setIsTutor} />
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="font-recoleta font-extrabold text-4.5xl text-[#160041]">
            Personalized learnings.
          </p>
          <p className="font-recoleta font-extrabold text-4.5xl mb-3 text-[#160041]">
            {" "}
            A better future for our kids.
          </p>
          <p className="airbnb text-xl text-[#000000]">
            Today is the day you start learning, anywhere.
          </p>
          <p className="airbnb text-xl">
            Sign Up for Early Access & unlock a free course!
          </p>

          <button className="bg-[#3900B4] border px-12 py-2 mt-8 text-white rounded font-young text-lg shadow-custom">
            Get Early Access
          </button>
        </div>

        <div className="w-[80%] mx-auto flex gap-8  justify-center items-center">
          <button className="border rounded-full overflow-hidden flex justify-center items-center">
            <img src={Landing1} alt="ButtonImage" />
          </button>

          <button className="border rounded-full overflow-hidden flex justify-center items-center mt-16">
            <img src={Landing2} alt="ButtonImage" />
          </button>
          <button className="border rounded-full overflow-hidden flex justify-center items-center">
            <img src={Landing1} alt="ButtonImage" />
          </button>
        </div>

        <div className="w-[80%] mx-auto flex flex-col mt-32">
          <p className="font-recoleta font-extrabold text-4xl text-[#160041]">
            Programs or Courses?
          </p>
          <p className="airbnb text-xl mt-8 mb-0">
            Today is not the day you go home,
          </p>
          <p className="airbnb text-xl mt-0 mb-0 text-[#000000]">
            It is the day you start learning, anywhere.
          </p>
        </div>

        <div className="w-[80%] mx-auto flex flex-col mt-16 gap-8">
          <div className="flex flex-wrap gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                title={course.title}
                lessons={course.lessons}
                type={course.type}
                category={course.category}
                backgroundColor={colors[index % colors.length]}
              />
            ))}
            <div
              className="w-1/4 w-[280px] h-280px rounded-lg flex items-center justify-center text-white font-bold font-airbnb"
              style={{ backgroundColor: "#4A4A4A" }}
            >
              View 78 more courses
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 242, 228, 0) 0%, #FFF2E4 50%, rgba(255, 242, 228, 0) 100%",
        }}
      >
        <div className="mt-44 w-[80%] mx-auto">
          <p className="font-recoleta font-extrabold text-4xl text-[#160041]">
            Ops Models
          </p>
          <p className="airbnb text-xl mt-8 mb-0">
            Today is not the day you go home,
          </p>
          <p className="airbnb text-xl mt-0 mb-0 text-[#000000]">
            It is the day you start learning, anywhere.
          </p>
        </div>

        <div className="ml-40 mx-auto flex  mt-16 gap-8">
          <div className="flex flex-wrap gap-8 w-3/4">
            {models.map((model, index) => (
              <ModelsCard
                key={index}
                title={model.title}
                number={model.number}
                description={model.description}
              />
            ))}
          </div>
          <div className="absolute right-0 top-130 h-full left-118">
            <img src={Landing1} alt="" className="rounded-5xl " />
          </div>
        </div>
      </div>

      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(198, 176, 247, 0) 12.35%, rgba(198, 176, 247, 0.2) 56.17%, rgba(198, 176, 247, 0) 100%)",
        }}
      >
        <div className="flex w-[80%] mx-auto mt-44 gap-12 justify-between">
          <div className="w-[60%]">
            <div>
              <p className="font-recoleta font-extrabold text-4xl text-[#160041]">
                FAQ
              </p>
              <p className="airbnb text-lg mb-8">Questions & Answers Galore!</p>
            </div>
            <div>
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4">
                  <button
                    className="w-full text-left font-semibold text-lg text-[#160041] focus:outline-none"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <p className="text-lg text-airbnb text-[#3B3B3B] mt-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-[30%] bg-[#D9D9D9] p-8 rounded-lg">
            <p className="font-recoleta font-bold text-3xl text-[#160041]">
              Contact Us
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[80%] mx-auto mt-80 items-center justify-center mb-56">
          <p className="font-recoleta font-extrabold text-4xl text-[#160041] mb-4">
            Start Today!
          </p>
          <p className="font-recoleta font-extrabold text-4xl text-[#160041]">
            {" "}
            Secure your kids’ tomorrow.
          </p>

          <button className="bg-[#3900B4] border px-10 py-2 mt-12 text-white rounded font-young text-lg">
            Get Early Access
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
