import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="side-bar-option">
      <p className="side-bar-text">{title}</p>
    </div>
  );
}

export default SidebarOption;
