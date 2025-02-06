import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const CourseCard = ({ title, count, percentage, isIncreasing, data }) => {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ margin: "0 0 8px" }}>{title}</h3>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
        <div style={{ fontSize: "24px", fontWeight: "bold" }}>
          {count.toLocaleString()}
        </div>
        <div
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: isIncreasing ? "#4caf50" : "#f44336",
            display: "flex",
            alignItems: "center",
          }}
        >
          {isIncreasing ? "▲" : "▼"} {percentage}%
        </div>
      </div>
      <p style={{ fontSize: "12px", color: "#666", margin: "8px 0 16px" }}>
        compared to last week
      </p>
      <div style={{ width: "100%", height: "50px" }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fill="url(#colorUv)"
            />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseCard;
