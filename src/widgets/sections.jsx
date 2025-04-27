import {View, FlatList} from 'react-native';
import {sections} from '../utils/constants';
import Section from '../components/widgets/section';

const Sections = () => {
  return (
    <View>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

export default Sections;
