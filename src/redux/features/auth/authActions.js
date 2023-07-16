import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

//Login user
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        setTimeout(() => {
          window.location.replace("/");
        }, 1000);
        return data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

//Register user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    {
      email,
      password,
      role,
      name,
      organizationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        email,
        password,
        role,
        name,
        organizationName,
        hospitalName,
        website,
        address,
        phone,
      });

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.replace("/login");
        }, 1000);
        return data;
      }
    } catch (error) {
      if (error.response && error.response.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

//Get Currrent User

export const getCurrentUser = createAsyncThunk(
  "auth/getcurrentuser",
  async ({ ab }, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/auth/current-user");
      if (data.success) {
        return data;
      }
    } catch (error) {
      if (error.response && error.response.message) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);
