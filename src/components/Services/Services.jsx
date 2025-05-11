import React from "react";
import CardCarousel from "./CardCarousel";

const Services = () => {
  return (
    <div className="w-full max-w-[95%] mx-auto bg-black text-white p-4 sm:p-6 md:p-10 rounded-3xl mt-28">
      <div className="text-center mb-10">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Discover <br /> What Sets Us Apart
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/60">
          We Deliver A Fitness Experience That's Truly One-Of-A-Kind.
          <br />
          Explore How We Help You Achieve Your Goals Faster And Smarter.
        </p>
      </div>
      <CardCarousel />
    </div>
  );
};

export default Services;
