import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const MapSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [10, -10, 0],
        opacity: [0, 1],
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[350px] overflow-hidden"
    >
      {/* Google Map Embed - exact location with dark filter */}
      <iframe
        title="SHA Gym Location"
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7427228903794!2d75.78377487536629!3d11.280313088900735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65f47cbcba6e1%3A0xc6dd234b8b67e338!2sSHA%20HEALTH%20STUDIO!5e0!3m2!1sen!2sin!4v1747742151040!5m2!1sen!2sin" 
        src="https://maps.google.com/maps?ll=11.2803131,75.7863498&z=17&t=m&output=embed"
        width="100%"
        height="100%"
        style={{
          border: 0,
          filter: "grayscale(100%) brightness(50%) contrast(130%)",
          pointerEvents: "none"
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* FIND US button */}
      <a
        href="https://maps.app.goo.gl/ez6yfJJLa33y4Dsd7"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 bg-red-600 text-white px-8 py-3 rounded font-semibold shadow-lg hover:bg-orange-700 hover:scale-105 transition duration-300 z-20"
      >
        FIND US
      </a>

      {/* Animated Marker */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10"
        animate={controls}
        initial={{ y: 10, opacity: 0 }}
      >
        <svg
          className="w-15 h-15 text-red-600 drop-shadow"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
        </svg>
      </motion.div>
    </div>
  );
};

export default MapSection;