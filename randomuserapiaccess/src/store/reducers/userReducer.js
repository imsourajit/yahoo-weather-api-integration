import { GET_USERS } from "../actions/types";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return state;
      break;
    default:
      return state;
  }
};
