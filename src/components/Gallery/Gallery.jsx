import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat, FaClock, FaWeight } from 'react-icons/fa';
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
  <FaDumbbell />, <FaRunning />, <FaHeartbeat />, <FaClock />, <FaWeight />
];

const Gallery = () => {
  const verticalRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: verticalRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className='gallery-container'>
      <h2 className="text-end text-4xl lg:text-8xl font-bold mb-8 lg:mb-16 animate-fadeIn mr-4 lg:mr-12">GALLERY</h2>

      {/* Desktop View */}
      <div ref={verticalRef} className="hidden md:block relative h-[360vh]">
        <div className="sticky top-[10%] h-screen bg-black text-white flex items-center justify-center overflow-hidden">
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

      {/* Mobile View */}
      <div className="md:hidden relative">
        <div className="flex sticky left-0 w-screen h-screen overflow-x-scroll">
          {galleryItems.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="flex-shrink-0 w-screen h-full"
              >
                <div className="w-full h-full flex flex-col">
                  <div className="h-1/2 w-full relative group">
                    <img
                      src={item.image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover shadow-lg filter grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="h-1/2 w-full leading-relaxed bg-neutral-900 tagline flex flex-col justify-center items-center p-6">
                    <ul className="space-y-5">
                      {item.text.map((point, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-2 text-white text-sm"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: idx * 0.1, ease: 'easeOut' }}
                        >
                          <span className="w-6 flex justify-center text-lg text-red-600">
                            {iconSet[idx % iconSet.length]}
                          </span>
                          <span>{point.trim()}</span>
                        </motion.li>

                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-end mt-4 mr-2 relative z-10">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ x: [0, 10, 0], opacity: [1, 1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex items-center gap-2 text-white text-sm bg-neutral-800 px-4 py-2 rounded-full shadow-lg"
          >
            <span className="animate-pulse text-red-500">&#8594;</span>
            <span>Swipe to explore</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;