import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/auth.action";

const initState = {
  ACCESS_TOKEN: false,
};

export default function AuthReducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ACCESS_TOKEN: true,
      };
    default:
      return state;
  }
}
