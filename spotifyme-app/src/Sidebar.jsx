import React from "react";
import "./Sidebar.css";
import logo from "./images/mewzik.PNG";
import { useStateProvider } from "./StateProvider";

function Sidebar({show, hideSide}) {
  const [{ playlists }] = useStateProvider();
  console.log(playlists);

// const showSidebar = () => setSidebar(!sideBar)
const sideBarClass = ["sidebar"];
if (show){
  sideBarClass.push("show")
}

  return (
    <div className={sideBarClass.join(" ")}>
      <div className="logo-cancel" onClick={hideSide}>
        <img src={logo} alt="logo" className="logo" />
        <i class="far fa-window-close cancel"></i>
      </div>
      <div className="side-opt-cont">
        <i class="fas fa-house-user side-icon"></i>
        Home
      </div>
      <div className="side-opt-cont">
        <i class="fas fa-search side-icon"></i>
        Search
      </div>
      <div className="side-opt-cont">
        <i class="far fa-books side-icon"></i>
        library
      </div>
      <br />
      <p className="playlist">PLAYLISTS</p>
      <hr />
      <div className="playlist-text">
        <i class="fas fa-dot-circle music-dot"></i>Cool
      </div>
      <div className="playlist-text">
        <i class="fas fa-dot-circle music-dot"></i>Rap
      </div>
      <div className="playlist-text">
        <i class="fas fa-dot-circle music-dot"></i>Dance
      </div>
      <div className="playlist-text">
        <i class="fas fa-dot-circle music-dot"></i>Love
      </div>
      {playlists?.items?.map((playlist) => (
        <div>{playlist.name}</div>
      ))}
    </div>
  );
}

export default Sidebar;
