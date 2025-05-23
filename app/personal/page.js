import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";

export default function projects() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ProjectsSection />
      </div>
    </main>
  );
}
