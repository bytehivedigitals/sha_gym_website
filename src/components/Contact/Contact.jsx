import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import formbg from "../../assets/form-bg.webp";
import formBgMob from "../../assets/mob-form-bg.webp";

const SERVICE_ID = "service_e272on8";
const TEMPLATE_ID = "template_3mghgci";
const USER_ID = "sNFk5DxgLjwe0Ydla";

const ContactForm = ({ id }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !name.trim() || !phone.trim()) {
      alert("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    setSuccess(null);

    // Create an object with the form data
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
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
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <div
      id={id}
      className={`form-container relative min-h-[45rem] sm:min-h-[50rem] md:min-h-[55rem] w-full bg-cover bg-center flex px-4 ${isMobile ? 'justify-center' : ''} items-center transition-all duration-500 ease-out`}
      style={{
        backgroundImage: isMobile ? `url(${formBgMob})`: `url(${formbg})`,
        backgroundRepeat: "no-repeat",
        opacity: 0.9
      }}
    >
      <div className="relative z-10 w-full md:w-[60%] px-4 md:px-18 pt-[35%] sm:pt-[20%] md:pt-0">
        <div className="text-left space-y-8 sm:space-y-12 md:space-y-18">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.3]"
          style={{ fontFamily: "'Russo One', sans-serif" }}>
            Connect <br /> Engage <br /> Transform
          </h1>

          <form ref={formRef} className="space-y-6 sm:space-y-10 md:space-y-8" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder="YOUR NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="YOUR NUMBER"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-field w-full px-4 py-3 rounded-lg border-2 border-black placeholder-gray-600 text-black focus:outline-none hover:shadow-md hover:bg-gray-200 transition-all duration-300 text-sm md:text-base"
              required
            />
            <button
              type="submit"
              className="mt-2 md:mt-4 px-8 py-3 bg-black text-white text-lg md:text-xl font-semibold rounded-xl hover:bg-[red] transition cursor-pointer w-full md:w-auto"
              disabled={loading}
              style={{ fontFamily: "'Russo One', sans-serif" }}
            >
              {loading ? "Sending..." : "JOIN NOW"}
            </button>
            {success && (
              <div className={`font-bold pt-2 text-sm md:text-base ${success.includes("success") ? "text-green-600" : "text-red-600"}`}>
                {success}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;