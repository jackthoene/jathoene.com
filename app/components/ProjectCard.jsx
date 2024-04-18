import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="h-96 md:h-120 w-full relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-50 transition-all duration-500">
          <Link
            href="/"
            className=" h-14 w-14 border-2 relative rounded-full border-white"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 text-center">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-white text-l">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
