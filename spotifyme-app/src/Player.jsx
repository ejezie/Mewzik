import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="play-side-wrapper">
        <Sidebar />
        <Body spotify={spotify}/>
      </div>
      <Footer />
    </div>
  );
}

export default Player;
