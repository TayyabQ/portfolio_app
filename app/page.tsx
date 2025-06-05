import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-800">

      </div>
      <Portfolio/>
    </div>
  );
}