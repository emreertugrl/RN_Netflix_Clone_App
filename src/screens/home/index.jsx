import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';
import {
  getCategories,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from '../../store/actions/movieActions';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpComingMovies());
    dispatch(getNowPlayingMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default HomeScreen;
