import React from "react";

const ResearchTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-primary-500 bg-primary-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border px-4 py-2 text-sm sm:text-base cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ResearchTag;
