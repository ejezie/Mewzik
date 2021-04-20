import React from "react";
import "./Login.css";
import { loginUrl } from "./spotifyme";

function Login() {
  return (
    <div className="login">
      <i className="fas fa-headphones-alt login-logo"></i>
      <h1 className="login-head">MEWZIK</h1>
      <a href={loginUrl} className="login-button">
        <div className="button-con">
          <i className="fab fa-spotify spot-logo"></i>
          Spotify Login
        </div>
      </a>
    </div>
  );
}

export default Login;


