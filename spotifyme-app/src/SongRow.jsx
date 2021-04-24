import React from "react";
import "./SongRow.css";
import { useStateProvider } from "./StateProvider";

function SongRow({ track }) {
  const [{ recent }] = useStateProvider();
  return (
    <div className="song-row">
      <div className="song-row-con">
        <div className="con-album">
          <img src={track?.album.images[0].url} alt="album" />
        </div>
        <div className="con-name">
          <p>Album-{track?.album.name}</p>
          <p>Song-{track?.name}</p>
          <p>Artist-{track?.artists[0].name}</p>
          
        </div>
        <i class="fas fa-star"></i>
      </div>
      
    </div>
  );
}

export default SongRow;
