import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const HomeScreen = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default HomeScreen;
