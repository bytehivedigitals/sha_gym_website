import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import gymVideo from "../../assets/Sha-about-video.webm";
import fallbackgymVideo from "../../assets/Sha-about-video.mp4";

const AboutSection = ({id}) => {
  return (
    <div id={id} className="about-container bg-black text-white py-20 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full order-2 lg:order-1">
          {/* Heading with horizontal line */}
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase whitespace-nowrap">
              ABOUT SHA GYM
            </h2>
            <div className="flex-grow h-[2px] bg-white ml-4"></div>
          </div>

          {/* Paragraph */}
          <h2 className="text-2xl mt-10 font-bold text-gray-500">Your 24/7 Fitness Destination in Kozhikode, Kerala</h2>
          <p className="text-xl text-gray-300 mt-10 leading-relaxed">
            At SHA Health Studio, we believe fitness should revolve around your schedule. As Kozhikode’s Leading 24/7 gym, we offer an ultra-modern fitness environment that’s open round the clock—because your health never sleeps.
          </p>
          <p className="text-xl text-gray-300 mt-10 leading-relaxed">
            Whether you’re an early bird, a night owl, or someone with a packed calendar, SHA ensures that top-tier equipment, expert trainers, and a supportive community are always within reach. Step into a space built for transformation, motivation, and results.
          </p>

          {/* Social Media Icons with horizontal line */}
          <div className="flex items-center mt-16">
            <div className="flex space-x-6 text-white text-xl">
              <a href="#" className="hover:text-gray-400 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/shahealthstudio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-gray-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaYoutube />
              </a>
            </div>
            <div className="flex-grow h-[2px] bg-white ml-4"></div>
          </div>
        </div>

        {/* Right Side - Video */}
        <div className="lg:w-1/2 w-full order-1 lg:order-2">
          <video
            className="w-full h-auto rounded shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={gymVideo} type="video/webm" />
            <source src={fallbackgymVideo} type="video/mp4" />
            <p>Your browser does not support the video tag.</p>
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
