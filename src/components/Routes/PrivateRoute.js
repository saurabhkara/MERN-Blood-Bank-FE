import React, { useEffect } from "react";
import API from "../../services/API";
import { useDispatch } from "react-redux";

import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../redux/features/auth/authActions";

export default function PrivateRoute({ children }) {
  const dispatch = useDispatch();
  const getUser = async () => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data.success) {
        dispatch(getCurrentUser());
      }

      if (!data.success) {
        throw new Error("user not found");
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
}
