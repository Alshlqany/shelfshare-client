import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const initialState = {
  token: "",
  role: "user",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
      state.role = jwtDecode(action.payload).role;
    },
    logout: (state) => {
      state.token = "";
      state.role = "user";
      localStorage.removeItem("token");
    },
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
