import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";


export default function Nav() {
  const [isEnglish, setIsEnglish] = useState(true); // State to track the selected language

  const handleToggle = () => {
    setIsEnglish((prev) => !prev); // Toggle between English and another language
  };

  return (
    <div className="nav-container">
      <div className="link-container">
        <a href="">Home</a>
        <a href="">Contact</a>
      </div>
      <div className="logocontainer"></div>
      <div className="menu-container">
        <div className="setting-logo">
          <IoMdSettings />
        </div>
        <div className="language-title">
          <span>Language Switch</span>
        </div>
        <div className="toggle" onClick={handleToggle} style={{ cursor: "pointer",animationDuration:"2s" }}>
          {isEnglish ? <FaToggleOn color="green" size={30} /> : <FaToggleOff color="white" size={30} />}
        </div>
      </div>
      <div className="language-display">
        <p>Current Language: {isEnglish ? "English" : "Swahili"}</p>
      </div>
    </div>
  );
}
