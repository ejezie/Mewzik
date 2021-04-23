import React from "react";
import "./Sidebar.css";
import logo from "./images/mewzik.PNG";
import { useStateProvider } from "./StateProvider";

function Sidebar() {
  const [{ playlists }] = useStateProvider();
  console.log(playlists);

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" className="logo" />
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
        <i class="fal fa-list-music music-list"></i>Cool
      </div>
      <div className="playlist-text">
        <i class="fal fa-list-music music-list"></i>Rap
      </div>
      <div className="playlist-text">
        <i class="fal fa-list-music music-list"></i>Dance
      </div>
      <div className="playlist-text">
        <i class="fal fa-list-music music-list"></i>Love
      </div>
      {playlists?.items?.map((playlist) => (
        <div>{playlist.name}</div>
      ))}
    </div>
  );
}

export default Sidebar;
