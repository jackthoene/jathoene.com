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
      transition={{ duration: 0.5 }}
      className="relative h-screen"
      style={{
        backgroundImage: "url('/Images/hero-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="absolute inset-0 bg-[#181818] opacity-75"> */}
      <div>{/* Overlay */}</div>
      <div className="grid grid-cols-1 sm:grid-cols-12 relative h-full z-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <div className="absolute top-0 right-0 mt-20 mr-10">
            <h1 className="text-white mb-4 text-xl lg:text-6xl font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                Hello, I'm{" "}
              </span>
              <br></br>
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
            <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center sm:justify-start">
              <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-black">
                Hire me
              </button>
              <button className="px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-800 text-white">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 hidden sm:block"></div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
