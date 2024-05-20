import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = gestureHandlerRootHOC(() => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <BottomTabNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
});

export default App;
