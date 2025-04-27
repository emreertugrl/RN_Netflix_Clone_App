//import liraries
import {View, StyleSheet, Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';

// create a component
const MovieItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
      />
    </View>
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
