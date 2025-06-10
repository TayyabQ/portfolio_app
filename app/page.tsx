import Contact from "@/app/_components/Contact";
import Footer from "@/app/_components/Footer";
import HeroSection from "@/app/_components/HeroSection";
import Navbar from "@/app/_components/Navbar";
import Portfolio from "@/app/_components/Portfolio";
import Services from "@/app/_components/Services";
import Testimonials from "@/app/_components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar/>
      <HeroSection/>
      <Services/>
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-800">
        
      </div>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}