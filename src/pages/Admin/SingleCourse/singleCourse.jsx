import React, { useEffect, useRef, useState } from "react";
import Bell from "../../../assets/images/bell 1.png";
import DeleteIcon from "../../../assets/icons/delete";
import EditIcon from "../../../assets/icons/edit";
import CreateAccount from "../../../components/CreateAccount/createAccount";

const SingleCourse = () => {
  const [active, setActive] = useState("Course Curriculum");
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [age, setAge] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [primaryTutor, setPrimaryTutor] = useState("");
  const [secondaryTutor, setSecondaryTutor] = useState("");
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [newContentTitle, setNewContentTitle] = useState(""); // For new content title
  const [newContentText, setNewContentText] = useState("");

  const handleClick = (classesType) => {
    setActive(classesType);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleCreateAccountClick = () => {
    setShowCreateAccount(true);
  };

  const [chapters, setChapters] = useState([
    {
      title: "Intro",
      content: [
        { title: "Class Content", text: "" },
        { title: "Homework", text: "" },
        { title: "Test", text: "" },
      ],
    },
    {
      title: "Title (25 mins)",
      content: [
        { title: "Class Content", text: "" },
        { title: "Homework", text: "" },
        { title: "Test", text: "" },
      ],
    },
  ]);

  const handleAddChapter = () => {
    const newChapter = {
      title: `New Chapter ${chapters.length + 1}`,
      content: [
        { title: "Class Content", text: "" },
        { title: "Homework", text: "" },
        { title: "Test", text: "" },
      ],
    };
    setChapters([...chapters, newChapter]);
    setSelectedChapter(chapters.length);
    setSelectedContent(null);
  };

  const handleAddContent = () => {
    if (selectedChapter !== null) {
      const newContent = { title: newContentTitle, text: newContentText };
      const updatedChapters = [...chapters];
      updatedChapters[selectedChapter].content.push(newContent);
      setChapters(updatedChapters);

      // Reset new content fields
      setNewContentTitle("");
      setNewContentText("");
    }
  };

  const handleContentChange = (e, chapterIndex, contentIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].content[contentIndex].text = e.target.value;
    setChapters(updatedChapters);
  };

  const handleEditChapter = (chapterIndex) => {};

  const handleDeleteChapter = (chapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters.splice(chapterIndex, 1);
    setChapters(updatedChapters);
    if (selectedChapter === chapterIndex) {
      setSelectedChapter(null);
    }
  };

  const handleEditContent = (chapterIndex, contentIndex) => {
    // Logic to edit the content title or details
  };

  const handleDeleteContent = (chapterIndex, contentIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].content.splice(contentIndex, 1);
    setChapters(updatedChapters);
    if (selectedContent === contentIndex) {
      setSelectedContent(null);
    }
  };

  useEffect(() => {
    if (chapters.length > 0) {
      setSelectedChapter(0);
      if (chapters[0].content.length > 0) {
        setSelectedContent(0);
      }
    }
  }, [chapters]);

  return (
    <div>
      <div className="flex justify-between items-center pt-6 pb-3 pl-8 pr-8">
        <div className="flex gap-12">
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Course Curriculum")}
          >
            Course Curriculum
          </p>
          <p
            className={`airbnb text-lg cursor-pointer`}
            onClick={() => handleClick("Course Details")}
          >
            Course Details
          </p>
        </div>

        <div className="flex gap-8 items-center">
          <button
            className="text-custom-purple border border-custom-purple px-6 py-2 rounded-md"
            onClick={handleCreateAccountClick}
          >
            Create Account
          </button>
          <img src={Bell} alt="Notification Bell" className="w-6 h-6" />
        </div>
      </div>

      <div
        className="w-1 h-1.5 pr-8 pl-8 bg-[#9868fd]"
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: `translateX(${
            active === "Course Curriculum" ? "50px" : "250px"
          })`,
          clipPath: "polygon(0 100%, 10% 0, 90% 0, 100% 100%)",
        }}
      ></div>

      <hr />

      {active === "Course Details" && (
        <>
          <div className="max-w-[40%] pl-8 relative">
            <p className="text-custom-purple text-sm font-recoleta mt-6">
              Details
            </p>

            <div className="grid grid-cols-2 gap-6 mt-2">
              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Course Title
                </label>
                <input
                  type="text"
                  className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Category
                </label>
                <select className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"></select>
              </div>

              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Students’ Age
                </label>
                <select className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"></select>
              </div>

              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Course Price
                </label>
                <select className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"></select>
              </div>
            </div>

            <div className="absolute top-0 -right-40 mt-2">
              <div className="flex flex-col items-center">
                <button
                  className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-dashed border-gray-400 text-gray-800"
                  onClick={handleClick}
                >
                  <span className="text-2xl">+</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
                <p
                  className="mt-2 text-[#9868fd] text-sm font-airbnb cursor-pointer"
                  onClick={handleClick}
                >
                  Course Cover Image
                </p>
              </div>
            </div>

            <div className="mt-8">
              <label className="text-base font-airbnb links mt-2">
                Course Description & Intro
              </label>
              <textarea
                rows="4"
                className="w-full py-2 px-3 rounded-lg mt-1 font-recoleta border border-[#B8B8B8] focus:outline-none"
              ></textarea>
            </div>

            <p className="text-custom-purple text-sm font-recoleta mt-4">
              Tutors
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Primary Tutor
                </label>
                <select className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"></select>
              </div>

              <div className="flex flex-col">
                <label className="text-base font-airbnb links mt-2">
                  Secondary Tutor
                </label>
                <select className="w-full py-2 px-3 rounded-lg font-airbnb border border-[#B8B8B8] focus:outline-none"></select>
              </div>
            </div>

            <div className="flex gap-6 mt-20">
              <button className="py-3 px-8 rounded font-recoleta text-l text-custom-purple border-2 border-custom-purple font-bold">
                Discard Changes
              </button>
              <button className="py-3 px-12 rounded font-recoleta text-l text-white font-bold bg-custom-purple">
                Save Changes
              </button>
            </div>
          </div>
        </>
      )}

      {active === "Course Curriculum" && (
        <div className="flex space-x-4 p-4 h-screen">
          {/* Chapters Section */}
          <div className="w-1/4 border-r pr-4">
            <h3 className="text-lg font-semibold mb-2">Chapters</h3>
            <ul className="space-y-2">
              {chapters.map((chapter, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center cursor-pointer p-2 pt-4 pb-4 rounded ${
                    selectedChapter === index ? "bg-[#d7cbef]" : ""
                  }`}
                  onClick={() => setSelectedChapter(index)}
                >
                  <span>
                    {index + 1}. {chapter.title}
                  </span>
                  <div className="space-x-2 flex">
                    <EditIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditChapter(selectedChapter, index);
                      }}
                    />

                    <DeleteIcon
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteChapter(selectedChapter, index);
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100"
              onClick={handleAddChapter}
            >
              Add New Chapter
            </button>
          </div>

          <div className="w-1/4 border-r pr-4">
            <h3 className="text-lg font-semibold mb-2">Content</h3>
            {selectedChapter !== null && (
              <ul className="space-y-2">
                {chapters[selectedChapter].content.map((content, index) => (
                  <li
                    key={index}
                    className={`flex justify-between items-center cursor-pointer p-2 pt-4 pb-4 rounded ${
                      selectedContent === index ? "bg-purple-100" : ""
                    }`}
                    onClick={() => setSelectedContent(index)}
                  >
                    <span>
                      {index + 1}. {content.title}
                    </span>
                    <div className=" flex space-x-2">
                      <EditIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditContent(selectedChapter, index);
                        }}
                      />

                      <DeleteIcon
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteContent(selectedChapter, index);
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <button className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
              Add New Content
            </button>
          </div>

          <div className="w-1/2 pl-4 pr-16">
            <h3 className="text-lg font-semibold mb-2">Class Content</h3>
            {selectedContent !== null && (
              <textarea
                className="w-full h-90 border border-#B8B8B8-600 p-2 rounded focus:outline-none"
                style={{ borderColor: "#B8B8B8" }}
                value={chapters[selectedChapter].content[selectedContent].text}
                onChange={(e) =>
                  handleContentChange(e, selectedChapter, selectedContent)
                }
              />
            )}
            <div className="flex justify-end space-x-2 mt-4">
              <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-100">
                Save Draft
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                Publish
              </button>
            </div>
          </div>
        </div>
      )}

      <CreateAccount
        showCreateAccount={showCreateAccount}
        setShowCreateAccount={setShowCreateAccount}
      />
    </div>
  );
};

export default SingleCourse;
