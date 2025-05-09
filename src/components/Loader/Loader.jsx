import React, { useEffect, useRef } from "react";
import loaderVideo from "../../assets/sha_loader.webm"; // Place your video here

export default function Loader({ onLoaded }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      onLoaded(); // Only proceed after video ends
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
<<<<<<< HEAD
        className="w-full h-full object-contain"
=======
        className="w-full h-full object-cover"
>>>>>>> 59d60da (resoveld conflicts)
        autoPlay
        muted
        playsInline
      >
        <source src={loaderVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
