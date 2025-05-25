import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import formbg from "../../assets/form-bg.webp";

const SERVICE_ID = "service_m73nvyq";
const TEMPLATE_ID = "template_k2982un";
const USER_ID = "TxUV9W3atW6y6Hd3t";

const ContactForm = ({ id }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !name.trim() || !phone.trim()) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
      .then(
        (result) => {
          setSuccess("Message sent successfully!");
          setLoading(false);
          setName("");
          setPhone("");
          setEmail("");
        },
        (error) => {
          setSuccess("Failed to send. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      id={id}
      className="form-container relative min-h-[55rem] w-full bg-cover bg-center flex px-4 pt-20 md:pt-24"
      style={{
        backgroundImage: `url(${formbg})`,
        backgroundRepeat: "no-repeat",
        opacity: 0.9
      }}
    >
      <div className="relative z-10 w-full md:w-[50%] px-4 md:px-18">
        <div className="text-left space-y-6 md:space-y-18">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-[1.3]">
            Connect <br /> Engage <br /> Transform
          </h1>

          <form ref={formRef} className="space-y-4 md:space-y-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
            />
            <input
              type="email"
              name="user_email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="YOUR NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
            />
            <button
              type="submit"
              className="mt-2 md:mt-4 px-8 py-3 bg-black text-white text-lg md:text-xl font-semibold rounded-xl hover:bg-[red] transition cursor-pointer w-full md:w-auto"
              disabled={loading}
            >
              {loading ? "Sending..." : "JOIN NOW"}
            </button>
            {success && (
              <div className="text-green-600 font-bold pt-2 text-sm md:text-base">{success}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;