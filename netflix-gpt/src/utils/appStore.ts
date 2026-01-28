
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './gptSlice';
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gptview:gptReducer
        }
    }
)
export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;