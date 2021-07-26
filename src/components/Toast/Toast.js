import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { isToastSelector } from "../../selectors/toast.selector";
import { actHideToast } from "../../actions/toast.action";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ToastComponent() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const toast = useSelector(isToastSelector);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(toast);
  }, [toast]);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(actHideToast());
  };
  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Login fail,please login again!
        </Alert>
      </Snackbar>
    </div>
  );
}
