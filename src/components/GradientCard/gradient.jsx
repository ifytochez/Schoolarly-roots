import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement);

const CardComponent = ({ title, count, percentage, isPositive, chartData }) => {
  return (
    <div
      style={{
        border: "1px solid #E0E0E0",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "300px",
      }}
    >
      <h4 style={{ margin: "0", fontSize: "16px", color: "#333" }}>{title}</h4>
      <div
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          margin: "8px 0",
          color: "#333",
        }}
      >
        {count}
        <span
          style={{
            marginLeft: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            color: isPositive ? "#6200EE" : "#F44336",
          }}
        >
          {isPositive ? "↑" : "↓"} {Math.abs(percentage)}%
        </span>
      </div>
      <p style={{ margin: "0", fontSize: "12px", color: "#666" }}>
        compared to last week
      </p>
      <div style={{ height: "100px", marginTop: "16px" }}>
        <Line
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.data,
                borderColor: isPositive ? "#6200EE" : "#F44336",
                backgroundColor: isPositive
                  ? "rgba(98, 0, 238, 0.2)"
                  : "rgba(244, 67, 54, 0.2)",
                fill: true,
                tension: 0.4,
                borderWidth: 2,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            elements: { point: { radius: 0 } },
            scales: { x: { display: false }, y: { display: false } },
          }}
        />
      </div>
    </div>
  );
};

export default CardComponent;
