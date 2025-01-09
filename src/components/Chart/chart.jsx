import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ reportType }) => {
  // Define chart data based on the reportType
  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: reportType === "study-hours" ? "Study Hours" : "Test Scores",
        data:
          reportType === "study-hours"
            ? [2, 4, 6, 4, 5, 8, 6, 6, 0, 0, 0, 0]
            : [75, 80, 85, 90, 88, 92, 89, 90, 0, 0, 0, 0],
        backgroundColor: "#FFA500",
        borderRadius: 8, // Rounded bars
        barPercentage: 0.5, // Adjust bar width
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend if not necessary
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
      },
      y: {
        beginAtZero: true,
        max: 8, // Ensure the y-axis ends at 8h
        ticks: {
          stepSize: 2, // Steps of 2h
          callback: (value) => `${value}h`, // Add "h" to y-axis labels
        },
        grid: {
          color: "#E0E0E0", // Light gray color for dotted lines
          borderDash: [4, 4], // Dotted horizontal grid lines
          drawBorder: false, // Remove the y-axis border
          lineWidth: 1, // Line width for the grid lines
        },
      },
    },
  };

  return (
    <div style={{ height: "250px", margin: "0 auto", padding: "20px" }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;
