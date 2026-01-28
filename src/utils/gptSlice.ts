import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GptState {
  GptButton: boolean;
  movieNamesResult: string[] | null;
  movieListResult: any[] | null;
}

const initialState: GptState = {
  GptButton: false,
  movieNamesResult: null,
  movieListResult: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptButton: (state) => {
      state.GptButton = !state.GptButton;
    },
    addMoviesToList: (state, action: PayloadAction<{ movieNames: string[]; movieList: any[] }>) => {
      const { movieNames, movieList } = action.payload;
      state.movieNamesResult = movieNames;
      state.movieListResult = movieList;
    },
  },
});

export const { toggleGptButton, addMoviesToList } = gptSlice.actions;
export default gptSlice.reducer;