import React from 'react';

const marqueeText = 
  "24*7 TRAINERS ›› LIVE CONSULTANCY ›› 20+ TRAINERS ›› FREE TRIALS ›› ";

const Strip = () => {
  const repeatedText = marqueeText.repeat(8);

  return (
    <div className="relative w-full bg-black overflow-hidden flex items-center justify-center h-[8rem] sm:h-[10rem] md:h-[13rem] lg:h-[18rem]">
      {/* Background static marquee */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="font-extrabold whitespace-nowrap select-none leading-none">
          <span className="text-[#202020] text-[5rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[23rem]">
            24*7GYM
          </span>
        </h1>
      </div>

      {/* Diagonal Marquee Container */}
      <div className="absolute inset-0 overflow-hidden z-10 ">
        <div className="w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 rotate-[8deg] origin-center">
          <div className="flex animate-marquee-diagonal whitespace-nowrap h-full items-center">
            <span className="text-black font-bold px-4 text-lg sm:text-2xl md:text-3xl lg:text-3xl bg-white">
              {repeatedText}
            </span>
            <span className="text-black font-bold px-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl">
              {repeatedText}
            </span>
          </div>
        </div>
      </div>

      {/* Custom CSS for diagonal marquee */}
      <style>
        {`
          @keyframes marquee-diagonal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-diagonal {
            animation: marquee-diagonal 20s linear infinite;
            display: flex;
            width: 200%;
          }
        `}
      </style>
    </div>
  );
};

export default Strip;