"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = searchParams.get("d");
    if (!raw) {
      setLoading(false);
      return;
    }

    try {
      const nums = JSON.parse(raw);
      const data = [];
      for (let i = 0; i < nums.length; i += 2) {
        data.push({ x: nums[i], y: nums[i + 1] });
      }

      setChartData({
        datasets: [
          {
            label: "Sensor Data",
            data,
            borderColor: "#4fd1c5",
            backgroundColor: "#4fd1c5",
            tension: 0.3,
          },
        ],
      });
    } catch (e) {
      console.error("Invalid data format", e);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        type: "linear",
        title: { display: true, text: "Time (s)", color: "#ccc" },
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
      y: {
        title: { display: true, text: "Voltage (V)", color: "#ccc" },
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
        // removed min: 0, max: 3.5 to allow auto-scaling
      },
    },
  };
  

  return (
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Sensor Plot
        </h2>
        {loading ? (
          <p className="text-center text-gray-400 animate-pulse">Loading plot...</p>
        ) : chartData ? (
          <Line data={chartData} options={options} />
        ) : (
          <p className="text-center text-gray-400">No valid sensor data provided.</p>
        )}
      </div>
    </section>
  );
};

export default SensorSection;
