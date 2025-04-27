//import liraries
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';
// create a component
const Section = ({item}) => {
  const {topRatedMovies, popularMovies} = useSelector(state => state.movies);
  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return popularMovies;
      case 3:
        return topRatedMovies;
      case 4:
        return topRatedMovies;
      case 5:
        return topRatedMovies;
      case 6:
        return topRatedMovies;
      case 7:
        return topRatedMovies;
      case 8:
        return topRatedMovies;
      case 9:
        return topRatedMovies;
      default:
        return topRatedMovies;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
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
