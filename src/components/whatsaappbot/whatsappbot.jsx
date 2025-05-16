import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const WhatsAppButton = () => {
  const buttonRef = useRef(null);

  // Notification animation effect: bounce & pulse
  useEffect(() => {
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.add("wa-bounce-pulse");
      // Remove animation after a while if you want it to be a one-time effect
      // setTimeout(() => btn.classList.remove("wa-bounce-pulse"), 3000);
    }
  }, []);

  return (
    <>
      <a
        href="https://wa.me/917907467576?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20Sha%20Health%20Studio%20and%20your%20services.%20Could%20you%20please%20share%20details%20regarding%20your%20programs%2C%20pricing%2C%20and%20availability%3F%20Thank%20you%21"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button
          ref={buttonRef}
          className="wa-btn"
          style={{
            backgroundColor: "#25D366",
            color: "black",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "none",
            fontSize: "28px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            outline: "none",
          }}
        >
          <FaWhatsapp size={32} color="white" />
          {/* Notification dot */}
          <span className="wa-notification-dot"></span>
        </button>
      </a>
      {/* Styles for notification and animation */}
      <style>
        {`
          .wa-btn {
            transition: box-shadow 0.2s;
          }
          .wa-btn:active {
            box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
          }
          .wa-notification-dot {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 12px;
            height: 12px;
            background: #ff3b3b;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: 0 0 10px #ff3b3b88;
            animation: wa-pulse 1.2s infinite;
          }
          @keyframes wa-pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.3); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes wa-bounce {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-10px);}
            40% { transform: translateY(-20px);}
            60% { transform: translateY(-10px);}
            80% { transform: translateY(-5px);}
          }
          .wa-bounce-pulse {
            animation: wa-bounce 1s;
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;