import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.png";

const DigitalStrategyCard = () => {
  return (
    <div className="max-w-5xl bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row md:flex-row gap-6 lg:gap-10 rounded-lg overflow-hidden md:items-start items-center  lg:items-start">
        <div className="md:w-2/3 lg:w-2/3 p-8 sm:p-10 flex flex-col justify-center text-center md:text-left lg:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#4F46E5] mb-3 md:mb-4">
            Digital Strategy Consulting
          </h2>
          <p className="text-black text-sm mb-6 max-w-full lg:max-w-[442px] mx-auto lg:mx-0">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="bg-[#F28D35] hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 w-full sm:w-48 md:w-36 mx-auto md:mx-0 lg:mx-0">
            LEARN MORE
          </button>
        </div>
        <div className="md:w-1/3 lg:w-1/3 w-full">
          <Image
            src={image1}
            alt="Web and mobile app development"
            width={414}
            height={414}
            className="w-full h-auto object-cover rounded-md"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DigitalStrategyCard;
