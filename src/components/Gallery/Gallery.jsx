import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import gal1 from '../../assets/Gym-1.webp';
import gal2 from '../../assets/Gym-2.webp';
import gal3 from '../../assets/Gym-3.webp';
import gal4 from '../../assets/Gym-4.webp';
import gal5 from '../../assets/Gym-5.webp';
import gal6 from '../../assets/Gym-6.webp';

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
    image: gal4,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: true,
  },
  {
    image: gal5,
    text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you\'re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
    reverse: false,
  },
  {
    image: gal6,
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

            const y = useTransform(scrollYProgress, [start, end], index === 0 ? ['0%', '0%'] : ['80%', '0%']);
            const opacity = useTransform(scrollYProgress, [start, end - 0.05], index === 0 ? [1, 1] : [0, 1]);

            return (
              <motion.div
                key={index}
                className="absolute left-0 w-full h-full"
                style={{ y, opacity }}
              >
                <div className={`flex flex-col md:flex-row items-center justify-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-1/2 h-[90vh] relative group">
                    <img
                      src={item.image}
                      alt={`Gallery ${index}`}
                      className="w-full h-full object-cover shadow-lg filter grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="w-1/2 h-[90vh] text-lg leading-relaxed text-center bg-neutral-900 tagline flex justify-center items-center p-10">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Mobile View */}
      <div className="lg:hidden relative h-[70vh] bg-black text-white overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <button 
            onClick={prevSlide}
            className="absolute left-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
          >
            <FaArrowLeft size={24} />
          </button>
          
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-[90%] relative group">
              <img
                src={galleryItems[currentIndex].image}
                alt={`Gallery ${currentIndex}`}
                className="w-full h-full object-cover shadow-lg filter grayscale transition-all duration-500 group-hover:grayscale-0"
              />
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;