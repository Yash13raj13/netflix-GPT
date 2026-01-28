import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        GptButton:false,
        movieListResult:null,
        movieNamesResult:null,
    },
    reducers:{
        toggleGptButton:(state)=>{
            state.GptButton=!state.GptButton;
        },
        addMoviesToList:(state,action)=>{
            const {movieNames,movieList}=action.payload;
            state.movieNamesResult=movieNames;
            state.movieListResult=movieList;
        }
    }
});
export const {toggleGptButton,addMoviesToList}=gptSlice.actions;
export default gptSlice.reducer;