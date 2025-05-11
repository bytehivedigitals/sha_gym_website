import React from "react";
import card from "../../assets/bodybuilder-showing-his-muscles_136403-5542.avif";
import card1 from "../../assets/plan1.png";
import card2 from "../../assets/plan2.png";
import "./CardCarousel.css"; // Custom styling if needed

const cards = [
  { id: 1, title: "Card 1", img: card },
  { id: 2, title: "Card 2", img: card1 },
  { id: 3, title: "Card 3", img: card2 },
  { id: 4, title: "Card 4", img: card },
  { id: 5, title: "Card 5", img: card },
];

const CardCarousel = () => {
  return (
    <div className="carousel-wrapper overflow-hidden relative">
      <div className="carousel-track flex">
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="carousel-card w-[300px] md:w-[400px] flex-shrink-0 px-1"
          >
            <div className="bg-black rounded-lg p-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-64 md:h-[35rem] object-cover rounded-lg"
              />
              <div className="text-center mt-4">
                <button className="px-4 py-2 bg-white hover:bg-gray-300 text-black rounded w-full text-lg font-semibold flex justify-between items-center">
                  <span>See Plans</span>
                  <span>&gt;&gt;</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
