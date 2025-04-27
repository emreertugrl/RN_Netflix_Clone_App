import {createAsyncThunk} from '@reduxjs/toolkit';
import {CATEGORIES_URL, TOP_RATED_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_URL, params);
    // console.log('getTopRatedMovies', response);
    return response.data.results;
  },
);

const getCategories = createAsyncThunk('movies/getCategories', async params => {
  const response = await getRequest(CATEGORIES_URL, params);
  return response.data.genres;
});

export {getTopRatedMovies, getCategories};
