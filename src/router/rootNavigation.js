import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GETSTARTED, SIGNIN, WATCHLIST} from '../utils/routes';
import WatchList from '../screens/watchList';
import GetStarted from '../screens/getStarted';
import SignIn from '../screens/signIn';
import {ThemeColors} from '../theme/themeColors';

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
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen name={WATCHLIST} component={WatchList} />
    </Stack.Navigator>
  );
};
