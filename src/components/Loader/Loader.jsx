import React, { useEffect, useRef, useState } from "react";
import "./Loader.css";
import loaderVideoDesktop from "../../assets/sha_loader.webm";
import loaderVideoMobile from "../../assets/mobile_loderfnl.mp4";
import loaderVideoMobileMp4 from "../../assets/mobile_loderfnl.mp4";

export default function Loader({ onLoaded }) {
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(loaderVideoDesktop);
  const [objectFitClass, setObjectFitClass] = useState("object-contain");
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) || 
             (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));

    const isMobile = window.innerWidth < 768;
    setVideoSrc(isMobile ? loaderVideoMobile : loaderVideoDesktop);
    setObjectFitClass(isMobile ? "object-cover" : "object-contain");

    const handleVideoEnd = () => {
      onLoaded();
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', () => {
        // For iOS, we sometimes need to trigger play programmatically
        const playPromise = videoElement.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay prevented:", error);
            // Fallback: Show play button or handle accordingly
          });
        }
      });

      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
        videoElement.removeEventListener('loadedmetadata', () => {});
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
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        x-webkit-airplay="allow"
        webkit-playsinline="true"
      >
        {window.innerWidth < 768 ? (
          <>
            <source src={loaderVideoMobile} type="video/webm" />
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