import React, { useEffect } from "react";
import API from "../../services/API";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/features/auth/authActions";

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const res = await API.get("/auth/current-user");
      if (res.data.success) {
        console.log("success aa gaya ");
        dispatch(getCurrentUser("Ab"));
      } else {
        throw Error("Not found");
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  });

  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
