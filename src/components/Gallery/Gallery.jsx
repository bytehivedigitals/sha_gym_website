import React from 'react';
import gal1 from '../../assets/img1.webp'
import gal2 from '../../assets/img2.webp'
import gal3 from '../../assets/img3.webp'

const Gallery = () => {
  const galleryItems = [
    {
      image: gal1, 
      text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you’re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
      reverse: false,
    },
    {
      image: gal2, 
      text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you’re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
      reverse: true,
    },
    {
      image: gal3, 
      text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you’re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
      reverse: false,
    },
    {
      image: gal2, 
      text: 'Welcome to SHA GYM, your ultimate fitness destination. We are passionate about helping individuals at all fitness levels achieve their health and wellness goals. Whether you’re looking to build strength, lose weight, or improve your overall fitness, we are here to guide you every step of the way.',
      reverse: true,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-8">
      <h2 className="text-end text-4xl font-bold mb-16">GALLERY</h2>
      <div className="space-y-16">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              item.reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-8`}
          >
            <img
              src={item.image}
              alt={`Gallery Item ${index + 1}`}
              className="w-full md:w-1/2 rounded-lg"
            />
            <p className="w-full md:w-1/2 text-[2rem] leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;