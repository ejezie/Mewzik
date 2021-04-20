import React from "react";
import "./Login.css";
import {loginUrl} from "./spotifyme"

function Login() {
  return (
    <div className="login">
      <i class="fas fa-headphones-alt login-logo"></i>
      <h1 className="login-head">MEWZIK</h1>
      <a href={loginUrl} className="login-button">
        <div className="button-con">
          <i class="fab fa-spotify spot-logo"></i>
          Spotify Login
        </div>
      </a>
    </div>
  );
}

export default Login;


// export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
//   "%20"
// )}&response_type=token&show_dialog=true`;