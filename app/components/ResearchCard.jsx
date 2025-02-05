import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ResearchCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-[#181818] flex flex-col group">
      {/* Image Background Container */}
      <div
        className="relative w-full h-52 md:h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {/* Overlay with Icons */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300">
          <Link
            href={gitUrl}
            className="h-12 w-12 mx-2 border-2 relative rounded-full border-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 mx-2 border-2 relative rounded-full border-[#ADB7BE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-white py-6 px-4 flex-grow flex flex-col">
        <h5 className="text-lg font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ResearchCard;
