const tk = "BQDNPyNRwQyZ5pJGQKbkiuwpCOQsRfZEdJXqnYM3LdDZdgj3DX19gZI3jz6vQ6sm6WohFXMB25JsXpVGK0vzahrUv4kzHZhiVIhucgLAcWJ0iSH4c7EdmA62M83quWMeU3ExqY6uMwpoehHMJQgpSOb4LN7MtVmDrsux8Sd-1A1EtRl34lMXoBbmPO_-7ErzR9H9ELZMBhXB0w"
export const initialState = {
  user: null,
  playlist: [],
  item: null,
  playing: false,
  token:
    null, 
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
    case "SET_RECENT":
      return{
        ...state,
        recent: action.recent,
      }
    default:
      return state;
  }
};

export default reducer;
