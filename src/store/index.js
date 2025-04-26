import {configureStore} from '@reduxjs/toolkit';
import watchListReducer from './slice/watchListSlice';
export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
});
