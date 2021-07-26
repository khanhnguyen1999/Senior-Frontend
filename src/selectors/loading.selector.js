import { createSelector } from "reselect";

export const isLoadingSelector = createSelector(
  (state) => state.Loading,
  (Loading) => Loading.isLoading
);
