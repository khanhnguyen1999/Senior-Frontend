import { apiAuth } from "../services";
import { actHideLoading, actShowLoading } from "./loading.action";
import { actShowToast } from "./toast.action";

const nameSpace = "auth:";

export const LOGIN_FAIL = `${nameSpace}LOGIN_FAIL`;
export const LOGIN_SUCCESS = `${nameSpace}LOGIN_SUCCESS`;
export const LOGOUT_FAIL = `${nameSpace}LOGOUT_FAIL`;

// login
export const actLoginFail = () => ({
  type: LOGIN_FAIL,
});
export const actLoginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const asyncHandleLogin = ({ username, password, history }) => {
  return async (dispatch) => {
    try {
      dispatch(actShowLoading());
      const response = await apiAuth.login({ username, password });
      dispatch(actHideLoading());
      if (!response.data.authenticated) {
        dispatch(actLoginFail());
        dispatch(actShowToast());
      } else {
        dispatch(actLoginSuccess());
        localStorage.setItem("ACCESS_TOKEN", response.data.authenticated);
        history.push("/");
      }
    } catch (err) {
      dispatch(actHideLoading());
      dispatch(actLoginFail());
      dispatch(actShowToast());
    }
  };
};
