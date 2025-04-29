"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../components/Navbar";
import SensorSection from "../components/SensorSection";
import WorkSection from "../components/WorkSection";

function SensorContent() {
  const searchParams = useSearchParams();
  const dataParam = searchParams.get("d");
  return dataParam ? <SensorSection /> : <WorkSection />;
}

export default function SensorPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Suspense fallback={<p className="text-white">Loading...</p>}>
          <SensorContent />
        </Suspense>
      </div>
    </main>
  );
}
