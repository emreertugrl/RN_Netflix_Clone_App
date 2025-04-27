import {
  StyleSheet,
  ScrollView,
  View,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {ThemeColors} from '../../theme/themeColors';
import {IMAGE_BASE_URL} from '../../service/urls';
import {height, width} from '../../utils/constants';
import {Heart} from 'iconsax-react-nativejs';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const dispatch = useDispatch();
  const {movieDetailData: movie, pendingDetailData} = useSelector(
    state => state.movies,
  );
  useEffect(() => {
    dispatch(getMovieData({movieId: movieId}));
  }, []);
  return (
    <View style={styles.detailScreen}>
      {pendingDetailData ? (
        <View style={styles.activityContainer}>
          <ActivityIndicator color={ThemeColors.WHITE} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            style={styles.image}
            source={{uri: IMAGE_BASE_URL + movie?.poster_path}}
          />
          <View style={styles.infoContainer}>
            <View style={styles.heartContainer}>
              <Heart color={ThemeColors.RED} size={30} style={styles.heart} />
              <Text style={styles.title}>{movie?.original_title}</Text>
            </View>
            <Text style={styles.tagline}>{movie?.tagline}</Text>
            <Text style={styles.overView}>{movie?.overview}</Text>
            <Text style={styles.section}>Language</Text>
            <View style={styles.genresContainer}>
              {movie?.spoken_languages?.map((item, index) => (
                <Text key={index} style={styles.genres}>
                  {item?.name}
                </Text>
              ))}
            </View>
            <Text style={styles.section}>Production Country</Text>
            <View style={styles.genresContainer}>
              {movie?.production_countries?.map((item, index) => (
                <Text key={index} style={styles.genres}>
                  {item?.name}
                </Text>
              ))}
            </View>
            <Text style={styles.section}>Genres</Text>
            <View style={styles.genresContainer}>
              {movie?.genres?.map((item, index) => (
                <Text key={index} style={styles.genres}>
                  {item?.name}
                </Text>
              ))}
            </View>
          </View>
          <Text style={styles.vote}>{movie?.vote_average?.toFixed(1)}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreen: {flex: 1, backgroundColor: ThemeColors.BLACK},
  activityContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  image: {width: width, height: height * 0.6, resizeMode: 'cover'},
  infoContainer: {padding: 10, marginTop: 15, marginBottom: 40},
  title: {color: ThemeColors.WHITE, fontSize: 25, fontWeight: 'bold'},
  tagline: {color: ThemeColors.WHITE, fontSize: 18, marginTop: 10},
  overView: {color: ThemeColors.GRAY, fontSize: 16, marginTop: 10},
  section: {
    color: ThemeColors.RED,
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
  },
  heartContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  genresContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: ThemeColors.WHITE,
  },
  genres: {
    color: ThemeColors.WHITE,
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: ThemeColors.RED,
    flexShrink: 0,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: ThemeColors.WHITE,
  },
  vote: {
    backgroundColor: ThemeColors.RED,
    position: 'absolute',
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: ThemeColors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
    color: ThemeColors.WHITE,
    right: width / 15,
    top: width / 15,
  },
});

export default MovieDetail;
