import { LOGIN, LOGOUT, SIGNUP } from "./ActionType";

let initialState = {
  users: [],
  user: {},
  islogin: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  console.log(payload);

  switch (type) {
    case SIGNUP:
      return {
        ...state,
        users: [...state.users, payload],
        islogin: true,
        user: payload,
      };
    case LOGIN:
      let Founduser = state.users.find(
        (ele) => ele.email == payload.email && ele.password == payload.password
      );
      if (Founduser) return { ...state, user: Founduser, islogin: true };
      else return state;
    case LOGOUT:
      return { ...state, user: {}, islogin: false };
    default:
      return state;
  }
};
