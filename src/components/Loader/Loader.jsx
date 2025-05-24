import React, { useEffect, useRef, useState } from "react";
import loaderVideoDesktop from "../../assets/sha_loader.webm";
// import loaderVideoMobile from "../../assets/loader_mobile.webm"; // Mobile loader commented out

export default function Loader({ onLoaded }) {
  const videoRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);
  const [videoSrc, setVideoSrc] = useState(loaderVideoDesktop);
  const [objectFitClass, setObjectFitClass] = useState("object-contain");

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Don't show loader on mobile
      setShowLoader(false);
      onLoaded(); // Directly trigger onLoaded on mobile
    } else {
      // Show desktop loader
      setVideoSrc(loaderVideoDesktop);
      setObjectFitClass("object-contain");

      // const loaderVideoMobile = loaderVideoMobile; // Mobile loader commented
      // setVideoSrc(loaderVideoMobile);
      // setObjectFitClass("object-cover");
    }

    const handleVideoEnd = () => {
      onLoaded();
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

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className={`w-full h-full ${objectFitClass}`}
        autoPlay
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
