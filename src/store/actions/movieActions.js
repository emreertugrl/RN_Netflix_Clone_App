import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  CATEGORIES_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_URL,
  UPCOMING_MOVIES_URL,
  NOWPLAYING_MOVIES_URL,
} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_URL, params);
    // console.log('getTopRatedMovies', response);
    return response.data.results;
  },
);
const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async params => {
    const response = await getRequest(POPULAR_MOVIES_URL, params);
    return response.data.results;
  },
);
const getUpComingMovies = createAsyncThunk(
  'movies/getUpComingMovies',
  async params => {
    const response = await getRequest(UPCOMING_MOVIES_URL, params);
    return response.data.results;
  },
);
const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlayingMovies',
  async params => {
    const response = await getRequest(NOWPLAYING_MOVIES_URL, params);
    return response.data.results;
  },
);
const getCategories = createAsyncThunk('movies/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);
  return response.data.genres;
});

export {
  getTopRatedMovies,
  getPopularMovies,
  getUpComingMovies,
  getNowPlayingMovies,
  getCategories,
};
