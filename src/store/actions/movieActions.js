import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOP_RATED_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    const response = await getRequest(TOP_RATED_URL, params);
    // console.log('getTopRatedMovies', response);
    return response.data.results;
  },
);

export {getTopRatedMovies};
