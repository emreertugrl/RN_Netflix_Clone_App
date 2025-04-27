//import liraries
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedMovies} from '../../store/actions/movieActions';
import {useEffect} from 'react';
import MovieItem from '../movies/movieItem';

// create a component
const Section = ({section}) => {
  const dispatch = useDispatch();
  const {topRatedMovies} = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{section.title}</Text>
      <FlatList
        horizontal
        data={topRatedMovies}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});

//make this component available to the app
export default Section;
