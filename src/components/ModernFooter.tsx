"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

const ModernFooter = () => {
  const technologies = ["ReactJS", "Gatsby", "NextJS", "NodeJS"];
  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
  ];

  return (
    <footer className="bg-[#4F46E5] text-white">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left section */}
          <div className="lg:w-[522px] pt-6">
            <div className="space-y-4 max-w-md sm:max-w-full">
              <Image
                src={Logo}
                alt="Logo"
                width={160}
                height={36}
                className="w-auto h-9"
              />
              <p className="text-white text-sm leading-relaxed max-w-[360px] sm:max-w-full">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-start lg:justify-end pt-6 lg:pt-6">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-24">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">
                  Our Technologies
                </h3>
                <ul className="space-y-2">
                  {technologies.map((tech) => (
                    <li key={tech}>
                      <span className="text-white text-sm hover:text-white/80 transition-colors duration-300 cursor-pointer">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-white">
                  Our Services
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li key={service}>
                      <span className="text-white text-sm hover:text-white/80 transition-colors duration-300 cursor-pointer">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 flex justify-center">
          <div className="w-full max-w-[630px] border-t border-white flex justify-center px-4">
            <div className="pt-4 flex flex-row justify-center items-center gap-4 sm:gap-8 flex-wrap">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
