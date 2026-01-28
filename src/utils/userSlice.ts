import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    // Using _state to tell TypeScript we are intentionally not using the state variable
    addUser: (_state, action) => {
      return action.payload;
    },
    removeUser: (_state) => {
      return null;
    },
  },
}); // <-- This was missing the closing brace and parenthesis

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;