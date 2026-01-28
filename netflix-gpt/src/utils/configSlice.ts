import { createSlice } from "@reduxjs/toolkit";

// 1. Define the type for your initial state
interface ConfigState {
  lang: string;
}

const initialState: ConfigState = {
  lang: "en",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    // 2. Add PayloadAction<string> so TS knows 'action.payload' is a string
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;