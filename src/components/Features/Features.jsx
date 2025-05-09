import React from "react";
import "./Features.css";
import feauteimg from '../../assets/muscle-man.webp'
import nutri from '../../assets/warthw.webp'
import premium from '../../assets/thee.webp'
import expert from '../../assets/db.webp'
import support from '../../assets/walsk.webp'

const Features = () => {
  return (
    <section className="features-container">
      {/* Header Section */}
      <div className="text-center mt-[-2rem]">
        <h1 className="text-3xl md:text-[9rem] font-bold mb-3">Inspired to</h1>
        <h1 className="text-4xl md:text-[9rem] font-bold mb-6">
          Inspire Your Best Self
        </h1>
        <p className="tagline">
          We're Your Partner In Achieving A Healthier, Stronger, And More
          Confident You.
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-grid-container flex justify-center">
        <div className="features-grid w-[80%] p-20 rounded-[3rem] bg-[#131313] flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
    { title: "Nutrition Guidance", imgSrc: premium },
    { title: "Premium Membership", imgSrc: nutri },
    { title: "Expert Trainers", imgSrc: expert },
    { title: "Community Support", imgSrc: support },
    { title: "Progress Tracking", imgSrc: nutri },
    { title: "Next-Level Fitness Spaces", imgSrc: premium },
].map((feature, index) => (
    <div key={index} className="feature-card flex items-center gap-4">
        <img
            src={feature.imgSrc}
            alt={`${feature.title} icon`}
            className="w-15 h-15 rounded-full object-cover"
        />
        <h3 className="text-white text-lg font-semibold">{feature.title}</h3>
    </div>
))}
          </div>
          <div className="w-full lg:w-[30%] flex p-4">
            <img
              src={feauteimg}
              alt="features-image"
              className="w-full h-auto object-cover rounded-xl ml-[8rem] z-10"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
