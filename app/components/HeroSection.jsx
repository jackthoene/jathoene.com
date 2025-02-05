"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative w-full min-h-screen pt-20" // Adjust padding to account for navbar height
      style={{
        backgroundImage: "url('/Images/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Top-right text container */}
      <div className="absolute top-24 right-10 z-10 text-right">
        <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
            Hello, I&apos;m{" "}
          </span>
          <TypeAnimation
            sequence={[
              "Jack",
              1000,
              "A Mountaineer",
              1000,
              "A Marine",
              1000,
              "An Engineer",
              1000,
              "A Researcher",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mt-4">
          I&apos;m glad you made it here | Let&apos;s build something great
          together
        </p>
      </div>
    </motion.section>
  );
};

export default HeroSection;
