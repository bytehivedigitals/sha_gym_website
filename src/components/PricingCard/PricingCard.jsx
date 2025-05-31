import React, { useState, useEffect, useRef } from "react";
import gym1 from "../../assets/prcimg.webp";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
      "1 Extra Month Free",
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
      "2 Extra Month Free",
      "Huge savings on annual rates",
      "Priority booking for trainers & classes",
      "Seasonal wellness events access",
      "Ideal for residents & regulars in Kozhikode",
    ],
  },
];

const PricingCards = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      if (!isAutoScrolling) {
        const nextIndex = currentIndex === pricingData.length - 1 ? 0 : currentIndex + 1;
        scrollToCard(nextIndex);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, currentIndex, isAutoScrolling]);

  const scrollToCard = (index) => {
    setIsAutoScrolling(true);
    setCurrentIndex(index);
    if (containerRef.current && cardRefs.current[index]) {
      const container = containerRef.current;
      const card = cardRefs.current[index];
      const containerWidth = container.offsetWidth;
      const cardWidth = card.offsetWidth;
      const scrollPosition = card.offsetLeft - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    setTimeout(() => setIsAutoScrolling(false), 1000);
  };

  const handleScroll = () => {
    if (!containerRef.current || isAutoScrolling) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft + (container.offsetWidth / 2);
    
    pricingData.forEach((_, index) => {
      const card = cardRefs.current[index];
      if (card && scrollPosition >= card.offsetLeft && scrollPosition < card.offsetLeft + card.offsetWidth) {
        setCurrentIndex(index);
      }
    });
  };

  const handleJoinNow = (plan) => {
   
    const whatsappNumber = '917994237316';
    
    // Find the selected plan
    const selectedPlan = pricingData.find(item => item.plan === plan);
    
    // Create detailed message
    const message = `Hello SHA Fitness Team,\n\nI'm interested in the *${plan}* membership plan:\n\n• Plan: ${plan}\n• Original Price: ₹${selectedPlan.old}\n• Discounted Price: ₹${selectedPlan.price}\n\nKey Features:\n${selectedPlan.desc.map(item => `✓ ${item}`).join('\n')}\n\nPlease provide:\n1. Registration details\n2. Payment options\n3. Available slots\n\nThank you!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id={id}
      className="price-cards-container w-full min-h-[50rem] flex flex-col justify-center items-center py-10 px-2 relative mt-8"
    >
      {/* Background Image */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[87%] bg-cover bg-center rounded-none md:rounded-[2rem] z-0"
        style={{ 
          backgroundImage: `url(${gym1})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }} 
      />
      
      {/* Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[87%] bg-black/30 rounded-none md:rounded-[2rem] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        <div className="w-[90%] text-center mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-[4rem] font-extrabold uppercase text-white mb-2 leading-tight"
           style={{ fontFamily: "'Russo One', sans-serif" }}>
            CHOOSE YOUR JOURNEY<br />TRANSFORM YOUR LIFE
          </h2>
          <div className="text-base uppercase sm:text-lg md:text-[1rem] font-semibold text-white/90 tracking-wide">
            Flexible plans. Full access. Real results — find the membership that moves with you.
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="w-full max-w-[1400px] mx-auto px-1 sm:px-4 flex justify-center mt-8">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
            {pricingData.map((item, idx) => (
              <div
                key={idx}
                className={`
                  relative bg-white/20 backdrop-blur-md rounded-2xl shadow-xl
                  flex flex-col items-center px-4 py-8 sm:px-6 sm:py-10 text-center
                  border border-white/30 min-w-0 transition-transform duration-300 ease-in-out
                  ${(idx + 1) % 2 === 0 ? 'top-[-5%]' : 'top-0'}
                  hover:scale-105
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
                <button 
                  onClick={() => handleJoinNow(item.plan)}
                  className="absolute bottom-4 bg-white text-black font-semibold rounded-lg px-5 py-2 shadow hover:bg-red-500 hover:text-white transition cursor-pointer w-full sm:w-auto"
                >
                  JOIN NOW
                </button>
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden w-full rounded-2xl">
            {/* Cards Container */}
            <div 
              ref={containerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full py-4"
              onScroll={handleScroll}
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="flex px-4 gap-4">
                {pricingData.map((item, idx) => (
                  <div
                    key={idx}
                    ref={el => cardRefs.current[idx] = el}
                    className={`flex-shrink-0 w-[85vw] transition-all duration-300 ${
                      currentIndex === idx ? 'scale-100 opacity-100' : 'scale-90 opacity-70'
                    }`}
                  >
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center px-6 py-8 text-center border border-white/30 h-full">
                      <div className="flex-1 w-full flex flex-col items-center">
                        <div className="text-xl font-extrabold mb-6 text-white">{item.plan}</div>
                        <div className="relative mb-2 h-8 flex items-center justify-center w-full">
                          <span className="text-3xl text-white/60 font-bold line-through">₹{item.old}</span>
                        </div>
                        <div className="text-6xl font-extrabold mb-6 text-white">₹{item.price}</div>
                        <div className="mt-3 w-full">
                          <ul className="text-[1.2rem] text-white/90 mb-8 text-center space-y-3">
                            {item.desc.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleJoinNow(item.plan)}
                        className="bg-white text-black font-semibold rounded-lg px-5 py-3 shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer w-full"
                      >
                        JOIN NOW
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls - Only dots */}
            <div className="flex justify-center items-center mt-6 px-4">
              <div className="flex gap-2">
                {pricingData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToCard(idx)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300 ease-in-out hover:bg-red
                      ${currentIndex === idx ? 'bg-red-700 w-6' : 'bg-white/30'}
                      hover:bg-white/70 hover:scale-110 cursor-pointer
                      focus:outline-none focus:ring-2 focus:ring-white/50
                    `}
                    aria-label={`Go to plan ${idx + 1}`}
                  />
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