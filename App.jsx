import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = gestureHandlerRootHOC(() => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <BottomTabNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
});

export default App;
