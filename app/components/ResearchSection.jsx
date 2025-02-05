"use client";
import React, { useState, useRef } from "react";
import ResearchCard from "./ResearchCard";
import ResearchTag from "./ResearchTag";
import { motion, useInView } from "framer-motion";

// Research data
const researchData = [
  {
    id: 1,
    title: "Smartwatch with Face-Unlock",
    description:
      "EE327 - Electronic System Design II. Project in V.2. ETA: Summer 2025",
    image: "/Images/Smartwatch.jpg",
    tag: ["All", "Class Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Convolutional Neural Processor for Binary Image Classification",
    description:
      "CE 493 - Advanced Low Power Digital and Mixed-signal Integrated Circuit Design",
    image: "/Images/393.png",
    tag: ["All", "Class Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Wifi-Enabled Webcam",
    description: "EE326 - Electronic System Design I",
    image: "/Images/coming-soon.png",
    tag: ["All", "Class Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Optimization of Helicopter Landing Zone Selection",
    description:
      "EE475 - Machine Learning: Foundations, Applications, and Algorithms",
    image: "/Images/Single_Polygon.png",
    tag: ["All", "Class Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bill Splitting and Payment App",
    description: "CS303 - Full Stack Software Engineering",
    image: "/Images/coming-soon.png",
    tag: ["All", "Class Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Novel Sensor for Precision Agriculture",
    description: "Publishing Soon! ETA: Spring 2025",
    image: "/Images/coming-soon.png",
    tag: ["All", "Research"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Intermittent Computing",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: [],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "FSEA",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: [],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Novel Battery System",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: [],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Novel 'Plant Wearable'",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: [],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "FPGA-Based FM Radio",
    description:
      "CE 387 - Real-Time Digital Systems Design and Verification with FPGAs",
    image: "/Images/387Radio.png",
    tag: [
      "All",
      "CE387 - Real-Time Digital Systems Design and Verification with FPGAs",
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 17,
    title: "FPGA - Sobel Edge Detection for Motion Sensing",
    description: "Publishing Soon!",
    image: "/Images/coming-soon.png",
    tag: [
      "All",
      "CE387 - Real-Time Digital Systems Design and Verification with FPGAs",
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 18,
    title: "Mixed Signal NFC Temperature Sensor in 45nm CMOS",
    description: "Publishing Soon!",
    image: "/Images/CMOS392.png",
    tag: ["All", "CE392 - VLSI Systems Design Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ResearchSection = () => {
  const [tag, setTag] = useState("All"); // Default to show all projects
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredresearch = researchData.filter((research) =>
    research.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="research">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Research, Engineering, and Other Projects
      </h2>

      {/* Tags Section */}
      <div className="text-white flex flex-row justify-center items-center gap-4 py-6">
        <ResearchTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ResearchTag
          onClick={handleTagChange}
          name="Research"
          isSelected={tag === "Research"}
        />
        <ResearchTag
          onClick={handleTagChange}
          name="Class Projects"
          isSelected={tag === "Class Projects"}
        />
      </div>

      {/* Responsive Grid */}
      <ul
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0"
      >
        {filteredresearch.map((research, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <ResearchCard
              title={research.title}
              description={research.description}
              imgUrl={research.image}
              gitUrl={research.gitUrl}
              previewUrl={research.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ResearchSection;
