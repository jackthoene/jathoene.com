import React, { useState } from "react";

const ButtonGroup = () => {
  const [MouseOver, setMouseOver] = useState(false);

  const handleDownloadClick = () => {
    console.log("Download button clicked!");
    // Add your desired behavior for download button click event here
  };
  const handleMouseOver = () => {
    console.log("MouseOver");
    setMouseOver(true);
    // Add your desired behavior for download button click event here
  };
  const handleMouseOut = () => {
    console.log("MouseOut");
    setMouseOver(false);
    // Add your desired behavior for download button click event here
  };

  return (
    <div className="flex justify-end">
      <button
        className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-black"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        My Links
      </button>
      <button
        className="px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-800 text-white"
        onClick={handleDownloadClick}
      >
        Download CV
      </button>
    </div>
  );
};

export default ButtonGroup;
