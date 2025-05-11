import React from "react";
import trainer1 from "../../assets/trianer.png";
import trainer2 from "../../assets/trianer.png";
import trainer3 from "../../assets/trianer.png";
import bgImage from "../../assets/Shape 1.png"; // Decorative shape

const trainers = [
  { id: 1, name: "Abhiram", img: trainer1 },
  { id: 2, name: "Arun Raj", img: trainer2 },
  { id: 3, name: "Abhijith", img: trainer3 },
];

const Trainers = () => {
  return (
    <div className="text-white mt-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
        Your Fitness <br /> Goals, Their Expertise
      </h2>

      {/* Low opacity paragraph */}
      <p className="text-center text-sm md:text-lg mb-10 text-white/60">
        Our Team Of Certified Trainers Brings Unparalleled Expertise
      </p>

      {/* Trainer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="relative flex flex-col items-center">
            {/* Decorative background shape */}
            <img
              src={bgImage}
              alt="decorative"
              className="absolute bottom-6 w-110 h-110 object-contain opacity-40 pointer-events-none z-0"
            />

            {/* Trainer image */}
            <img
              src={trainer.img}
              alt={trainer.name}
              className="relative z-10 rounded-lg w-full h-[25rem] md:h-[28rem] object-contain"
            />

            {/* Trainer Name */}
            <h3 className="text-lg md:text-xl font-bold mt-4 z-10">
              {trainer.name}
            </h3>
          </div>
        ))}
      </div>

      {/* Central Slide Indicator */}
      <div className="mt-8 text-center text-2xl font-bold z-10">
        {Array(3)
          .fill("/")
          .map((slash, i) => (
            <span
              key={i}
              className={`mx-1 ${
                i === 0 ? "text-white opacity-100" : "text-white opacity-30"
              }`}
            >
              /
            </span>
          ))}
      </div>
    </div>
  );
};

export default Trainers;
