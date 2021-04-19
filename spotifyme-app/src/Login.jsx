import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <i class="fas fa-headphones-alt login-logo"></i>
      <h1 className="login-head">MEWZIK</h1>
      <a href="#" className="login-button">
        <div className="button-con">
          <i class="fab fa-spotify spot-logo"></i>
          Spotify Login
        </div>
      </a>
    </div>
  );
}

export default Login;
