import { configureStore} from '@reduxjs/toolkit';
import {moviesApi} from "../redux/api/movies"; 
import moviesReducer from "../redux/reducers/movie";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, 
    moviesReducer, 
  },
  
});
