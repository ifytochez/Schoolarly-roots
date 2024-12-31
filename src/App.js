import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/SideBar/sidebar";
import DashboardPage from "./pages/Dashboard/dashboard";
import ClassesPage from "./pages/Classes/classes";
import HomeworkPage from "./pages/Homework/homework";
import SchedulePage from "./pages/Schedule/schedule";
import ReportsPage from "./pages/Report/report";
import SettingsPage from "./pages/Settings/settings";

const App = () => {
  return (
    <Router>
      {" "}
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
