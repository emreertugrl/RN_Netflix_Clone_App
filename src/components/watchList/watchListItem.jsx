import {Text, View, Image} from 'react-native';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {watchListStyle} from '../../styles/watchListStyle';
import {getRandomColor} from '../../utils/functions';

const WatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.replace(TAB)}
      style={watchListStyle.watchListContainer}>
      <View
        style={[
          watchListStyle.watchListIcon,
          {backgroundColor: getRandomColor(index)},
        ]}>
        <Image source={require('../../assets/image/smile.png')} />
      </View>
      <Text style={watchListStyle.text}>{item.title}</Text>
    </Pressable>
  );
};

export default WatchListItem;
