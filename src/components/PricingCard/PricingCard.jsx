import React, { useState, useEffect } from "react";
import gym1 from "../../assets/prcimg.webp";

const pricingData = [
  {
    plan: "MONTHLY",
    old: "2500",
    price: "1899",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "3 MONTH",
    old: "6500",
    price: "5700",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "6 MONTH",
    old: "12,000",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "12 MONTH",
    old: "16,000",
    price: "14,999",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const PricingCards = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 668);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === pricingData.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section
      id={id}
      className="
        price-cards-container
        w-full
        min-h-[50rem]
        flex
        flex-col
        justify-center
        items-center
        py-10
        px-2
        relative
        mt-8
        "
    >
      {/* BG IMAGE with 87% width */}
      <div
        className="
          absolute
          top-0 left-1/2
          -translate-x-1/2
          h-full
          w-[87%]
          bg-cover
          bg-center
          rounded-none
          md:rounded-[2rem]
          z-0
        "
        style={{
          backgroundImage: `url(${gym1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay for better readability on bg image */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[87%] bg-black/30 rounded-none md:rounded-[2rem] pointer-events-none z-10" />

      {/* CONTENT BLOCK */}
      <div className="relative z-20 w-full flex flex-col items-center">
        <div className="w-[90%] text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold uppercase text-white mb-2 leading-tight">
            INSPIRED TO<br />INSPIRE YOUR BEST SELF
          </h2>
          <div className="text-base sm:text-lg md:text-[1rem] font-semibold text-white/90 tracking-wide">
            INSPIRED TO INSPIRE YOUR BEST SELF INSPIRED TO INSPIRE YOUR BEST SELFINSPIRED TO INSPIRE YOUR BEST SELF
          </div>
        </div>
        
        {/* PRICING CARDS */}
        <div className="w-full max-w-[1400px] mx-auto px-1 sm:px-4 flex justify-center mt-8">
          {/* Desktop View */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {pricingData.map((item, idx) => (
              <div
                key={idx}
                className="
                  bg-white/20
                  backdrop-blur-md
                  rounded-2xl
                  shadow-xl
                  flex
                  flex-col
                  items-center
                  px-4
                  py-8
                  sm:px-6
                  sm:py-10
                  text-center
                  border
                  border-white/30
                  min-w-0
                "
              >
                <div className="text-lg sm:text-xl font-bold mb-6 text-white">{item.plan}</div>
                <div className="relative mb-2 h-8 flex items-center justify-center w-full">
                  <span className="text-base sm:text-2xl text-white/60 font-bold line-through absolute left-1/2 -translate-x-1/2">{item.old}</span>
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">{item.price}</div>
                <div className="text-xs sm:text-sm text-white/90 mb-8">{item.desc}</div>
                <button className="bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-gray-400 transition cursor-pointer w-full sm:w-auto">
                  JOIN NOW
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="sm:hidden relative w-full max-w-md overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {pricingData.map((item, idx) => (
                <div
                  key={idx}
                  className="
                    w-full
                    flex-shrink-0
                    px-4
                    py-20
                    bg-white/20
                    backdrop-blur-md
                    rounded-2xl
                    shadow-xl
                    flex
                    flex-col
                    items-center
                    text-center
                    border
                    border-white/30
                  "
                >
                  <div className="text-xl font-bold mb-6 text-white">{item.plan}</div>
                  <div className="relative mb-2 h-15 flex items-center justify-center w-full">
                    <span className="text-2xl text-white/60 font-bold line-through absolute left-1/2 -translate-x-1/2">{item.old}</span>
                  </div>
                  <div className="text-5xl font-extrabold mb-4 text-white">{item.price}</div>
                  <div className="text-sm text-white/90 mb-8">{item.desc}</div>
                  <button className="bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-gray-400 transition cursor-pointer w-full">
                    JOIN NOW
                  </button>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {pricingData.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;