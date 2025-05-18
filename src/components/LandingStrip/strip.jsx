import React from 'react';

const marqueeText =
  "24*7 TRAINERS ›› LIVE CONSULTANCY ›› 20+ TRAINERS ›› FREE TRIALS ›› ";

const Strip = () => {
  // Repeat the text enough times to ensure seamless looping
  const repeatedText = marqueeText.repeat(8);

  return (
    <div className="relative w-full bg-black overflow-hidden flex items-center justify-center h-[8rem] sm:h-[10rem] md:h-[13rem] lg:h-[16rem]">
      {/* Background static marquee */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="font-extrabold whitespace-nowrap select-none leading-none">
          <span className="text-[#202020] text-[5rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[23rem]">24*7GYM</span>
        </h1>
      </div>
      
      {/* Foreground white bar with looping marquee text */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 w-full flex items-center bg-white/95 overflow-hidden shadow-lg h-[2.6rem] sm:h-[3.3rem] md:h-[2rem]">
        <div className="flex animate-marquee-loop whitespace-nowrap">
          <span className="text-black font-bold px-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            {repeatedText}
          </span>
          <span className="text-black font-bold px-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            {repeatedText}
          </span>
        </div>
      </div>
      
      {/* Custom CSS for seamless looping marquee */}
      <style>
        {`
          @keyframes marquee-loop {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-loop {
            animation: marquee-loop 20s linear infinite;
            display: flex;
            width: 200%;
          }
        `}
      </style>
    </div>
  );
};

export default Strip;