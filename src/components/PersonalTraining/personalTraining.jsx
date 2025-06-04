import React from "react";
import pre1 from "../../assets/Gym-5.webp";
import pre2 from "../../assets/pre1.webp";
import pre3 from "../../assets/pre2.webp";

const packages = [
  {
    name: "GOLD",
    price: "₹9,999",
    bg: "bg-yellow-700/80",
    overlay: "bg-yellow-900/40",
    button: "bg-white text-yellow-700",
    img: pre1,
    collection: [
      "Premium tier with full customization",
      "Daily supervision and workouts",
      "Nutritional guidance + lifestyle mentoring",
      "26 sessions per month",
      "Weekly one day off",
    ],
  },
  {
    name: "SILVER",
    price: "₹8,499",
    bg: "bg-gray-500/80",
    overlay: "bg-gray-800/40",
    button: "bg-white text-gray-800",
    img: pre3,
    collection: [
      "Moderate guidance on form and nutrition",
      "Ideal for those who need some push & planning",
      "26 sessions per month",
      "Weekly one day off",
    ],
  },
  {
    name: "BRONZE",
    price: "₹6,999",
    bg: "bg-orange-900/80",
    overlay: "bg-orange-950/40",
    button: "bg-white text-orange-950",
    img: pre2,
    collection: [
      "Starter-friendly package",
      "Technique correction, confidence-building support",
      "26 sessions per month",
      "Weekly one day off",
    ],
  },
];

export default function PersonalTrainingPackages({ id }) {
  // WhatsApp message template
  const whatsappMessage = (pkgName) => {
    return `Hi, I'm interested in the ${pkgName} Personal Training Package. Could you please provide more details?`;
  };

  const whatsappNumber = "917994237316";

  return (
    <div
      id={id}
      className="personal-trainer-section min-h-screen bg-[black] flex flex-col items-center px-2 py-30"
    >
      <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-center tracking-wide font-['Russo_One',sans-serif]">
        Personal Training <br className="hidden xs:block" /> Packages
      </h1>
      <p className="text-gray-400 font-semibold mt-6 text-center tracking-wide text-base xs:text-lg md:text-xl max-w-xl">
        We're Your Partner In Achieving A Healthier, Stronger, And More
        Confident You.
      </p>

      {/* Mobile View (column layout) */}
      <div className="md:hidden w-full max-w-md mt-10 space-y-8 px-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`
              relative rounded-3xl flex flex-col items-center justify-center shadow-xl overflow-hidden
              ${pkg.bg}
              w-full h-[480px]
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
            <div className="relative z-10 flex flex-col items-center px-4 py-6 h-full justify-between">
              <div>
                <div className="text-white text-4xl font-extrabold text-center font-['Russo_One',sans-serif]">
                  {pkg.name}
                </div>
                <div className="text-white text-6xl font-extrabold text-center font-['Russo_One',sans-serif] mt-4">
                  {pkg.price}
                </div>
              </div>
              <div>
                <ul className="text-white text-4x1 font-semibold text-center mt-4 mb-8 space-y-3">
                  {pkg.collection.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage(pkg.name)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 px-8 py-2 rounded-md font-bold text-lg font-['Russo_One',sans-serif] ${pkg.button} transition duration-200 shadow hover:scale-105 cursor-pointer`}
              >
                JOIN NOW
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View (all cards in row) */}
      <div className="hidden md:flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 mt-10 md:mt-16 w-full items-center justify-center">
        {packages.map((pkg, i) => (
          <div
            key={pkg.name}
            className={`
              relative rounded-3xl flex flex-col items-center justify-center shadow-xl overflow-hidden
              ${pkg.bg}
              transition-all duration-300
              ${
                i === 1
                  ? "w-[400px] lg:w-[440px] h-[550px] lg:h-[600px] scale-105 z-10"
                  : "w-[380px] lg:w-[400px] h-[520px] lg:h-[540px] mt-4"
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
            <div className="relative z-10 flex flex-col items-center px-7 py-6 h-full justify-between">
              <div>
                <div className="text-white text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif]">
                  {pkg.name}
                </div>
                <div className="text-white text-5xl lg:text-6xl font-extrabold text-center font-['Russo_One',sans-serif] mt-4">
                  {pkg.price}
                </div>
              </div>
              <div>
                <ul className="text-white text-xl font-semibold text-center mt-4 mb-8 space-y-4 list-inside">
                  {pkg.collection.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage(pkg.name)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 px-8 py-2 rounded-md font-bold text-lg font-['Russo_One',sans-serif] ${pkg.button} transition duration-200 shadow hover:scale-105 cursor-pointer`}
              >
                JOIN NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
