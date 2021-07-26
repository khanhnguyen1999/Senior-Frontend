import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, useHistory, Route } from "react-router-dom";

import Login from "./features/Login/Login";
import UserDetail from "./features/UserDetail/UserDetail";
import Loading from "./components/Loading/Loading";
import GuestGuard from "./guards/GuestGuard";
import ToastComponent from "./components/Toast/Toast";
// material core
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

function App() {
  const history = useHistory();
  const classes = useStyles();
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("ACCESS_TOKEN")
  );
  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    if (!accessToken) {
      history.push("/login");
    }
  }, [localStorage.getItem("ACCESS_TOKEN")]);
  return (
    <>
      <div className={classes.root}>
        <Switch>
          <GuestGuard
            isAuthenticated={accessToken}
            exact
            path="/login"
            component={Login}
          />
          <Route path="/" exact={true} component={UserDetail} />
        </Switch>
      </div>
      <Loading />
      <ToastComponent />
    </>
  );
}

export default App;
