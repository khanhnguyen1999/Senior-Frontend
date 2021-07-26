import { createSelector } from "reselect";

export const isToastSelector = createSelector(
  (state) => state.Toast,
  (Toast) => Toast.isToast
);
