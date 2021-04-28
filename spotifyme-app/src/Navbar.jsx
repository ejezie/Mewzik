import React from "react";
import "./Navbar.css";

function Navbar({ show, showSide }) {
  return (
    <div className="navbar" onClick={showSide}>
      <i class="fas fa-bars"></i>
    </div>
  );
}

export default Navbar;
