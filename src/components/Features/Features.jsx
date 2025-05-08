import React from "react";
import "./Features.css";

const Features = () => {
    return (
        <section className="features-container">
            {/* Header Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-3">Inspired to</h1>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspire Your Best Self</h1>
                <p className="tagline">
                    We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
                </p>
            </div>

            {/* Features Grid */}
            <div className="features-grid-container flex justify-center">
                <div className="features-grid w-[80%] p-8 rounded-[3rem] bg-[#131313] flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Nutrition Guidance",
                            "Premium Membership",
                            "Expert Trainers",
                            "Community Support",
                            "Progress Tracking",
                            "Next-Level Fitness Spaces"
                        ].map((feature, index) => (
                            <div key={index} className="feature-card">
                                <h3>{feature}</h3>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-[30%] flex p-4">
                        <img src="" alt="features-image" className="w-full h-auto object-cover rounded-xl"></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;