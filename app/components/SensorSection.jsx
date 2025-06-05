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
  const [startHour, setStartHour] = useState(null);
  const [endHour, setEndHour] = useState(null);

  useEffect(() => {
    const raw = decodeURIComponent(searchParams.get("d") ?? "");

    if (!raw) {
      setLoading(false);
      return;
    }

    try {
      const nums = JSON.parse(raw);
      if (!Array.isArray(nums) || nums.length % 2 !== 0) {
        throw new Error("Expected 48 (x, y) pairs (96 values total)");
      }

      const data = [];
      for (let i = 0; i < nums.length; i += 2) {
        const x = parseFloat(nums[i]);
        const y = parseFloat(nums[i + 1]);
        if (Number.isFinite(x) && Number.isFinite(y)) {
          data.push({ x, y });
        }
      }

      if (data.length > 0) {
        setStartHour(data[0].x);
        setEndHour(data[data.length - 1].x);
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
        title: { display: true, text: "Time (hh:mm)", color: "#ccc" },
        ticks: {
          color: "#ccc",
          callback: function (val) {
            const hour = Math.floor(val) % 24;
            const day = Math.floor(val / 24) - 2;
            return `D${day} ${hour.toString().padStart(2, "0")}:00`;
          },
        },
        grid: { color: "#333" },
      },
      y: {
        title: { display: true, text: "Voltage (V)", color: "#ccc" },
        ticks: { color: "#ccc" },
        grid: { color: "#333" },
      },
    },
  };

  return (
    <section className="w-full py-10 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Sensor Data: {startHour}–{endHour} Hours (Midnight D-2 → Midnight D0)
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
