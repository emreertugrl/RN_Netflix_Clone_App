import {View, FlatList, Text} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/movieActions';
import {useEffect} from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {topRatedMovies, pending} = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => (
          <Text style={{color: 'white'}}>{item.original_title}</Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;
