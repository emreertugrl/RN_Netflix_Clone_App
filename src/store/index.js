import {configureStore} from '@reduxjs/toolkit';
import watchListReducer from './slice/watchListSlice';
import movieReducer from './slice/moviesSlice';

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
    movies: movieReducer,
  },
});
