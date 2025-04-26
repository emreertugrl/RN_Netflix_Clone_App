import {View, FlatList, Text} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WatchListItem from '../../components/watchList/watchListItem';
import {watchListStyle} from '../../styles/watchListStyle';

const WatchList = () => {
  const {watchList} = useSelector(state => state.watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <View style={watchListStyle.watchListHeaderContainer}>
            <Text style={watchListStyle.watchListHeaderText}>
              Who's watching?
            </Text>
          </View>
        }
        numColumns={2}
        data={watchList}
        renderItem={({item, index}) => (
          <WatchListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default WatchList;
