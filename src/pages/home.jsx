import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/LandingPage/Landing";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact2";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";
import Gallery from "../components/Gallery/Gallery";
import WhatsAppButton from "../components/whatsaappbot/whatsappbot";
import PricingCards from "../components/PricingCard/PricingCard";
import PersonalTrainingPackages from "../components/PersonalTraining/personalTraining";

const Home = () => {
  return (
    <div
      className="home-container bg-amber-50"
      style={{ width: "100%", backgroundColor: "black" }}
      
    >
      <Navbar />
      <Landing />
      <About />
      <Gallery />
      <Features />
      <PricingCards />
      <PersonalTrainingPackages />
      <Trainers />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
