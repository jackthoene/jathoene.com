"use client";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import SensorSection from "../components/SensorSection";
import WorkSection from "../components/WorkSection";

export default function SensorPage() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("d");

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        {dataParam ? <SensorSection /> : <WorkSection />}
      </div>
    </main>
  );
}
