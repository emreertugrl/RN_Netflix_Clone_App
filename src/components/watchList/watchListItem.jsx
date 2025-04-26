import {Text, View, Image} from 'react-native';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {watchListStyle} from '../../styles/watchListStyle';

const WatchListItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.replace(TAB)}
      style={watchListStyle.watchListContainer}>
      <View style={watchListStyle.watchListIcon}>
        <Image source={require('../../assets/image/smile.png')} />
      </View>
      <Text style={watchListStyle.text}>{item.title}</Text>
    </Pressable>
  );
};

export default WatchListItem;
