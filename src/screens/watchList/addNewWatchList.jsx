import {ScrollView, View, Text} from 'react-native';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {newWatchListSchema} from '../../utils/validationSchemas';
import {addNewWatchList} from '../../store/slice/watchListSlice';
import {addNewWatchListStyle} from '../../styles/watchListStyle/addNewWatchListStyle';

const AddNewWatchList = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={defaultScreenStyle.container}>
      <Formik
        initialValues={{
          id: new Date().getTime(),
          title: '',
        }}
        validationSchema={newWatchListSchema}
        onSubmit={values => {
          dispatch(addNewWatchList(values));
          navigation.goBack();
        }}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <ScrollView>
            <View style={addNewWatchListStyle.addNewWatchListTextContainer}>
              <Text style={addNewWatchListStyle.addNewWatchListText}>
                Ready to watch?
              </Text>
              <Text style={addNewWatchListStyle.addNewWatchListSubText}>
                Enter your list to create for special Netflix?
              </Text>
            </View>
            <Input
              error={errors.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              title="Watch List Name"
            />
            <Button
              onPress={handleSubmit}
              title={'Create'}
              status={'primary'}
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default AddNewWatchList;
