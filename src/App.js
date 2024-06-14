import "./App.css";
import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/ui/HeroSection";
import AboutSection from "./components/ui/AboutSection";
import OurGames from "./components/ui/OurGames";
import Waitlist from "./components/ui/Waitlist";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="bg-custom-image bg-cover bg-center min-h-screen font-poppins">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OurGames />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
