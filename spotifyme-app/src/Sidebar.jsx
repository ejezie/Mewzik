import React from "react";
import "./Sidebar.css";
import logo from "./images/mewzik.PNG";
import SidebarOption from "./SidebarOption";




function Sidebar() {
  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
      <SidebarOption title="Home" />
      <SidebarOption title="Search" />
      <SidebarOption title="Your library" />
    </div>
  );
}

export default Sidebar;
