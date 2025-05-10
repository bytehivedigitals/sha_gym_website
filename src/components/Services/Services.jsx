import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import card from "../../assets/bodybuilder-showing-his-muscles_136403-5542.avif";
import trainer1 from "../../assets/img3.webp";
import trainer2 from "../../assets/img1.webp";
import trainer3 from "../../assets/img2.webp";
// import trainer4 from "../../assets/img4.webp";
// import trainer5 from "../../assets/img5.webp";

const Services = () => {
  const cards = [
    { id: 1, title: "Card 1", img: card },
    { id: 2, title: "Card 2", img: card },
    { id: 3, title: "Card 3", img: card },
    { id: 4, title: "Card 4", img: card },
    { id: 5, title: "Card 5", img: card },
    { id: 6, title: "Card 6", img: card },
    { id: 7, title: "Card 7", img: card },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0); // State for card carousel
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0); // State for testimonial carousel

  const totalVisibleCards = 3; // Number of cards visible at a time
  const maxCardIndex = cards.length - totalVisibleCards;

  const trainers = [
    { id: 1, name: "Abhiram", img: trainer1 },
    { id: 2, name: "Arun Raj", img: trainer2 },
    { id: 3, name: "Abhijith", img: trainer3 },
  ];

  const testimonials = [
    {
      id: 1,
      text: "I Love The Variety Of Workouts On Fit Fusion. Whether It's HIIT, Yoga, Or Strength Training, There's Always Something New To Try. The Progress Tracking Tools Keep Me Motivated!",
      author: "Rizwan P S",
      img: trainer1,
    },
    {
      id: 2,
      text: "Thanks to Fit Fusion, I've achieved my fitness goals faster than I ever thought possible. The trainers are so helpful and inspiring!",
      author: "Neha J",
      img: trainer2,
    },
    {
      id: 3,
      text: "Fit Fusion has changed my life. The programs are personalized and the trainers are very knowledgeable.",
      author: "Rahul K",
      img: trainer3,
    },
    {
      id: 4,
      text: "I feel stronger and healthier every day thanks to the amazing workouts and advice I get from Fit Fusion.",
      author: "Sanjana M",
      img: trainer1,
    },
    {
      id: 5,
      text: "The best decision I ever made was joining Fit Fusion. The community and trainers are unmatched.",
      author: "Arjun V",
      img: trainer2,
    },
  ];

  const maxTestimonialIndex = testimonials.length - 1;

  // Card Carousel Handlers
  const handleSwipeLeft = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex < maxCardIndex ? prevIndex + 1 : maxCardIndex
    );
  };

  const handleSwipeRight = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  // Testimonial Carousel Handlers
  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex < maxTestimonialIndex ? prevIndex + 1 : 0
    );
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : maxTestimonialIndex
    );
  };

  return (
    <div className="relative w-full max-w-[85%] mx-auto bg-black text-white p-4 rounded-[3rem] mt-[7rem]">
      {/* Swipeable Section */}
      <div
        {...handlers}
        className="relative overflow-hidden p-4 h-[70rem] rounded-[3rem]"
      >
        <h2 className="text-center text-3xl font-bold mb-6 text-[5rem]">
          Discover <br /> What Sets Us Apart
        </h2>
        <p className="text-center text-lg mb-4 text-[1.100rem]">
          We Deliver A Fitness Experience That's Truly One-Of-A-Kind. <br />
          Explore How We Help You Achieve Your Goals Faster And Smarter.
        </p>
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handleSwipeRight}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 rounded-full text-white hover:bg-gray-600"
          >
            &#8592;
          </button>

          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentCardIndex * (100 / totalVisibleCards)
                }%)`,
              }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="min-w-1/3 flex-shrink-0 px-2"
                  style={{ flex: "0 0 33.3333%" }}
                >
                  <div className="bg-black rounded-lg p-4 h-[41rem]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-[35rem] object-cover rounded-lg"
                    />
                    <div className="text-center">
                      <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded w-full h-[4rem] text-[1.50rem] font-semibold flex justify-between items-center cursor-pointer">
                        <span>See Plans</span>
                        <span>&gt;&gt;</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleSwipeLeft}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 rounded-full text-white hover:bg-gray-600"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Trainer Profiles Section */}
      <div className="trainer-section mt-[5rem]">
        <h2 className="text-center text-[2rem] sm:text-[5rem] font-bold mb-2">
          Your Fitness <br /> Goals, Their Expertise
        </h2>
        <p className="text-center text-[1rem] sm:text-[1.3rem] mb-8">
          Our Team Of Certified Trainers Brings Unparalleled Expertise To Help
          You Achieve Your Fitness Goals
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10 sm:gap-20">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="text-center">
              <img
                src={trainer.img}
                alt={trainer.name}
                className="rounded-lg w-full sm:w-[60rem] h-[20rem] sm:h-[40rem] object-cover mt-[2rem]"
              />
              <h3 className="text-lg sm:text-xl font-bold mt-4">
                {trainer.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Loading Animation */}
      <div className="loading-section mt-[3rem] flex justify-center items-center">
        <div className="loading-animation flex gap-2">
          <div className="w-6 h-6 bg-white rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-500 rounded animate-pulse"></div>
          <div className="w-6 h-6 bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="text-center mt-10">
        <h1 className="text-[5rem] font-bold">
          Your Fitness <br /> Goals, Their Expertise
        </h1>
        <p className="mt-4 text-[1rem]">
          See How Our Customers Have Achieved Their Goals And Let Their Journeys
          Inspire Yours!
        </p>
      </div>

      {/* Testimonialimage */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-16 gap-10 relative">
        {/* Left Image */}
        <div className="relative w-full lg:w-1/3">
          <img
            src={testimonials[currentTestimonialIndex].img}
            alt={`Trainer ${currentTestimonialIndex}`}
            className="rounded-lg object-cover w-full h-[35rem] lg:h-[40rem] shadow-lg"
          />
        </div>

        {/* Testimonial */}
        <div className="absolute bottom-[-4rem] left-[35rem] transform -translate-x-1/2 w-[30%] bg-gray-800 rounded-lg p-8 text-center z-10">
          <p className="text-lg text-white">
            "{testimonials[currentTestimonialIndex].text}"
          </p>
          <p className="mt-6 font-semibold text-lg text-white">
            - {testimonials[currentTestimonialIndex].author}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="relative flex justify-center lg:w-2/3 gap-4 mt-8 lg:mb-[30rem]">
          <button
            onClick={handlePreviousTestimonial}
            className="absolute left-[10rem] bottom-[-6rem] text-2xl p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 z-20"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            className="absolute right-[50rem] bottom-[-6rem] text-2xl p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 z-20"
            aria-label="Next"
            onClick={handleNextTestimonial}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
