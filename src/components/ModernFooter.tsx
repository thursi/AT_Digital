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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            <Image
              src={Logo}
              alt="Logo"
              width={160}
              height={36}
              className="w-auto h-9"
            />
            <p className="text-white/90 text-base leading-relaxed">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-semibold text-xl">Our Technologies</h3>
            <ul className="space-y-3">
              {technologies.map((tech) => (
                <li key={tech}>
                  <span className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
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
    </footer>
  );
};

export default ModernFooter;
