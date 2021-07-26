import { SHOW_TOAST, HIDE_TOAST } from "../actions/toast.action";

const initState = {
  isToast: false,
};

export default function ToastReducer(state = initState, action) {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        isToast: true,
      };
    case HIDE_TOAST:
      return {
        isToast: false,
      };
    default:
      return state;
  }
}
