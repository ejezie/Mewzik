import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateProvider } from "./StateProvider";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ recent }] = useStateProvider();
  console.log(recent);

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body-show">
        <div className="body-info">
          <img src={recent?.images[0].url} alt="" />
          <div className="info-text">
            <strong>PLAYLIST</strong>
            <h2>Recently Played</h2>
            <h3>{recent?.name}</h3>
          </div>
        </div>
      </div>
      <div className="body-songs">
        {recent?.tracks.items.map(item => (
          <SongRow track = {item.track}/>
        ))}
      </div>
    </div>
  );
}

export default Body;
