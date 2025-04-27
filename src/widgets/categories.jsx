import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getCategories} from '../store/actions/movieActions';
import CategoryItem from '../components/widgets/categoryItem';

const Categories = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state => state.movies);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
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
