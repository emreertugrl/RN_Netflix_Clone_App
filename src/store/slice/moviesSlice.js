import {createSlice} from '@reduxjs/toolkit';
import {
  getCategories,
  getMovieData,
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
  movieDetailData: {},
  pending: false,
  pendingDetailData: false,
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
      // Movie Data
      .addCase(getMovieData.pending, state => {
        state.pendingDetailData = true;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.pendingDetailData = false;
        state.movieDetailData = action.payload;
      })
      .addCase(getMovieData.rejected, (state, action) => {
        state.pendingDetailData = false;
        state.error = action.error;
      });
  },
});

export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
