import React from "react";
import "./Sidebar.css";
import logo from "./images/mewzik.PNG";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default Sidebar;
