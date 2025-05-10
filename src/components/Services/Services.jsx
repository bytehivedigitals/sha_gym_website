import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import card from "../../assets/bodybuilder-showing-his-muscles_136403-5542.avif";

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

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalVisibleCards = 3; // Number of cards visible at a time
  const maxIndex = cards.length - totalVisibleCards;

  // Function to handle swiping left (next card)
  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : maxIndex));
  };

  // Function to handle swiping right (previous card)
  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  // Ensure swipe handlers are correctly wired
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-[85%] mx-auto overflow-hidden bg-black text-white p-4 h-[70rem] rounded-[3rem] mt-[7rem]"
    >
      <h2 className="text-center text-3xl font-bold mb-6 text-[5rem]">Discover <br /> What Sets Us Apart</h2>
      <p className="text-center text-lg mb-4 text-[1.100rem]">
        We Deliver A Fitness Experience That's Truly One-OF-A-Kind. <br />
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
              transform: `translateX(-${currentIndex * (100 / totalVisibleCards)}%)`,
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
  );
};

export default Services;