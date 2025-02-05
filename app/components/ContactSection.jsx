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
        <li>jack (dot) thoene (at) usmc.mil</li>
      </ul>
    ),
  },
  {
    title: "Civilian",
    id: "civilian",
    content: (
      <ul className="list-disc pl-2">
        <li>jackthoene2025 (at) u.northwestern.edu</li>
      </ul>
    ),
  },
];

const ContactSection = () => {
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
          src="/Images/contact.jpg"
          alt="Contact image"
          width={1500}
          height={1500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let&rsquo;s Connect
          </h2>
          <p className="text-base med:text-lg">
            Want to collaborate and make the world a better place? Have an idea
            that makes our Nation safer? Let&rsquo;s work together.
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
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
