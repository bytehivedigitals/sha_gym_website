import React, { useState, useEffect } from "react";
import client1 from "../../assets/client1.webp";
import client2 from "../../assets/client2.webp";
import client3 from "../../assets/client3.webp";
import decorative from "../../assets/Shape 1.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "I Love The Variety Of Workouts On Fit Fusion. Whether It's HIIT, Yoga, Or Strength Training, There's Always Something New To Try. The Progress Tracking Tools Keep Me Motivated!",
    author: "rizwan p s",
    img: client1,
  },
  {
    id: 2,
    text: "Thanks to Fit Fusion, I've achieved my fitness goals and feel more energetic than ever!",
    author: "neha j",
    img: client2,
  },
  {
    id: 3,
    text: "Fit Fusion has changed my life. The programs are tailored and results-driven.",
    author: "rahul k",
    img: client3,
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

  return (
    <div className="testimonial-container h-[fit-content] bg-black text-white text-center px-4 py-20 sm:py-20">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
        Your Fitness <br className="hidden md:block" /> Goals, Their Expertise
      </h1>
      <p className="mt-3 sm:mt-4 text-xs sm:text-base text-gray-400 max-w-xs sm:max-w-xl mx-auto uppercase tracking-wide">
        See How Our Customers Have Achieved Their Goals And Let Their Journeys Inspire Yours!
      </p>

      {/* Mobile-only testimonial section (below 768px) */}
      <div className="md:hidden mt-8 relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={() => setIndex(index > 0 ? index - 1 : maxIndex)}
          className="p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 hover:text-black transition z-10"
          aria-label="Previous testimonial"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        
        {/* Testimonial Box */}
        <div className="mx-3 flex-1 w-full p-6 bg-[#D9D9D959] backdrop-blur-3xl rounded-4xl text-white text-left shadow-xl">
          <p className="italic text-sm leading-relaxed mb-2">
            "{testimonials[index].text}"
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-left">
            - {testimonials[index].author}
          </p>
        </div>
        
        {/* Right Arrow */}
        <button
          onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
          className="p-3 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 hover:text-black transition z-10"
          aria-label="Next testimonial"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Desktop layout (768px and above) */}
      <div className="hidden md:flex flex-col md:flex-row items-center justify-between mb-12 pr-12 mt-5">
        {/* Left Side */}
        <div className="relative w-[60%] flex flex-col items-center justify-center ml-18">
          {/* Decorative Background */}
          <div className="relative w-full mt-5">
            {/* Background shape behind */}
            <img
              src={decorative}
              alt="decorative"
              className="absolute top-10 left-[-20%] w-[100%] h-[100%] object-contain z-0"
            />
            {/* Foreground trainer image (in color) */}
            <img
              src={testimonials[index].img}
              alt="trainer"
              className="relative mt-[-8%] z-10 w-[50%] object-contain opacity-90 filter grayscale-0"
            />
          </div>

          {/* Testimonial Box Overlapping */}
          <div className="relative sm:absolute z-20 sm:-bottom-12 left-1/2 sm:left-2/3 transform -translate-x-2/3 translate-y-4 w-[70%] lg:w-[50%] min-h-[fit-content] h-[40%] p-4 sm:py-[5%] sm:px-[5%] mt-3 sm:mt-0 bg-[#D9D9D959] backdrop-blur-3xl rounded-4xl text-white text-left shadow-xl">
            <p className="italic text-xs xs:text-sm md:text-base leading-relaxed mb-2">
              "{testimonials[index].text}"
            </p>
            <p className="mt-3 sm:mt-10 text-xs md:text-sm font-semibold uppercase tracking-wide text-left">
              - {testimonials[index].author}
            </p>
          </div>
        </div>

        {/* Right Side (Images) */}
        <div className="relative w-[40%] h-[auto] flex flex-row gap-2">
          {/* Buttons Centered */}
          <div className="flex gap-4 sm:gap-6 mb-4 lg:mb-8 mt-[-10%]">
            <button
              onClick={() => setIndex(index > 0 ? index - 1 : maxIndex)}
              className="h-[fit-content] p-3 sm:p-4 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 hover:text-black transition"
              aria-label="Previous testimonial"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
              className="h-[fit-content] p-3 sm:p-4 rounded-full border border-white border-opacity-30 hover:bg-white hover:bg-opacity-20 hover:text-black transition"
              aria-label="Next testimonial"
            >
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Next two testimonial images (in grayscale) */}
          <div className="grid grid-cols-2 gap-4 w-full h-full">
            <div className="w-full h-[100%] bg-[#D9D9D959] rounded-3xl shadow-md flex justify-center items-center">
              <img
                src={testimonials[(index + 1) % testimonials.length].img}
                alt={`testimonial ${(index + 1) % testimonials.length + 1}`}
                className="object-contain filter grayscale"
              />
            </div>
            <div className="w-full h-[100%] bg-[#D9D9D959] rounded-3xl shadow-md flex justify-center items-center mt-[-10%]">
              <img
                src={testimonials[(index + 2) % testimonials.length].img}
                alt={`testimonial ${(index + 2) % testimonials.length + 1}`}
                className="object-contain filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;