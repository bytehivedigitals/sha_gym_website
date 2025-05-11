import React, { useState, useEffect } from "react";
import trainer1 from "../../assets/trianer.png";
import trainer2 from "../../assets/trianer.png";
import trainer3 from "../../assets/trianer.png";
import decorative from "../../assets/Shape 1.png";
import alt1 from "../../assets/trianer.png";
import alt2 from "../../assets/trianer.png";

const testimonials = [
  {
    id: 1,
    text: "I Love The Variety Of Workouts On Fit Fusion. Whether It's HIIT, Yoga, Or Strength Training, There's Always Something New To Try. The Progress Tracking Tools Keep Me Motivated!",
    author: "rizwan p s",
    img: trainer1,
  },
  {
    id: 2,
    text: "Thanks to Fit Fusion, I've achieved my fitness goals and feel more energetic than ever!",
    author: "neha j",
    img: trainer2,
  },
  {
    id: 3,
    text: "Fit Fusion has changed my life. The programs are tailored and results-driven.",
    author: "rahul k",
    img: trainer3,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = testimonials.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white text-center px-4 py-20">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-tight">
        Your Fitness <br className="hidden md:block" /> Goals, Their Expertise
      </h1>
      <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl mx-auto uppercase tracking-wide">
        See How Our Customers Have Achieved Their Goals And Let Their Journeys
        Inspire Yours!
      </p>

      <div className="mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center">
          {/* Decorative Background */}
          <img
            src={decorative}
            alt="decorative"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] max-h-[500px] object-contain opacity-30 z-0"
          />

          {/* Trainer Image */}
          <img
            src={testimonials[index].img}
            alt="trainer"
            className="relative z-10 w-full max-w-md opacity-80 object-contain"
          />

          {/* Testimonial Box Overlapping */}
          <div className="absolute z-20 -bottom-12 left-1/2 transform -translate-x-1/2 sm:max-w-[90%] w-11/12 sm:w-4/5 md:w-3/4 lg:w-[420px] bg-gradient-to-br from-gray-700/40 to-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white text-left shadow-xl">
            <p className="italic text-sm md:text-base leading-relaxed">
              "{testimonials[index].text}"
            </p>
            <p className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-right">
              - {testimonials[index].author}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-8 mt-24 lg:mt-0">
          <div className="flex gap-6 items-center justify-center">
            <button
              onClick={() => setIndex(index > 0 ? index - 1 : maxIndex)}
              className="p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition"
            >
              &#8592;
            </button>
            <button
              onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
              className="p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition"
            >
              &#8594;
            </button>
          </div>

          {/* Full-Visible Images */}
          <div className="grid grid-cols-2 gap-4 w-11/12 sm:w-3/4">
            <img
              src={alt1}
              alt="alt1"
              className="w-full h-80 object-contain rounded-xl shadow-md"
            />
            <img
              src={alt2}
              alt="alt2"
              className="w-full h-80 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
