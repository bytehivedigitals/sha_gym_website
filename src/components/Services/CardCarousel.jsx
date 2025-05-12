import React, { useRef } from "react";
import card from "../../assets/bodybuilder-showing-his-muscles_136403-5542.avif";
import card1 from "../../assets/plan1.png";
import card2 from "../../assets/plan2.png";
import "./CardCarousel.css";

const cards = [
  {
    id: 1,
    title: "Weight Training",
    img: card,
    details:
      "Build muscle and strength with expert-led programs tailored for all levels.",
  },
  {
    id: 2,
    title: "Personal Training",
    img: card1,
    details:
      "One-on-one sessions with certified personal trainers to meet your goals.",
  },
  {
    id: 3,
    title: "Cardio & HIIT",
    img: card2,
    details:
      "Burn fat and boost stamina with intense, fun, and energizing routines.",
  },
  {
    id: 4,
    title: "Yoga & Flexibility",
    img: card,
    details:
      "Enhance mobility, mindfulness, and inner peace with calming yoga sessions.",
  },
  {
    id: 5,
    title: "Nutrition Coaching",
    img: card,
    details:
      "Get custom nutrition plans and guidance to fuel your fitness journey.",
  },
];

const CardCarousel = () => {
  const trackRef = useRef();

  const pauseScroll = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const resumeScroll = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <div className="carousel-wrapper overflow-hidden relative">
      <div ref={trackRef} className="carousel-track flex">
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="carousel-card w-[280px] md:w-[380px] flex-shrink-0 px-3 relative group"
            onMouseEnter={pauseScroll}
            onMouseLeave={resumeScroll}
            onTouchStart={pauseScroll}
            onTouchEnd={resumeScroll}
          >
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 md:h-[28rem] object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Hover Overlay Details */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-white/10 via-black/30 to-black/60 backdrop-blur-md p-6 text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out">
                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">
                  {card.title}
                </h3>
                <p className="text-sm text-center">{card.details}</p>
              </div>

              {/* See Plans Button */}
              <div className="absolute bottom-0 left-0 w-full z-10 p-3">
                <button className="w-full bg-white text-black font-semibold py-2 rounded-lg shadow-md transition hover:bg-gray-200">
                  See Plans &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
