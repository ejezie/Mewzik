export const initialState = {
  user: null,
  playlist: [],
  item: null,
  playing: false,
  token:
    "BQAl1xlywzXXqFLjG14FicFUjYZCXx71rOdsyP85ZLP4ipcrM9pQWQySCoi4sinu13SIP-He37nzXGwkKU8Sp2zWeT2O_25EbAwvGOd0RsDzPKkPQ-VP0HmjjNU97OiYWGBZmBiZnIwmZFbHZ4CkshEliHTZiMQODiSk2ja9W12UIrFClg31ZHVY4i-dwDtHIKm16nae0l3LTw",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
