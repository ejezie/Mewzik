export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";

const clientId = "817f21565c8d409d8df7ee8b6a1a670e";

const scope = [
    "useri-read-current-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]