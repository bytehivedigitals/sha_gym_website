import React, { useState, useEffect, useRef } from "react";
import gym1 from "../../assets/prcimg.webp";

const pricingData = [
  {
    plan: "MONTHLY",
    old: "2399",
    price: "1899",
    desc: [
      "Unlimited 24/7 gym access",
      "Full access to group fitness classes",
      "Use of all amenities",
      "Ideal for testing out SHA before a long-term commitment",
    ],
  },
  {
    plan: "3 MONTH",
    old: "6500",
    price: "5700",
    desc: [
      "1 Extra Month Free",
      "4 months of access for the price of 3",
      "Priority access to group classes",
      "Monthly progress assessments",
      "24/7 unlimited access",
    ],
  },
  {
    plan: "6 MONTH",
    old: "11,994",
    price: "10,000",
    desc: [
      "Full facility access for 6 months",
      "Complimentary wellness consultation",
      "Goal-specific training guidance",
    ],
  },
  {
    plan: "12 MONTH",
    old: "22,788",
    price: "14,999",
    desc: [
      "Huge savings on annual rates",
      "Priority booking for trainers & classes",
      "Seasonal wellness events access",
      "Ideal for residents & regulars in Kozhikode",
    ],
  },
];

const PricingCards = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const scrollSpeed = 50; // pixels per second

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile || !carouselRef.current) return;

    const carousel = carouselRef.current;
    const carouselContent = carousel.firstChild;
    let position = 0;
    let lastTimestamp = 0;

    // Clone all cards and append them to create infinite loop
    const clonedCards = Array.from(carouselContent.children).map(child => child.cloneNode(true));
    carouselContent.append(...clonedCards);

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      position += (scrollSpeed * delta) / 1000;
      
      // Reset position when scrolled all cloned cards
      if (position >= carouselContent.scrollWidth / 2) {
        position = 0;
      }
      
      carousel.scrollLeft = position;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
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
          {/* Desktop View - Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {pricingData.map((item, idx) => (
              <div
                key={idx}
                className={`
                  relative
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
                  ${(idx + 1) % 2 === 0 ? 'top-[-5%]' : 'top-0'}
                  hover:scale-105
                  transition-transform
                  duration-300 
                  ease-in-out
                `}
              >
                <div className="flex-1 w-full flex flex-col items-center">
                  <div className="text-lg sm:text-xl font-extrabold mb-6 text-white">{item.plan}</div>
                  <div className="relative mb-2 h-8 flex items-center justify-center w-full">
                    <span className="text-base sm:text-2xl text-white/60 font-bold line-through absolute left-1/2 -translate-x-1/2">₹{item.old}</span>
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">₹{item.price}</div>
                  <div className="mt-5">
                    <ul className="text-xs sm:text-base text-white/90 mb-8 text-center list-inside space-y-3">
                      {item.desc.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="absolute bottom-4 bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-red-500 hover:text-white transition cursor-pointer w-full sm:w-auto">
                  JOIN NOW
                </button>
              </div>
            ))}
          </div>

          {/* Mobile View - Horizontal Scrolling Carousel */}
          <div className="md:hidden w-full overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide py-4"
              style={{ scrollBehavior: 'auto', scrollSnapType: 'x mandatory' }}
            >
              <div className="flex space-x-6 px-4">
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
                      px-6
                      py-8
                      text-center
                      border
                      border-white/30
                      min-w-[85vw]
                      flex-shrink-0
                      scroll-snap-align-start
                    "
                  >
                    <div className="flex-1 w-full flex flex-col items-center">
                      <div className="text-xl font-extrabold mb-6 text-white">{item.plan}</div>
                      <div className="relative mb-2 h-8 flex items-center justify-center w-full">
                        <span className="text-2xl text-white/60 font-bold line-through">₹{item.old}</span>
                      </div>
                      <div className="text-4xl font-extrabold mb-6 text-white">₹{item.price}</div>
                      <div className="mt-3 w-full">
                        <ul className="text-sm text-white/90 mb-8 text-center space-y-3">
                          {item.desc.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <button className="bg-white text-black font-semibold rounded-lg px-5 py-3 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer w-full">
                      JOIN NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;