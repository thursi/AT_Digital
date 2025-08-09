import React from "react";
import Image from "next/image";

const HomeHero = () => {
  return (
    <div className="w-full bg-white">
      <section className="relative min-h-[80vh] sm:min-h-screen">
        <div className="absolute inset-0">
          <Image
            src="/HeroImage.png"
            alt="Business strategy meeting"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
        </div>
        <div className="relative z-10 flex items-end min-h-[80vh] sm:min-h-screen p-4 sm:p-6 lg:p-9">
          <div
            style={{
              background: "linear-gradient(90deg, #4DCA79 0%, #1CBDDD 100%)",
            }}
            className="text-white p-4 sm:p-6 rounded-sm w-full lg:w-2/3 xl:w-1/2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              We Crush Your Competitors, Goals, And Sales Records - Without The
              B.S.
            </h1>
            <button className="mt-6 bg-[#FF6F00] hover:bg-[#e65f00] text-white text-sm sm:text-base font-bold py-3 px-6 rounded transition-colors duration-300">
              GET FREE CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
