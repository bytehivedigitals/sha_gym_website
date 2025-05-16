import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917907467576?text=Hello%2C%20I%20am%20interested%20in%20learning%20more%20about%20Sha%20Health%20Studio%20and%20your%20services.%20Could%20you%20please%20share%20details%20regarding%20your%20programs%2C%20pricing%2C%20and%20availability%3F%20Thank%20you%21"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        style={{
          backgroundColor: "white",
          color: "black",
          padding: "12px 20px",
          borderRadius: "9999px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          border: "1px solid #ccc",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1000,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <FaWhatsapp size={24} color="black" />
        Chat
      </button>
    </a>
  );
};

export default WhatsAppButton;
