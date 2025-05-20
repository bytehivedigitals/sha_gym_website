import React, { useState } from "react";
import formbg from "../../assets/form-bg.webp";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleMailClick = () => {
    if (
      email.trim() === "" ||
      name.trim() === "" ||
      phone.trim() === ""
    ) {
      alert("Please fill in all fields correctly.");
      return;
    }
    const subject = encodeURIComponent("Join Our Community");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nI would like to join your community!`
    );
    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  };

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

          <form className="space-y-8" onSubmit={e => {e.preventDefault(); handleMailClick();}}>
            <input
              type="text"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="YOUR NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <button
              type="submit"
              className="mt-4 px-12 py-3 bg-black text-white text-xl font-semibold rounded-xl hover:bg-[red] transition cursor-pointer"
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