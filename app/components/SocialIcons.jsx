import React from "react";

const SocialIcons = ({ isHovered }) => {
  return (
    <div
      className={isHovered ? "bg-[#181818] p-4 flex justify-center" : "hidden"}
    >
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <img src="/Images/contact.jpg" alt="LinkedIn" className="w-8 h-8" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2"
      >
        <img src="/Images/contact.jpg" alt="GitHub" className="w-8 h-8" />
      </a>
      {/* Add more social media icons as needed */}
    </div>
  );
};

export default SocialIcons;
