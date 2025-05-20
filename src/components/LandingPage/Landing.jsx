import React, { useEffect, useState } from "react";
import hitman from "../../assets/dd.webp";
import clock from "../../assets/warthw.webp";
import poss from "../../assets/walsk.webp";
import fire from "../../assets/thee.webp";
import dumpel from "../../assets/db.webp";
import image1 from "../../assets/img1.webp";
import image2 from "../../assets/img2.webp";
import image3 from "../../assets/img3.webp";

const Landing = () => {
  const [count, setCount] = useState(0);

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
    <div className="landing-container relative bg-black text-white min-h-screen flex justify-center overflow-hidden">
      {/* Text in the background */}
      <div className="absolute inset-0 z-0 flex justify-center text-center px-4 mt-6">
        <h1 className="!text-[4rem] md:!text-[5rem] lg:!text-[6rem] font-extrabold tracking-wide leading-tight">
          SCULPT <span className="text-gray-400">YOUR</span> BODY, <br />
          ELEVATE <span className="text-gray-400">YOUR</span> SPIRIT
        </h1>
      </div>

      {/* Image in the foreground, on top of the text */}
      <img
        src={hitman}
        alt="Hitman"
        className="absolute inset-0 w-full h-full object-cover z-20 mt-[-3rem] md:!h-[50rem] lg:!h-[55rem]"
      />

      {/* Fitness Stats */}
      <div className="flex justify-center items-center gap-6 mb-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1st Stat */}
          <div className="bg-gray-700 p-4 rounded-lg w-[5.5rem] h-[6.563rem] mt-[8rem] md:mt-[10rem] ml-[2rem] md:ml-[6rem]">
            <img
              src={clock}
              alt="Clock Icon"
              className="w-[6rem] h-8 ml-[-0.300rem]"
            />
            <div className="text-sm text-gray-400">HOURS</div>
            <div className="text-xl font-bold ml-[0.500rem]">1.5</div>
          </div>

          {/* 2nd Stat */}
          <div className="bg-gray-700 p-4 rounded-lg w-[5.5rem] h-[6.563rem] ml-[2rem] md:ml-[8rem] mt-[8rem] md:mt-[10rem]">
            <img
              src={poss}
              alt="Pose Icon"
              className="w-[6rem] h-8 ml-[-0.300rem]"
            />
            <div className="text-sm text-gray-400 ml-[0.300rem]">POSES</div>
            <div className="text-xl font-bold ml-[1rem]">20</div>
          </div>

          {/* 3rd Stat */}
          <div className="bg-gray-700 p-4 rounded-lg w-[5.5rem] h-[6.563rem] ml-[2rem] md:ml-[4rem] mt-[12rem] md:mt-[14rem]">
            <img
              src={fire}
              alt="Fire Icon"
              className="w-[8rem] h-10 ml-[-0.300rem] mt-[-0.500rem]"
            />
            <div className="text-sm text-gray-400 ml-[0.500rem]">KCAL</div>
            <div className="text-xl font-bold ml-[0.500rem]">550</div>
          </div>

          {/* 4th Stat */}
          <div className="bg-gray-700 p-4 rounded-lg w-[5.5rem] h-[6.563rem] ml-[2rem] md:ml-[10rem] mt-[12rem] md:mt-[13rem]">
            <img
              src={dumpel}
              alt="Dumbbell Icon"
              className="w-[6rem] h-8 ml-[-0.300rem]"
            />
            <div className="text-sm text-gray-400 ml-[0.500rem]">SETS</div>
            <div className="text-xl font-bold ml-[1rem]">5</div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-8 left-10 z-20">
        <div className="flex items-center -space-x-4 mb-2">
          <img src={image1} className="w-16 h-18 rounded-full" />
          <img src={image2} className="w-16 h-18 rounded-full border-2 border-black" />
          <img src={image3} className="w-16 h-18 rounded-full border-2 border-black" />
        </div>

        {/* Number Transition */}
        <div className="text-[1.5rem] font-semibold mb-4">
          {count.toLocaleString()}+
          <span className="text-[1rem] md:text-[1.5rem] text-gray-400 ">
            {" "}
            Happy spirits
          </span>
        </div>
      </div>

      <div className="absolute right-0 bottom-14 z-40">
        <button className="bg-[grey] mr-[5rem]  text-black text-[1rem] md:text-[1.5rem] font-bold px-6 md:px-8 py-3 md:py-4 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer"
          onClick={() => {
            const section = document.getElementById("personalTrainingPack");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}>
          Let's Start &gt;&gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Landing;
