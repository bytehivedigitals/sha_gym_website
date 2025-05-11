import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMailClick = () => {
    if (email.trim() === "" || name.trim() === "" || phone.trim() === "") {
      alert("Please fill in all fields correctly.");
      return;
    }

    const subject = encodeURIComponent("Join Our Community");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nI would like to join your community!`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="bg-white shadow-lg rounded-[3rem] p-6 sm:p-[3%] w-full max-w-[90%] text-center border border-gray-300 mt-[5rem] sm:mt-[10rem]">
        {/* Heading */}
        <p className="text-[2rem] sm:text-[5rem] font-bold text-gray-900 mb-4 sm:mb-6">
          Connect Engage Transform
        </p>

        {/* Subtext */}
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-10">
          Join A Vibrant Community For Fuel Motivation, Engagement Drives
          Progress, And Transformation
        </p>

        {/* Input Fields and Button */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-between gap-4 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="h-[4rem] sm:h-[5rem] w-full sm:w-[28rem] px-6 py-2 rounded-lg shadow-sm border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
            className="h-[4rem] sm:h-[5rem] w-full sm:w-[28rem] px-6 py-2 rounded-lg shadow-sm border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="h-[4rem] sm:h-[5rem] w-full sm:w-[28rem] px-6 py-2 rounded-lg shadow-sm border-gray-300 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Left-Aligned Button */}
          <button
            onClick={handleMailClick}
            className="w-full sm:w-[14rem] h-[4rem] sm:h-[5rem] px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition duration-300 cursor-pointer"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
