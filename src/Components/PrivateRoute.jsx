import React from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const PrivateRoute = ({ children }) => {
  const { state, handleLogin } = React.useContext(AppContext);
  if (state.isAuth === true) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
