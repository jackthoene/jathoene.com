"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Military",
    id: "military",
    content: (
      <ul className="list-disc pl-2">
        <li>
          &quot;Marine Coder&quot;, Marine Innovation Unit - 2023 - Present
        </li>
        <li>Company Commander, CLR-17 Service Company</li>
        <li>Executive Officer, 1st MLG Communications Company</li>
        <li>Communications Officer, CLR-17, 1st MLG, Camp Pendleton</li>
      </ul>
    ),
  },
  {
    title: "Civilian",
    id: "civilian",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Graduate Researcher - VAK Sustainable Computing Lab - 2023 - Present
        </li>
        <li>Cyber Security Engineer (DoD Skillbridge) - 2023</li>
      </ul>
    ),
  },
  {
    title: "Volunteer",
    id: "volunteer",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Director of Information Technology - Patrol Base Abbate - 2023 -
          Present
        </li>
        <li>Feature Editor, XRDS, ACM - 2024 - Present</li>
        <li>
          Curriculum Developer and Mentor, Science Mentorship Institute - 2024
        </li>
        <li>Tech Support Volunteer, Omaha Library - 2023</li>
      </ul>
    ),
  },
];

const WorkSection = () => {
  const [tab, setTab] = useState("civilian"); // Default tab set to "military"
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
          src="/Images/work.jpg"
          alt="work image"
          width={1500}
          height={1500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            My work history
          </h2>
          <p className="text-base med:text-lg">
            • Versatile Engineer and Researcher experienced in a range of skills
            including Full Stack Engineering, Low Power Circuit Design, FPGA and
            ASIC design, Network Engineering, Cybersecurity, and Additive
            Manufacturing
          </p>
          <p className="text-base med:text-lg">
            • US Marine Corps Communications Officer: 7 Years of experience
            leading technical and innovative teams from the front
          </p>
          <p className="text-base med:text-lg">
            • Decisive leadership style that quickly moves from problem
            identification, analysis, bias for action and delivery of results.
          </p>
          <p className="text-base med:text-lg">
            • Dedicated to a sustainable future: researching new, innovative
            ways of computing and circularity in consumer-level products for a
            future that is more compatible with our surrounding environments
          </p>
          <p className="text-base med:text-lg">
            • Avid volunteer: 200 hours spent supporting Veterans non-profits
            and teaching engineering to low-opportunity demographics
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("military")}
              active={tab === "military"}
            >
              {" "}
              Military{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("civilian")}
              active={tab === "civilian"}
            >
              {" "}
              Civilian{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("volunteer")}
              active={tab === "volunteer"}
            >
              {"  "}
              Volunteer
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

export default WorkSection;
