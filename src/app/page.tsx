"use client";
import DigitalStrategyCard from "../components/DigitalStrategyCard ";
import FAQ from "../components/FAQ";
import HomeHero from "../components/HomeHero";
import WebAppDevelopmentCard from "../components/WebAppDevelopmentCard ";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="w-full">
        <HomeHero />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <WebAppDevelopmentCard />
        <DigitalStrategyCard />
      </div>
      <FAQ />
    </main>
  );
}
