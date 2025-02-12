import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./pages/Student/SideBar/sidebar";
import AdminSidebar from "./pages/Admin/Sidebar/AdminSidebar";
import DashboardPage from "./pages/Student/Dashboard/dashboard";
import AdminDashboard from "./pages/Admin/Dashboard/adminDashboard";
import ClassesPage from "./pages/Student/Classes/classes";
import HomeworkPage from "./pages/Student/Homework/homework";
import SchedulePage from "./pages/Student/Schedule/schedule";
import ReportsPage from "./pages/Student/Report/report";
import SettingsPage from "./pages/Student/Settings/settings";
import LandingPage from "./components/LandingPage/landingPage";
import SelectUserLogin from "./components/SelectUserLogin/selectUserLogin";
import CourseDetails from "./pages/Student/CourseDetails/courseDetails";
import Account from "./pages/Admin/Account/Account";
import AdminClasses from "./pages/Admin/Classes/adminClass";
import CoursePage from "./pages/Admin/Courses/courses";
import AdminReports from "./pages/Admin/Reports/adminReports";
import AdminSettings from "./pages/Admin/Settings/adminSettings";
import Finances from "./pages/Admin/Finances/finances";
import SingleCourse from "./pages/Admin/SingleCourse/singleCourse";
import Parent from "./pages/Admin/Parent/parent";
import Student from "./pages/Admin/Student/student";
import Tutor from "./pages/Admin/Tutor/tutor";
import TutorDashboard from "./pages/Tutor/TutorDashboard/tutorDashboard";
import TutorClasses from "./pages/Tutor/TutorClasses/tutorClasses";
import TutorSidebar from "./pages/Tutor/TutorSidebar/tutorSidebar";
import TutorCourses from "./pages/Tutor/TutorCourses/tutorCourses";
import TutorHomework from "./pages/Tutor/TutorHomework/tutorHomework";
import TutorSchedule from "./pages/Tutor/TutorSchedule/tutorSchedule";
import TutorSetting from "./pages/Tutor/TutorSetting/tutorSetting";
import TutorReport from "./pages/Tutor/TutorReport/tutorReport";
import TutorPayout from "./pages/Tutor/TutorPayout/tutorPayout";

const App = () => {
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  const storedUserType = localStorage.getItem("userType");
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoginStatus === "true");
  const [isAdmin, setIsAdmin] = useState(storedUserType === "admin");
  const [isStudent, setIsStudent] = useState(storedUserType === "student");
  const [isTutor, setIsTutor] = useState(storedUserType === "tutor");

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUserType = localStorage.getItem("userType");

    setIsLoggedIn(storedLoginStatus);
    setIsAdmin(storedUserType === "admin");
    setIsStudent(storedUserType === "student");
    setIsTutor(storedUserType === "tutor");
  }, []);

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        isStudent={isStudent}
        setIsStudent={setIsStudent}
        isTutor={isTutor}
        setIsTutor={setIsTutor}
      />
    </Router>
  );
};

const AppContent = ({
  isLoggedIn,
  setIsLoggedIn,
  isAdmin,
  setIsAdmin,
  isStudent,
  setIsStudent,
  isTutor,
  setIsTutor
}) => {
  const location = useLocation();
  const isSidebarVisible =
    isLoggedIn &&
    location.pathname !== "/" &&
    location.pathname !== "/selectUserLogin";

  return (
    <div className="flex min-h-screen">
      {isSidebarVisible &&
        (isAdmin ? (
          <AdminSidebar />
        ) : isStudent ? (
          <Sidebar />
        ) : isTutor ? (
          <TutorSidebar /> 
        ) : null)}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage setIsAdmin={setIsAdmin} setIsStudent={setIsStudent} setIsTutor={setIsTutor} />} />
          <Route
            path="/selectUserLogin"
            element={<SelectUserLogin setIsLoggedIn={setIsLoggedIn} />}
          />

          {isLoggedIn && isAdmin && (
            <>
              <Route path="/adminDashboard" element={<AdminDashboard />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/adminClass" element={<AdminClasses />} />
              <Route path="/courses" element={<CoursePage />} />
              <Route path="/adminReports" element={<AdminReports />} />
              <Route path="/adminSettings" element={<AdminSettings />} />
              <Route path="/finances" element={<Finances />} />
              <Route path="/singleCourse" element={<SingleCourse />} />
              <Route path="/parent" element={<Parent />} />
              <Route path="/student" element={<Student />} />
              <Route path="/tutor" element={<Tutor />} />
            </>
          )}

          {isLoggedIn && isStudent && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/classes" element={<ClassesPage />} />
              <Route path="/homework" element={<HomeworkPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/courseDetails" element={<CourseDetails />} />
            </>
          )}

          {isLoggedIn && isTutor && (
            <>
              <Route path="/tutorDashboard" element={<TutorDashboard />} />
              <Route path="/tutorClasses" element={<TutorClasses />} />
              <Route path="/tutorCourses" element={<TutorCourses />} />
              <Route path="/tutorSchedule" element={<TutorSchedule />} />
              <Route path="/tutorHomework" element={<TutorHomework />} />
              <Route path="/tutorSetting" element={<TutorSetting />} />
              <Route path="/tutorReport" element={<TutorReport />} />
              <Route path="/tutorPayout" element={<TutorPayout />} />
            
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
