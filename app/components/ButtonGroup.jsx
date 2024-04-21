// ButtonGroup.js
import React from "react";

const ButtonGroup = ({ setIsHovered }) => {
  const handleDownloadClick = () => {
    // Replace the URL with the correct path to your CV file
    const cvUrl = "/Assets/Jack_Thoene_Resume.docx";

    // Create a link element
    const link = document.createElement("a");
    link.href = cvUrl;

    // Set the download attribute to specify the file name when downloaded
    link.download = "Jack_Thoene_Resume.docx";

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically trigger a click event on the link
    link.click();

    // Clean up by removing the link from the body
    document.body.removeChild(link);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex justify-end">
      <button
        className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-500 hover:bg-slate-200 text-black"
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
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
