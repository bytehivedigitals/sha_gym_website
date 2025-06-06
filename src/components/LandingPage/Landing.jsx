import React, { useEffect, useState } from "react";
import hitman from "../../assets/landing-bg.webp";
import hitmanMobile from "../../assets/mob-landing-bg.webp";
import image1 from "../../assets/img1.webp";
import image2 from "../../assets/img2.webp";
import image3 from "../../assets/img3.webp";
import "./Landing.css";

const Landing = () => {
  const [count, setCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 580);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let start = 0;
    const end = 12000; // Target count for 12k
    const duration = 2500; // Animation duration (2 seconds)
    const increment = Math.ceil(end / (duration / 20));

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 10);
  }, []);

  return (
    <div className="landing-container">
      <div className={`relative bg-black text-white flex ${isMobile ? 'w-[100%] min-h-[fit-content] flex-col' : 'min-h-[100vh] justify-center'} overflow-hidden`}>
        <div className="relative w-full">
          {/* Image in the foreground - higher z-index */}
          <img
            src={isMobile ? hitmanMobile : hitman}
            alt="Hitman"
            className={`${isMobile ? 'absolute right-0 object-cover z-20 ' : 'absolute inset-0 w-full h-full object-contain z-20 translate-y-[-10%]'}`}
          />

          {/* Text in the background - lower z-index */}
          <div className={`landing-header relative z-10 flex ${isMobile ? 'text-left text-2xl ml-4' : 'justify-center text-center px-4 mt-6'}`}>
            <h1 className="font-extrabold tracking-wide leading-tight">
              {isMobile ? (
                <>
                  SCULPT <span className="text-gray-400">YOUR</span><br />
                  BODY,<br />
                  ELEVATE <br />
                  <span className="text-gray-400">YOUR</span><br />
                  SPIRIT
                </>
              ) : (
                <>
                  SCULPT <span className="text-gray-400">YOUR</span> BODY, <br />
                  ELEVATE <span className="text-gray-400">YOUR</span> SPIRIT
                </>
              )}
            </h1>
          </div>
        </div>

        {/* Rest of your code remains the same */}
        <div className={`${isMobile ? 'relative mt-16 px-4 flex flex-col' : 'absolute bottom-8 left-10'} z-30`}>
          <div className="flex items-center -space-x-4 mb-2">
            <img src={image1} className={`${isMobile ? 'w-12 h-12' : 'w-16 h-18'} rounded-full`} alt="Avatar 1" />
            <img src={image2} className={`${isMobile ? 'w-12 h-12' : 'w-16 h-18'} rounded-full border-2 border-black`} alt="Avatar 2" />
            <img src={image3} className={`${isMobile ? 'w-12 h-12' : 'w-16 h-18'} rounded-full border-2 border-black`} alt="Avatar 3" />
          </div>

          <div className={`${isMobile ? 'text-start mt-2 text-[1rem]' : 'text-[1.5rem]'} font-semibold mb-4`}>
            {count.toLocaleString()}+
            <span className="text-[1rem] md:text-[1.5rem] text-gray-400">
              {" "}
              Happy spirits
            </span>
          </div>
        </div>

        <div className={`start-button ${isMobile ? 'relative pb-8 px-4 flex mt-4' : 'absolute right-0 bottom-14'} z-30`}>
          <button 
            className={`bg-gray-200 ${isMobile ? '' : 'mr-[5rem]'} text-black text-[1.2rem] md:text-[1.5rem] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:bg-[grey] transition cursor-pointer`}
            style={{ fontFamily: "'Russo One', sans-serif" }}
            onClick={() => {
              const section = document.getElementById("services");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}>
            Let's Start &gt;&gt;&gt;
          </button>
        </div>
      </div>
      
      <div className="w-full overflow-hidden whitespace-nowrap bg-black py-5 relative z-30">
        <div
          className="animate-scrollText inline-block text-gray-500 hover:text-white font-extrabold text-[5rem] md:text-[15rem] tracking-widest"
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "scrollText 50s linear infinite",
            fontFamily: "'Russo One', sans-serif",
          }}
        >
          {Array(20).fill("24/7 GYM ").join("* ")}
        </div>
      </div>
    </div>
  );
};

export default Landing;