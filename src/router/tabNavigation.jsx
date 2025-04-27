import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import NewHotScreen from '../screens/newHot';
import SearchScreen from '../screens/search';
import DownloadsScreen from '../screens/downloads';
import {DOWNLOADS, HOME, NEWHOT, SEARCH} from '../utils/routes';
import {ThemeColors} from '../theme/themeColors';
import TabBarIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        headerTintColor: ThemeColors.WHITE,
        tabBarStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
        tabBarActiveTintColor: ThemeColors.WHITE,
        //tabBarInactiveTintColor: ThemeColors.WHITE,
        tabBarIcon: ({focused, color, size}) => (
          <TabBarIcon
            focused={focused}
            color={color}
            size={size}
            route={route}
          />
        ),
      })}>
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={NEWHOT} component={NewHotScreen} />
      <Tab.Screen name={SEARCH} component={SearchScreen} />
      <Tab.Screen name={DOWNLOADS} component={DownloadsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
