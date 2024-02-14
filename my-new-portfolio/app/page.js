import Image from "next/image";
import HeroSection from './components/HeroSection'
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchivmentSection from "./components/AchivmentSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mx-auto px-12 py-4 mt-20">
        <HeroSection />
        <AchivmentSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
        <Footer />
    </main>
  );
}
