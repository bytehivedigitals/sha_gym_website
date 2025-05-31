import React, { useEffect, useRef, useState } from "react";
import loaderVideoDesktop from "../../assets/sha_loader.webm";
import loaderVideoMobile from "../../assets/mobile_loderfnl.mp4";
import loaderVideoMobileMp4 from "../../assets/mobile_loderfnl.mp4";
import "./Loader.css";

export default function Loader({ onLoaded }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(loaderVideoDesktop);
  const [objectFitClass, setObjectFitClass] = useState("object-contain");

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? loaderVideoMobile : loaderVideoDesktop);
    setObjectFitClass(isMobile ? "object-cover" : "object-contain");

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

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        className={`w-full h-full ${objectFitClass}`}
        autoPlay
        muted
        playsInline
        controls={false}
        preload="auto"
        webkit-media-controls="none"
      >
        {window.innerWidth < 768 ? (
          <>
            <source src={videoSrc} type="video/webm" />
            <source src={loaderVideoMobileMp4} type="video/mp4" />
          </>
        ) : (
          <source src={videoSrc} type="video/webm" />
        )}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
