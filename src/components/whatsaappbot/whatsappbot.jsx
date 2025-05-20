import React, { useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const WhatsAppButton = () => {
  const buttonRef = useRef(null);

  // Notification animation effect: bounce only (not pulse for numbers)
  useEffect(() => {
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.add("wa-bounce-pulse");
    }
  }, []);

  // You can make this dynamic (state/prop) if needed
  const notificationCount = 1;

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
            backgroundColor: "#fff",
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
          <FaWhatsapp size={32} color="black" />
          {/* Notification badge with number */}
        </button>
      </a>
      {/* Styles for notification, animation, and hover */}
      <style>
        {`
          .wa-btn {
            transition: box-shadow 0.2s, background 0.2s, color 0.2s;
            position: fixed;
            bottom: 20px;
            right: 20px;
          }
          .wa-btn:active {
            box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
          }
          .wa-btn:hover {
            background: #25D366 !important;      /* WhatsApp Green */
            color: #fff !important;
          }
          .wa-btn:hover svg {
            color: #fff !important;
          }
          .wa-notification-badge {
            position: absolute;
            top: 8px;
            right: 8px;
            min-width: 20px;
            height: 20px;

            border-radius: 50%;
            border: 2px solid #000;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: bold;

            animation: wa-bounce 1s;
            pointer-events: none;
            user-select: none;
          }
          @keyframes wa-bounce {
            0%, 100% { transform: translateY(0); }
            20% { transform: translateY(-10px);}
            40% { transform: translateY(-20px);}
            60% { transform: translateY(-10px);}
            80% { transform: translateY(-5px);}

        `}
      </style>
    </>
  );
};

export default WhatsAppButton;