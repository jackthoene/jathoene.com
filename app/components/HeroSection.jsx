"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const SensorSection = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const raw = path.split("/sensor/")[1];
    if (!raw) return;

    const nums = raw.split(",").map(parseFloat);
    const data = [];
    for (let i = 0; i < nums.length; i += 2) {
      data.push({ x: nums[i], y: nums[i + 1] });
    }

    setChartData({
      datasets: [
        {
          label: "Sensor Data",
          data: data,
          fill: false,
          borderColor: "#4fd1c5",
          backgroundColor: "#4fd1c5",
          tension: 0.3,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "nearest", intersect: false },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (s)",
          color: "#ccc",
        },
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
      y: {
        title: {
          display: true,
          text: "Voltage (V)",
          color: "#ccc",
        },
        min: 0,
        max: 3.5,
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
    },
  };

  return (
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sensor Plot from URL
        </h2>
        {chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <p className="text-center text-gray-400">No sensor data found in URL.</p>
        )}
      </div>
    </section>
  );
};

export default SensorSection;
