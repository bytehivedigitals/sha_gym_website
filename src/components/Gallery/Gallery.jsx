import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gal1 from '../../assets/gym2.webp';
import gal2 from '../../assets/gym3.webp';
import gal3 from '../../assets/gym4.webp';

const galleryItems = [
  {
    image: gal1,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: false,
  },
  {
    image: gal2,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: true,
  },
  {
    image: gal3,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: false,
  },
  {
    image: gal2,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: true,
  },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="gallery-container relative h-[320vh]">
      <div className="sticky top-0 h-screen bg-black text-white flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full">
          <h2 className="text-end text-8xl font-bold mb-16 animate-fadeIn mr-12">GALLERY</h2>
          {galleryItems.map((item, index) => {
            const start = index / galleryItems.length;
            const end = (index + 1) / galleryItems.length;

            const y = useTransform(scrollYProgress, [start, end], index === 0 ? ['0%', '0%'] : ['80%', '0%']);
            const opacity = useTransform(scrollYProgress, [start, end - 0.05], index === 0 ? [1, 1] : [0, 1]);

            return (
              <motion.div
                key={index}
                className="absolute left-0 w-full h-full"
                style={{ y, opacity }}
              >
                <div className={`flex flex-col md:flex-row items-center justify-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                  <img
                    src={item.image}
                    alt={`Gallery ${index}`}
                    className="w-1/2 h-[90vh] object-cover shadow-lg"
                  />
                  <p className="w-1/2 h-[90vh] text-lg leading-relaxed text-center bg-neutral-900 tagline flex justify-center items-center p-10">
                    {item.text}
                  </p>
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