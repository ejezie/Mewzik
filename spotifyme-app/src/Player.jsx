import React, {useState} from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Navbar from "./Navbar"

function Player({ spotify }) {
const [sideBarToggle, setSideBarToggle] = useState()
const showSide = () => setSideBarToggle(true);
const hideSide = () => setSideBarToggle(false);
  return (
    <div className="player">
      <Navbar show={sideBarToggle} showSide={showSide}/>
      <div className="play-side-wrapper">
        <Sidebar show={sideBarToggle} hideSide={hideSide}/>
        <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  );
}

export default Player;
