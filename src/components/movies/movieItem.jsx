//import liraries
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import {MOVIEDETAIL} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';

// create a component
const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
      />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default MovieItem;
