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

const App = () => {
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  const storedUserType = localStorage.getItem("userType");
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoginStatus === "true");
  const [isAdmin, setIsAdmin] = useState(storedUserType === "admin");

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn") === "true";
    const storedUserType = localStorage.getItem("userType") === "admin";
    setIsLoggedIn(storedLoginStatus);
    setIsAdmin(storedUserType);
  }, []);

  return (
    <Router>
      <AppContent
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />
    </Router>
  );
};

const AppContent = ({ isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin }) => {
  const location = useLocation();
  const isSidebarVisible =
    isLoggedIn &&
    location.pathname !== "/" &&
    location.pathname !== "/selectUserLogin";

  return (
    <div className="flex min-h-screen">
      {isSidebarVisible && (isAdmin ? <AdminSidebar /> : <Sidebar />)}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage setIsAdmin={setIsAdmin} />} />
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
            </>
          )}

          {isLoggedIn && !isAdmin && (
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
        </Routes>
      </div>
    </div>
  );
};

export default App;
