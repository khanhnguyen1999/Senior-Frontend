import React from "react";
import { Redirect, Route } from "react-router-dom";

const GuestGuard = ({
  component: Component,
  isAuthenticated = false,
  ...rest
}) => {
  if (isAuthenticated) return <Redirect to="/" />;
  return <Route {...rest} component={Component} />;
};

export default GuestGuard;
