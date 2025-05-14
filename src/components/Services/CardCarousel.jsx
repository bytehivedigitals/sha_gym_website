import React, { useRef, useEffect, useState } from "react";
import card from "../../assets/bodybuilder-showing-his-muscles_136403-5542.avif";
import card1 from "../../assets/plan1.png";
import card2 from "../../assets/plan2.png";
import "./CardCarousel.css";

const cards = [
  {
    id: 1,
    title: "Strength Training",
    img: card,
    details: "💪 Build muscle and improve endurance.",
  },
  {
    id: 2,
    title: "Cardio Blast",
    img: card1,
    details: "🏃 Boost stamina and burn calories.",
  },
  {
    id: 3,
    title: "HIIT Program",
    img: card2,
    details: "🔥 High-intensity interval training sessions.",
  },
  {
    id: 4,
    title: "Personal Coaching",
    img: card,
    details: "🎯 1-on-1 fitness sessions with experts.",
  },
  {
    id: 5,
    title: "Nutrition Plan",
    img: card1,
    details: "🥗 Customized diet plans for your goals.",
  },
];

const CardCarousel = () => {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    let scrollAmount = 0;
    let animationId;

    const autoScroll = () => {
      if (track && !paused) {
        scrollAmount += 1;
        if (scrollAmount >= track.scrollWidth / 2) {
          scrollAmount = 0;
          track.scrollLeft = 0;
        } else {
          track.scrollLeft += 1;
        }
        animationId = requestAnimationFrame(autoScroll);
      }
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  const handleHoverStart = (id) => {
    setHoveredCardId(id);
    setPaused(true);
  };

  const handleHoverEnd = () => {
    setHoveredCardId(null);
    setPaused(false);
  };

  return (
    <div className="carousel-wrapper overflow-hidden relative w-full py-6 bg-black">
      <div
        ref={trackRef}
        className="carousel-track flex gap-6 px-6 whitespace-nowrap"
      >
        {[...cards, ...cards].map((card, index) => {
          const isHovered = hoveredCardId === card.id;
          return (
            <div
              key={index}
              className="carousel-card w-[260px] sm:w-[300px] md:w-[360px] flex-shrink-0 group relative"
              onMouseEnter={() => handleHoverStart(card.id)}
              onMouseLeave={handleHoverEnd}
              onTouchStart={() => handleHoverStart(card.id)}
              onTouchEnd={handleHoverEnd}
            >
              <div className="relative bg-black rounded-xl overflow-hidden shadow-lg">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[22rem] sm:h-[24rem] md:h-[28rem] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute bottom-0 left-0 w-full h-full p-4 text-white bg-gradient-to-t from-black/90 to-transparent transition-all duration-500 ease-in-out ${
                    isHovered
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-base">{card.details}</p>
                </div>
                <div className="absolute bottom-4 left-0 w-full px-4 z-10">
                  <button
                    className="w-full py-2 bg-white text-black font-bold rounded-lg shadow-md transition hover:bg-gray-300 active:scale-95"
                    onMouseEnter={() => handleHoverStart(card.id)}
                    onMouseLeave={handleHoverEnd}
                    onTouchStart={() => handleHoverStart(card.id)}
                    onTouchEnd={handleHoverEnd}
                  >
                    See Plans &gt;&gt;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
