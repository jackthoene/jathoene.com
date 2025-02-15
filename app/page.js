import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {/* Navbar */}
      <Navbar />

      {/* HeroSection without container */}
      <div className="flex-grow">
        <HeroSection />
      </div>
    </main>
  );
}
