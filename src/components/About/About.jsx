import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import gymVideo from "../../assets/sha_loader.webm"; // Ensure the path is correct

const AboutSection = ({id}) => {
  return (
    <div id={id} className="about-container bg-black text-white py-20 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
        {/* Left Side */}
        <div className="lg:w-1/2 w-full">
          {/* Heading with horizontal line */}
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase whitespace-nowrap">
              ABOUT SHA GYM
            </h2>
            <div className="flex-grow h-[2px] bg-white ml-4"></div>
          </div>

          {/* Paragraph */}
          <p className="text-sm md:text-base text-gray-300 mt-10 leading-relaxed">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>

          {/* Social Media Icons with horizontal line */}
          <div className="flex items-center mt-16">
            <div className="flex space-x-6 text-white text-xl">
              <a href="#" className="hover:text-gray-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
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
        <div className="lg:w-1/2 w-full">
          <video
            className="w-full h-auto rounded-xl shadow-lg"
            src={gymVideo}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
