"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Formal",
    id: "Formal",
    content: (
      <ul className="list-disc pl-2">
        <li>
          2014 - 2018: B.S. Control Systems and Robotics - U.S. Naval Academy
        </li>
        <li>
          2023 - 2025: M.S. Electrical Engineering - Northwestern University
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "Certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Security Plus - Comptia</li>
        <li> Data Scientist in Python - DataCamp</li>
        {/* <li>Security Plus - Comptia</li>
        <li>Certified Ethical Hacker - ECCouncil</li>
        <li>Project Management Professional - PMI</li>
        <li>Fundamentals of Engineering, Electrical and Computer - NCEES</li> */}
      </ul>
    ),
  },
  {
    title: "Other",
    id: "Other",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Basic Officer&apos;s Course - U.S. Marine Corps Base Quantico,
          Virginia - 2018 - 2019
        </li>
        <li>
          Basic Communication&apos;s Officer Course - Marine Air Ground Combat
          Center Twentynine Palms, California - 2019
        </li>
        <li>
          Winter Mountain Leader&apos;s Course - USMC Mountain Warfare Training
          Center, Bridgeport, California - 2021
        </li>
        <li>
          Mountain Communications Course - USMC Mountain Warfare Training
          Center, Bridgeport, California - 2021
        </li>
      </ul>
    ),
  },
];

const EducationSection = () => {
  const [tab, setTab] = useState("Formal"); // Default tab set to "military"
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-white"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
        <Image
          src="/Images/education.jpg"
          alt="Education image"
          width={1500}
          height={1500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Education history
          </h2>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("Formal")}
              active={tab === "Formal"}
            >
              {" "}
              Formal{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Certifications")}
              active={tab === "Certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Other")}
              active={tab === "Other"}
            >
              {"  "}
              Other
              {"  "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default EducationSection;
