import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ADDNEWWATCHLIST, GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';
import GetStarted from '../screens/getStarted';
import SignIn from '../screens/signIn';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-nativejs';
import AddNewWatchList from '../screens/watchList/addNewWatchList';

const Stack = createNativeStackNavigator();

export default RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <Edit2
              onPress={() => navigation.navigate(ADDNEWWATCHLIST)}
              color={ThemeColors.WHITE}
              size={25}
            />
          ),
        })}
        name={WATCHLIST}
        component={WatchList}
      />
      <Stack.Screen name={ADDNEWWATCHLIST} component={AddNewWatchList} />
      <Stack.Screen name={SIGNIN} component={SignIn} />
    </Stack.Navigator>
  );
};
