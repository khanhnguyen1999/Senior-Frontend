import { combineReducers } from "redux";

// import reducers
import LoadingReducer from "../reducers/loading.reducer";
import AuthReducer from "../reducers/auth.reducer";
import ToastReducer from "../reducers/toast.reducer";
//reducers

const reducers = combineReducers({
  Loading: LoadingReducer,
  Auth: AuthReducer,
  Toast: ToastReducer,
});

export default reducers;
