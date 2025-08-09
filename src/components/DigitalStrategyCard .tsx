// ===================================

import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.png";

const DigitalStrategyCard = () => {
  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl max-w-4xl w-full mx-auto">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 lg:gap-8">
        <div className="order-2 sm:order-1 flex-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#4F46E5] mb-2 sm:mb-3 lg:mb-4">
            Digital Strategy Consulting
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for you.
          </p>
          <button className="bg-[#F28D35] hover:bg-orange-600 text-white px-4 sm:px-5 lg:px-6 py-2 rounded text-sm font-medium transition-colors duration-300 w-full sm:w-auto">
            LEARN MORE
          </button>
        </div>
        <div className="order-1 sm:order-2 w-full sm:w-32 md:w-40 lg:w-48 h-32 sm:h-32 md:h-40 lg:h-48 flex-shrink-0">
          <Image
            src={image1}
            alt="Digital Strategy Consulting"
            width={192}
            height={192}
            className="w-full h-full object-cover rounded-lg"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategyCard;
