import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import CategoryItem from '../components/widgets/categoryItem';

const Categories = () => {
  const {categories} = useSelector(state => state.movies);
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Categories;
