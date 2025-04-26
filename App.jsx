import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/router/rootNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="transparent" translucent />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}
