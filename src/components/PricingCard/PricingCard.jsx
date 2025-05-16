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
    className="w-[89%] h-[45rem] flex justify-center items-center py-20 bg-cover bg-center ml-[6rem] rounded-[2rem]"
    style={{ backgroundImage: `url(${gym1})` }}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4rem] w-full max-w-7xl px-4">
      {pricingData.map((item, idx) => (
        <div
          key={idx}
          className="bg-white/20 backdrop-blur-md rounded-3xl shadow-xl flex flex-col items-center px-8 py-10 text-center border border-white/30"
          data-aos="zoom-in"
          data-aos-delay={100 * (idx + 1)}
        >
          <div className="text-xl font-bold mb-2">{item.plan}</div>
          <div className="relative mb-2 h-10 flex items-center justify-center">
            <span className="text-2xl text-white/60 font-bold line-through absolute left-1/2 -translate-x-1/2">{item.old}</span>
            {/* Decorative strike-through line */}
            <svg viewBox="0 0 80 20" className="absolute left-1/2 -translate-x-1/2" width={80} height={20} style={{zIndex:2, pointerEvents: 'none'}}>
              <line x1="5" y1="15" x2="75" y2="5" stroke="white" strokeWidth="3" strokeDasharray="4 2"/>
            </svg>
          </div>
          <div className="text-5xl font-extrabold mb-4">{item.price}</div>
          <div className="text-sm text-white/80 mb-8">{item.desc}</div>
          <button className="bg-white text-black font-semibold rounded-lg px-6 py-2 shadow hover:bg-gray-400 transition cursor-pointer">JOIN NOW</button>
        </div>
      ))}
    </div>
  </section>
);

export default PricingCards;