import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaDumbbell, FaRunning, FaHeartbeat, FaClock, FaWeight } from 'react-icons/fa';
import gal1 from '../../assets/Gym-1.webp';
import gal2 from '../../assets/Gym-2.webp';
import gal3 from '../../assets/Gym-3.webp';
import gal4 from '../../assets/Gym-4.webp';
import gal5 from '../../assets/Gym-5.webp';
import gal6 from '../../assets/Gym-6.webp';

const galleryItems = [
  {
    image: gal1,
    text: [
      "High-end cardio machines, free weights, and resistance equipment",
      "Spacious washrooms and restful lounge zones",
      "Air-conditioned workout environment",
      "Group fitness rooms for classes",
      "Secure and well-lit interiors with round-the-clock CCTV"
    ],
    reverse: false,
  },
  {
    image: gal2,
    text: [
      "One-on-one coaching with certified personal trainers in Kozhikode",
      "Group classes including strength training, mobility, and more",
      "Regular progress tracking and motivation sessions"
    ],
    reverse: true,
  },
  {
    image: gal3,
    text: [
      "Workout any time—day or night—with secure entry access",
      "Ideal for working professionals, students, and shift workers",
      "Fully monitored facility to ensure safe and private workouts"
    ],
    reverse: false,
  },
  {
    image: gal4,
    text: [
      "Supportive community culture with shared fitness goals",
      "Success stories that motivate",
      "Trainer-led challenges, events & open fitness days"
    ],
    reverse: true,
  },
  {
    image: gal5,
    text: [
      "24/7 access for ultimate workout flexibility",
      "State-of-the-art equipment for strength and cardio training",
      "Certified personal trainers for custom fitness plans",
      "Dynamic group classes for all fitness levels",
      "Clean, secure, and motivating environment"
    ],
    reverse: false,
  },
  {
    image: gal6,
    text: [
      "Holistic wellness coaching beyond just workouts",
      "Personalized nutrition and meal planning support",
      "Guidance for building sustainable healthy habits",
      "Access to fitness tracking and progress assessments",
      "Supportive trainers to keep you motivated and accountable"
    ],
    reverse: true,
  },
];

const iconSet = [
  <FaDumbbell />,
  <FaRunning />,
  <FaHeartbeat />,
  <FaClock />,
  <FaWeight />
];

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <div ref={containerRef} className="gallery-container relative lg:h-[360vh] h-auto">
      <h2 className="text-end text-4xl lg:text-8xl font-bold mb-8 lg:mb-16 animate-fadeIn mr-4 lg:mr-12">GALLERY</h2>

      {/* Desktop View */}
      <div className="hidden lg:block sticky top-[10%] h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          {galleryItems.map((item, index) => {
            const start = index / galleryItems.length;
            const end = (index + 1) / galleryItems.length;

            const y = useTransform(scrollYProgress, [start, end], index === 0 ? ['0%', '0%'] : ['100%', '0%']);

            return (
              <motion.div
                key={index}
                className="absolute left-0 w-full h-full"
                style={{ y }}
              >
                <div className={`flex flex-col md:flex-row items-center justify-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-1/2 h-[90vh] relative group">
                    <img
                      src={item.image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover shadow-lg filter grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="w-1/2 h-[90vh] leading-relaxed text-left bg-neutral-900 tagline flex justify-center items-center p-10">
                    <ul className="space-y-12">
                      {item.text.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-5 text-white text-xl cursor-default"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                          whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.2, ease: 'easeInOut' },
                          }}
                        >
                          <span className="text-4xl text-red-600">
                            {iconSet[idx % iconSet.length]}
                          </span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;