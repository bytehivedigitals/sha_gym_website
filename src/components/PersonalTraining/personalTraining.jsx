import React from "react";

const packages = [
  {
    name: "SILVER",
    price: "8499",
    bg: "bg-gray-500/80",
    overlay: "bg-gray-800/40",
    button: "bg-white text-gray-800",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "GOLD",
    price: "9999",
    bg: "bg-yellow-700/80",
    overlay: "bg-yellow-900/40",
    button: "bg-white text-yellow-700",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "BRONZE",
    price: "6999",
    bg: "bg-orange-900/80",
    overlay: "bg-orange-950/40",
    button: "bg-white text-orange-950",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

export default function PersonalTrainingPackages() {
  return (
    <div className="personal-trainer-section min-h-screen bg-[black] flex flex-col items-center px-2 py-30">
      <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-wide font-['Russo_One',sans-serif]">
        Personal Training <br className="hidden xs:block" /> Packages
      </h1>
      <p className="text-gray-400 font-semibold mt-6 text-center tracking-wide text-base xs:text-lg md:text-xl max-w-xl">
        We're Your Partner In Achieving A Healthier, Stronger, And More Confident You.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 mt-10 md:mt-16 w-full items-center justify-center">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`
              relative rounded-3xl flex flex-col items-center justify-center shadow-xl overflow-hidden
              ${pkg.bg}
              transition-all duration-300
              ${
                i === 1
                  ? "w-[90vw] xs:w-[80vw] sm:w-[350px] md:w-[370px] lg:w-[400px] h-[420px] xs:h-[480px] md:h-[530px] lg:h-[580px] scale-105 z-10"
                  : "w-[90vw] xs:w-[80vw] sm:w-[300px] md:w-[320px] lg:w-[350px] h-[350px] xs:h-[410px] md:h-[470px] lg:h-[500px] md:mt-4"
              }
            `}
          >
            {/* Background Image with Overlay */}
            <img
              src={pkg.img}
              alt={pkg.name}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className={`absolute inset-0 ${pkg.overlay}`} />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-2 xs:px-4 sm:px-7 py-6 h-full justify-between">
              <div>
                <div className="text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif]">
                  {pkg.name}
                </div>
                <div className="text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif] mt-4">
                  {pkg.price}
                </div>
              </div>
              <p className="text-white text-xs xs:text-sm md:text-base font-semibold text-center mt-4 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button
                className={`mt-2 px-6 xs:px-8 py-2 rounded-md font-bold text-base xs:text-lg font-['Russo_One',sans-serif] ${pkg.button} transition duration-200 shadow hover:scale-105 cursor-pointer`}
              >
                JOIN NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}