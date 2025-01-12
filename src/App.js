import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar";
import DashboardPage from "./pages/Dashboard/dashboard";
import ClassesPage from "./pages/Classes/classes";
import HomeworkPage from "./pages/Homework/homework";
import SchedulePage from "./pages/Schedule/schedule";
import ReportsPage from "./pages/Report/report";
import SettingsPage from "./pages/Settings/settings";
import LandingPage from "./components/LandingPage/landingPage";
import SelectUserLogin from "./components/SelectUserLogin/selectUserLogin";
import CourseDetails from "./pages/CourseDetails/courseDetails";

const App = () => {
  const storedLoginStatus = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState(storedLoginStatus === "true");

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
};

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const isSidebarVisible =
    isLoggedIn &&
    location.pathname !== "/" &&
    location.pathname !== "/selectUserLogin";

  return (
    <div className="flex min-h-screen">
      {isSidebarVisible && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/selectUserLogin"
            element={<SelectUserLogin setIsLoggedIn={setIsLoggedIn} />}
          />

          {isLoggedIn && (
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
