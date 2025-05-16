import React from "react";
import formbg from "../../assets/form-bg.webp";

const ContactForm = () => {
  return (
    <div
      className="form-container relative h-screen w-full bg-cover bg-center flex px-5 pt-24"
      style={{
        backgroundImage: `url(${formbg})`,
        backgroundRepeat: "no-repeat",
        opacity: 0.9
      }}
    >

      <div className="relative z-10 w-[60%] px-10 md:px-12">
        {/* Text and Form */}
        <div className="text-left space-y-12">
          <h1 className="text-6xl font-extrabold text-black leading-[1.3]">
            Connect <br /> Engage <br /> Transform
          </h1>

          <form className="space-y-8">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="YOUR NUMBER"
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <button
              type="submit"
              className="mt-4 px-12 py-3 bg-black text-white text-xl font-semibold rounded-xl hover:bg-[red] transition"
            >
              JOIN NOW
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;