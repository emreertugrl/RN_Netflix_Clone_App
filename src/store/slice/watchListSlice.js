import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  watchList: [
    {
      id: 1,
      title: 'All',
    },
  ],
};
const watchListSlice = createSlice({
  name: 'WatchList',
  initialState,
  reducers: {
    addNewWatchList: (state, action) => {
      state.watchList = [...state.watchList, action.payload];
    },
  },
});

export const {addNewWatchList} = watchListSlice.actions;

export default watchListSlice.reducer;
