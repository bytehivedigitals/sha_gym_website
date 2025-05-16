import React, { useEffect, useRef, useState } from 'react';
import gal1 from '../../assets/gym2.webp';
import gal2 from '../../assets/gym3.webp';
import gal3 from '../../assets/gym4.webp';

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState(1);
  const galleryRef = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Show items one by one with delay
            galleryItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => Math.max(prev, index + 1));
              }, index * 300); // 300ms delay between each item
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white py-16 px-8" ref={galleryRef}>
      <h2 className="text-end text-4xl font-bold mb-16 animate-fadeIn">GALLERY</h2>
      <div className="space-y-16">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-8 transition-all duration-1000 ease-in-out ${
              visibleItems > index 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src={item.image}
              alt={`Gallery Item ${index + 1}`}
              className={`w-full md:w-1/2 rounded-lg transition-all duration-1000 ease-in-out ${
                visibleItems > index 
                  ? 'scale-100 opacity-100' 
                  : 'scale-95 opacity-0'
              }`}
            />
            <p 
              className={`w-full md:w-1/2 text-[1.300rem] leading-relaxed transition-all duration-1000 ease-in-out ${
                visibleItems > index 
                  ? 'translate-x-0 opacity-100' 
                  : item.reverse ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0'
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;