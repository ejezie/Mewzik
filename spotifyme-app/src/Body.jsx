import React from "react";
import "./Body.css";
import Header from "./Header"

function Body({spotify}) {
  return <div className="body">
    <Header spotify={spotify}/>
    {/* <div className="body-info">
      <img src="" alt=""/>
      <div className="info-text"></div>
    </div> */}
  </div>;
}

export default Body;
