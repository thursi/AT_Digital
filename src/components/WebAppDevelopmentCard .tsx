import React from "react";
import Image from "next/image";
import image2 from "../../public/images/image2.png";

const WebAppDevelopmentCard = () => {
  return (
    <div className="max-w-5xl bg-white mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 lg:gap-10 rounded-lg overflow-hidden">
        <div className="lg:w-1/3 w-full">
          <Image
            src={image2}
            alt="Web and mobile app development"
            width={414}
            height={414}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>

        <div className="lg:w-2/3 p-6 sm:p-8 flex flex-col justify-center items-center lg:items-start md:items-start text-center md:text-left lg:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-[#4F46E5] mb-3 md:mb-4">
            Web & Mobile App Development
          </h2>
          <p className="text-black text-sm mb-6 max-w-full lg:max-w-[450px]">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="bg-[#F28D35] hover:bg-orange-600 text-white text-sm px-5 py-2 rounded-md font-medium transition-colors duration-300 w-full sm:w-auto max-w-xs">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevelopmentCard;
