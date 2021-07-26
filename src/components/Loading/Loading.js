import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../selectors/loading.selector";

export default function CircularUnderLoad() {
  const loading = useSelector(isLoadingSelector);
  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loading-icon">
            <CircularProgress disableShrink />
          </div>
        </div>
      )}
    </>
  );
}
