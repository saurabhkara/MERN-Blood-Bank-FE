import React from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }) {
  if (!localStorage.getItem("token")) {
    return children;
  } else {
    console.log("Home");
    return <Navigate to="/" />;
  }
}
