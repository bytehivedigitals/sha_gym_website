import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import formbg from "../../assets/form-bg.webp";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const USER_ID = "your_public_key"; // EmailJS public key (user_xxxxx)

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

    // Option 1: Using sendForm (recommended for forms)
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

    // Option 2: Using send (if you want to send custom variables instead of a form)
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, phone, email }, USER_ID)
    //   .then(...);
  };

  return (
    <div
      id={id}
      className="form-container relative h-[60rem] w-full bg-cover bg-center flex px-5 pt-24"
      style={{
        backgroundImage: `url(${formbg})`,
        backgroundRepeat: "no-repeat",
        opacity: 0.9
      }}
    >
      <div className="relative z-10 w-[60%] px-10 md:px-12">
        <div className="text-left space-y-12">
          <h1 className="text-6xl font-extrabold text-black leading-[1.3]">
            Connect <br /> Engage <br /> Transform
          </h1>

          <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="email"
              name="user_email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <input
              type="text"
              name="user_phone"
              placeholder="YOUR NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300"
            />
            <button
              type="submit"
              className="mt-4 px-12 py-3 bg-black text-white text-xl font-semibold rounded-xl hover:bg-[red] transition cursor-pointer"
              disabled={loading}
            >
              {loading ? "Sending..." : "JOIN NOW"}
            </button>
            {success && (
              <div className="text-green-600 font-bold pt-2">{success}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;