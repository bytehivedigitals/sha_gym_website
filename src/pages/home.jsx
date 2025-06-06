import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/LandingPage/Landing";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";
import Gallery from "../components/Gallery/Gallery";
import WhatsAppButton from "../components/whatsaappbot/whatsappbot";
import PricingCards from "../components/PricingCard/PricingCard";
import PersonalTrainingPackages from "../components/PersonalTraining/personalTraining";
import MapSection from "../components/MapSection/MapSection";

const Home = () => {
  return (
    <div 
      id="home"
      className="home-container bg-amber-50"
      style={{ width: "100%", backgroundColor: "black", fontFamily: "Russo One, sans-serif" }}
      
    >
      <Navbar />
      {/* Landing Page */}
      <Landing />
      {/* About Section */}
      {/* <Strip /> */}
      <About id="about" />
      {/* Gallery Section */}
      <Gallery />
      {/* Features */}
      <Features id="features" />
      {/* Services */}
      <PricingCards id="services" />
      {/* Personal Training Packages */}
      <PersonalTrainingPackages id="personalTrainingPack"/>
      {/* Trainers Section */}
      <Trainers />
      {/* Testimonials */}
      <Testimonials />
      {/* Contact */}
      <Contact id="contact" />
      {/* Map Section */}
      <MapSection />
      {/* Footer */}
      <Footer />
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Home;
