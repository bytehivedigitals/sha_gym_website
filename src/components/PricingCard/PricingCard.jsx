import React from "react";
import gym1 from "../../assets/gym1.webp";

const pricingData = [
  {
    plan: "MONTHLY",
    old: "2000",
    price: "1899",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "3 MONTH",
    old: "2000",
    price: "5700",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "6 MONTH",
    old: "2000",
    price: "10,000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    plan: "12 MONTH",
    old: "2000",
    price: "14,999",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const PricingCards = () => (
  <section
    className="
      w-full
      min-h-[50rem]
      flex
      flex-col
      justify-center
      items-center
      py-10
      px-2
      bg-cover
      bg-center
      rounded-none
      md:rounded-[2rem]
      relative
      "
    style={{
      backgroundImage: `url(${gym1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay for better readability on bg image */}
    <div className="absolute inset-0 bg-black/30 rounded-none md:rounded-[2rem] pointer-events-none" />
    
    {/* TEXT BLOCK */}
    <div className="relative z-10 w-full text-center mb-10">
      <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold uppercase text-white mb-2 leading-tight">
        INSPIRED TO<br />INSPIRE YOUR BEST SELF
      </h2>
      <div className="text-base sm:text-lg md:text-[1rem] font-semibold text-white/90 tracking-wide">
        INSPIRED TO INSPIRE YOUR BEST SELF INSPIRED TO INSPIRE YOUR BEST SELFINSPIRED TO INSPIRE YOUR BEST SELF
      </div>
    </div>
    
    {/* PRICING CARDS UNDER THE TEXT */}
    <div className="relative w-full max-w-[1400px] mx-auto px-1 sm:px-4 z-10 flex justify-center">
      {/* Responsive grid: 1 col on mobile, 2 on sm/md, 4 on lg+ */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        md:gap-8
        w-full
      ">
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
            data-aos="zoom-in"
            data-aos-delay={100 * (idx + 1)}
          >
            <div className="text-lg sm:text-xl font-bold mb-2 text-white">{item.plan}</div>
            <div className="relative mb-2 h-8 flex items-center justify-center w-full">
              <span className="text-base sm:text-2xl text-white/60 font-bold line-through absolute left-1/2 -translate-x-1/2">{item.old}</span>
              {/* Decorative strike-through line */}
              <svg
                viewBox="0 0 80 20"
                className="absolute left-1/2 -translate-x-1/2"
                width={60}
                height={16}
                style={{ zIndex: 2, pointerEvents: "none" }}
              >
                <line x1="5" y1="15" x2="55" y2="5" stroke="white" strokeWidth="3" strokeDasharray="4 2" />
              </svg>
            </div>
            <div className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">{item.price}</div>
            <div className="text-xs sm:text-sm text-white/90 mb-8">{item.desc}</div>
            <button className="bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-gray-400 transition cursor-pointer w-full sm:w-auto">
              JOIN NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingCards;