import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../actions/movieActions';

const initialState = {
  topRatedMovies: [],
  popularMovies: [],
  upComingMovies: [],
  nowPlayingMovies: [],
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
      })
      // Popular Movies
      .addCase(getPopularMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.popularMovies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      // Upcoming Movies
      .addCase(getUpComingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getUpComingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.upComingMovies = action.payload;
      })
      .addCase(getUpComingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      // Now Playing Movies
      .addCase(getNowPlayingMovies.pending, state => {
        state.pending = true;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
