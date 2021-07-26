import { createSelector } from "reselect";

export const authSelector = createSelector(
  (state) => state.Auth,
  (Auth) => Auth.ACCESS_TOKEN
);
