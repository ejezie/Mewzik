import React from "react";
import "./Footer.css";
import albumImage from "./images/theweeknd.jpg";

function Footer() {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src={albumImage} alt="album-image" className="album-image" />
        <p>The Weeknd</p>
      </div>
      <div className="center-footer">
        <i class="fas fa-repeat play-con-icon"></i>
        <i class="fas fa-step-backward play-con-icon"></i>
        <i class="fas fa-fast-backward play-con-icon backf"></i>
        <i class="fas fa-play-circle play-con-icon play"></i>
        <i class="fas fa-fast-forward play-con-icon fastf"></i>
        <i class="fas fa-step-forward play-con-icon"></i>
        <i class="fas fa-random play-con-icon"></i>
      </div>
      <div className="right-footer">
        <i class="fas fa-list-ul music-list"></i>
        <i class="fas fa-volume-up volume-up"></i>
        <input type="range" min="1" max="100" value="9" className="slider"></input>
      </div>
    </div>
  );
}

export default Footer;
