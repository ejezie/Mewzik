import "./App.css";
import Login from "./Login";
import { useEffect } from "react";
import { getTokenFromUrl } from "./spotifyme";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateProvider } from "./StateProvider";
// import reducer from "./reducer";

const spotify = new SpotifyWebApi();
function App() {
  const [{ user, token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("2JQp7CIXLPdPv5pTv7m882").then(response=>{
        dispatch({
          type: "SET_RECENT",
          recent : response
        })
      })
    }
  }, []);
  console.log(token);
  console.log(user);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
