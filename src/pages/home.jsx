import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/LandingPage/Landing";
import Features from "../components/Features/Features";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Services from "../components/Services/Services";

const Home = () => {
    return (
        <div className="home-container w-[100%] bg-[#0A0A0A] overflow-x-hidden">
            <Navbar/>
            <Landing />
            <About />
            <Features />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;