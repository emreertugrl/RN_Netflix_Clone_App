import {createSlice} from '@reduxjs/toolkit';
import {getCategories, getTopRatedMovies} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  categories: [],
  pending: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'movies', // action kısmıyla aynı
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Rate Movies
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      // Categories
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.pending = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
