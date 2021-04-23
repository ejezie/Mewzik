import React from "react";
import "./Header.css";
import {useStateProvider} from "./StateProvider";

function Header({ spotify }) {
  const [{ user }] = useStateProvider();

  return (
    <div className="header">
      <div className="header-left">
        <input type="text" placeholder="search your songs" />
        <i class="fas fa-search"></i>
      </div>
      <div className="header-right">
        <img src= {user?.images[0].url} alt="user"/>
        <p>{user?.display_name}</p>
      </div>
    </div>
  );
}

export default Header;
