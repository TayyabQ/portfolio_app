import Contact from "@/app/(components)/contact/page";
import Footer from "@/app/(components)/footer/page";
import HeroSection from "@/app/(components)/herosection/page";
import Navbar from "@/app/(components)/navbar/page";
import Portfolio from "@/app/(components)/portfolio/page";
import Services from "@/app/(components)/services/page";
import Testimonials from "@/app/(components)/testimonials/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar/>
      <HeroSection/>
      <div id="services">
        <Services/>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-400 to-blue-800"></div>
      <div id="portfolio">
      <Portfolio/>
      </div>
      <div id="testimonials">
      <Testimonials/>
      </div>
      <div id="contact">
      <Contact/>
      </div>
      <Footer/>
    </div>
  );
}