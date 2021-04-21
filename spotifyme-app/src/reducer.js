export const initialState = {
  user: null,
  playlist: [],
  item: null,
  playing: false,
  token: "BQB39XpfAFoafigl3y2V7mVgehfCQgKd6c3jrHH-rV9vitM-AUk3i7R4pD6hd79Vn72LpPaj_uw8YyECTB4bfdZ1tSVLrk224Uw5VdokTNAipeZek9oADKulh5FzJMY2L0RCB4agPJA7WSO4sYBskJXHeDe6XW1znbeoEjgyzRAiKfr8SW5NKhxgcdWLKSAD6z1dDLokr7qRtA",
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
    default:
      return state;
  }
};

export default reducer;
