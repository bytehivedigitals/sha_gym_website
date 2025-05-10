import React from "react";
import "./Features.css";
import feauteimg from "../../assets/muscle-man.webp";
import nutri from "../../assets/warthw.webp";
import premium from "../../assets/thee.webp";
import expert from "../../assets/db.webp";
import support from "../../assets/walsk.webp";

const Features = () => {
  return (
    <section className="features-container px-4 sm:px-0">
      {/* Header Section */}
      <div className="text-center mt-[-2rem]">
        <h1 className="text-2xl sm:text-3xl md:text-[6rem] lg:text-[9rem] font-bold mb-3">
          Inspired to
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-[6rem] lg:text-[9rem] font-bold mb-6">
          Inspire Your Best Self
        </h1>
        <p className="tagline text-base sm:text-lg md:text-xl">
          We're Your Partner In Achieving A Healthier, Stronger, And More
          Confident You.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid-container flex justify-center mt-8 sm:mt-12">
        <div className="features-grid w-full sm:w-[80%] p-4 sm:p-8 md:p-20 rounded-[2rem] bg-[#131313] flex flex-col lg:flex-row gap-6">
          {/* Feature Cards */}
          <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Nutrition Guidance", imgSrc: premium },
              { title: "Premium Membership", imgSrc: nutri },
              { title: "Expert Trainers", imgSrc: expert },
              { title: "Community Support", imgSrc: support },
              { title: "Progress Tracking", imgSrc: nutri },
              { title: "Next-Level Fitness Spaces", imgSrc: premium },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card flex items-center gap-4 p-4 bg-[#131313] rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
              >
                <img
                  src={feature.imgSrc}
                  alt={`${feature.title} icon`}
                  className="w-12 h-12 sm:w-15 sm:h-15 rounded-full object-cover"
                />
                <h3 className="text-white text-sm sm:text-lg font-semibold">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="w-full lg:w-[30%] flex justify-center">
            <img
              src={feauteimg}
              alt="features-image"
              className="w-[70%] sm:w-full h-auto object-cover rounded-xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;