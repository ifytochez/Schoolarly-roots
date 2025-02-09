import React from "react";
import { Line } from "react-chartjs-2";
import ArrowUp from "../../../assets/icons/arrowup"
import ArrowDown from "../../../assets/icons/arrowDown"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const stats = [
  { title: "Active Students", value: 3728, change: 16, up: true, data: [10, 20, 40, 60, 80, 100] },
  { title: "Total Courses", value: 96, change: 4, up: true, data: [5, 15, 30, 45, 60, 80] },
  { title: "Total Classes", value: 224, change: 14, up: false, data: [90, 80, 70, 50, 30, 20] },
  { title: "Total Students", value: 4216, change: 27, up: false, data: [100, 90, 70, 50, 40, 30] },
  { title: "Total Parents", value: 2844, change: 28, up: true, data: [10, 30, 50, 70, 90, 110] },
  { title: "Total Tutors", value: 187, change: 8, up: true, data: [15, 25, 35, 55, 75, 95] },
];

const AdminDashboardStats = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white rounded-lg shadow-md">
      {stats.map((stat, index) => (
        <div key={index} className="p-5 bg-white rounded-xl shadow-md border border-gray-200">
          <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-3xl font-semibold text-gray-900">{stat.value.toLocaleString()}</p>
            <span
              className={`flex items-center text-sm font-medium ${
                stat.up ? "text-purple-600" : "text-red-600"
              }`}
            >
              {stat.up ? <ArrowUp size={16} /> : <ArrowDown size={16} />} {stat.change}%
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">compared to last week</p>
          <div className="h-16 mt-2">
            <Line
              data={{
                labels: ["", "", "", "", "", ""],
                datasets: [
                  {
                    data: stat.data,
                    borderColor: stat.up ? "#8B5CF6" : "#EF4444",
                    backgroundColor: "transparent",
                    borderWidth: 3,
                    tension: 0.5,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                elements: { point: { radius: 2 } },
                scales: { x: { display: false }, y: { display: false } },
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboardStats;