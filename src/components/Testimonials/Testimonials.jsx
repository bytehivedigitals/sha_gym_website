import React, { useState, useEffect } from "react";
import trainer1 from "../../assets/trainer.webp";
import trainer2 from "../../assets/trainer2.webp";
import trainer3 from "../../assets/trainer3.webp";
import decorative from "../../assets/Shape 1.png";

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
  }, [maxIndex]);

  const nextIndex = (index + 1) % testimonials.length;
  const nextNextIndex = (index + 2) % testimonials.length;

  return (
    <div className="bg-black text-white text-center px-2 sm:px-4 py-12 sm:py-20">
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
        Your Fitness <br className="hidden md:block" /> Goals, Their Expertise
      </h1>
      <p className="mt-3 sm:mt-4 text-xs xs:text-sm md:text-base text-gray-400 max-w-xs sm:max-w-xl mx-auto uppercase tracking-wide">
        See How Our Customers Have Achieved Their Goals And Let Their Journeys Inspire Yours!
      </p>

      <div className="mt-10 sm:mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-16">
        {/* Left Side */}
        <div className="relative w-full lg:w-1/2 flex flex-col items-center">
          {/* Decorative Background */}
          <img
            src={decorative}
            alt="decorative"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] max-h-[250px] sm:max-h-[500px] object-contain opacity-30 z-0"
          />

          {/* Trainer Image */}
          <img
            src={testimonials[index].img}
            alt="trainer"
            className="relative z-10 w-full max-w-[320px] sm:max-w-md opacity-80 object-contain"
          />

          {/* Testimonial Box Overlapping */}
          <div className="relative sm:absolute z-20 -bottom-6 sm:-bottom-12 left-1/2 sm:left-2/3 transform -translate-x-1/2 sm:sm:max-w-[60%] w-full sm:w-11/12 md:w-3/4 lg:w-[420px] bg-gradient-to-br from-gray-700/40 to-gray-900/20 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-white text-left shadow-xl mt-3 sm:mt-0">
            <p className="italic text-xs xs:text-sm md:text-base leading-relaxed">
              "{testimonials[index].text}"
            </p>
            <p className="mt-3 sm:mt-4 text-xs md:text-sm font-semibold uppercase tracking-wide text-right">
              - {testimonials[index].author}
            </p>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6 sm:gap-8 mt-12 sm:mt-24 lg:mt-0">
          {/* Buttons Centered */}
          <div className="flex gap-4 sm:gap-6 items-center justify-center mb-4 lg:mb-8">
            <button
              onClick={() => setIndex(index > 0 ? index - 1 : maxIndex)}
              className="p-2 sm:p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition"
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            <button
              onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
              className="p-2 sm:p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 transition"
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>

          {/* Next two testimonial images */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full sm:w-11/12 md:w-3/4">
            <img
              src={testimonials[nextIndex].img}
              alt={`testimonial ${nextIndex + 1}`}
              className="w-full h-40 xs:h-60 sm:h-80 object-contain rounded-xl shadow-md"
            />
            <img
              src={testimonials[nextNextIndex].img}
              alt={`testimonial ${nextNextIndex + 1}`}
              className="w-full h-40 xs:h-60 sm:h-80 object-contain rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;