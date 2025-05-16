import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMailClick = () => {
    if (
      email.trim() === "" ||
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }
    const subject = encodeURIComponent("Join Our Community");
    const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nEmail: ${email}\n\nI would like to join your community!`
    );
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
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

        {/* Form Grid */}
        <form 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 justify-items-center items-center mb-4"
          onSubmit={e => {e.preventDefault(); handleMailClick();}}
        >
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="w-72 md:w-80 border-0 border-b-2 border-gray-400 focus:border-black outline-none bg-transparent text-black placeholder-gray-400 text-base py-2 mb-2 transition-all"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="w-72 md:w-80 border-0 border-b-2 border-gray-400 focus:border-black outline-none bg-transparent text-black placeholder-gray-400 text-base py-2 mb-2 transition-all"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
            className="w-72 md:w-80 border-0 border-b-2 border-gray-400 focus:border-black outline-none bg-transparent text-black placeholder-gray-400 text-base py-2 mb-2 transition-all"
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-72 md:w-80 border-0 border-b-2 border-gray-400 focus:border-black outline-none bg-transparent text-black placeholder-gray-400 text-base py-2 mb-2 transition-all"
          />

          {/* Button full width on mobile, fits under first column on desktop */}
          <div className="md:col-span-2 flex justify-start w-full mt-2">
            <button
              type="submit"
              className="bg-black text-white font-bold text-lg ml-[14rem] rounded-md px-8 py-2 shadow hover:bg-gray-900 transition cursor-pointer"
            >
              Join Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;