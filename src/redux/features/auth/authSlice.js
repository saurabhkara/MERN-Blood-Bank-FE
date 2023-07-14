import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, registerUser, userLogin } from "./authActions";

let token = localStorage.getItem("token");

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: token ? token : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      // state.token = payload.token;
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    //current-user
    builder.addCase(getCurrentUser.pending, (state) => {
      console.log("Get Current User pending");
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
      console.log("Get Current User fulfilled");
      state.loading = false;
      state.user = payload.user;
    });
    builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
      console.log("Get Current User rejected");
      state.loading = false;
      state.error = payload;
    });
  },
});

export default authSlice;
